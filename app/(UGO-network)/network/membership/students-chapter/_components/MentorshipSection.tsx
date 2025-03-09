'use client';

import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

type MentorshipSession = {
  id: string;
  start_time: string;
  end_time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  session_type: 'one_time' | 'recurring';
  meeting_link?: string;
  mentor: { first_name: string; last_name: string };
  mentee: { first_name: string; last_name: string };
};

export function MentorshipSection({
  sessions = [],
  userId
}: {
  sessions: MentorshipSession[];
  userId: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Mentorship</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium
                         hover:bg-green-700 transition-colors">
          Request Session
        </button>
      </div>

      <div className="space-y-3">
        {sessions.map((session) => (
          <div key={session.id} className="p-3 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="font-medium">
                {session.mentor.first_name} {session.mentor.last_name}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>
                {format(new Date(session.start_time), 'MMM d, h:mm a')}
              </span>
            </div>

            {session.meeting_link && (
              <a
                href={session.meeting_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 hover:underline block text-sm"
              >
                Join Meeting
              </a>
            )}
          </div>
        ))}

        {sessions.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No mentorship sessions scheduled.
          </p>
        )}
      </div>
    </div>
  );
}
