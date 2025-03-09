'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { FileText, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Document = {
  id: string;
  title: string;
  content: string;
  document_type: 'report' | 'membership' | 'other';
  status: 'draft' | 'submitted' | 'reviewed';
  created_at: string;
};

export function DocumentsSection({
  documents: initialDocuments = [],
  userId
}: {
  documents: Document[];
  userId: string;
}) {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [isUploading, setIsUploading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    setIsUploading(true);
    try {
      // Verify authentication
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        throw new Error(`Authentication error: ${authError?.message || 'No user found'}`);
      }
      console.log('Authenticated as:', user.id);

      // Attempt upload
      const { data, error: uploadError } = await supabase.storage
        .from('student-documents')
        .upload(`${user.id}/${file.name}`, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) {
        throw uploadError;
      }

      console.log('Upload successful:', data);
      alert('File uploaded successfully!');

    } catch (error) {
      console.error('Upload error:', error);
      if (error instanceof Error) {
        alert(`Upload failed: ${error.message}`);
      } else {
        console.error('Unexpected error:', error);
        alert('Upload failed - check console for details');
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Documents</h2>
        <label className={`cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md 
                         text-sm font-medium hover:bg-green-700 transition-colors
                         ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <input
            type="file"
            className="hidden"
            onChange={handleUpload}
            disabled={isUploading}
            accept=".pdf,.doc,.docx"
          />
          <Upload className="w-4 h-4 inline-block mr-2" />
          {isUploading ? 'Uploading...' : 'Upload'}
        </label>
      </div>

      <div className="space-y-3">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <div>
                <h3 className="font-medium">{doc.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(doc.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium
              ${doc.status === 'reviewed' ? 'bg-green-100 text-green-700' :
                doc.status === 'submitted' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-700'}`}>
              {doc.status}
            </span>
          </div>
        ))}

        {documents.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No documents uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
}
