'use client'

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button 
      onClick={() => router.back()}
      className="absolute top-4 left-4 bg-white text-green-600 hover:bg-green-50"
    >
      ← Go Back
    </Button>
  );
}

