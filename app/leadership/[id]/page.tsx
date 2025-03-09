import React from 'react';
import { notFound } from 'next/navigation';
import LeadershipDetail from '@/components/LeadershipDetail';
import { leadershipTeam } from '@/data/leadershipTeam';  // Adjust this import based on where your data is stored

// Add this interface above the component
interface Education {
  degree?: string;  // Made optional
  institution?: string;
  period?: string;
  year?: string;
  certification?: string;
  status?: string;  // Made optional since it's not used in all cases
  researchFocus?: string;
}

// Update your data structure in leadershipTeam to include institution
// Example:
// education: [
//   {
//     degree: "Ph.D.",
//     institution: "University Name",  // Add this
//     status: "Completed",
//     researchFocus: "..."
//   }
// ]

interface LeadershipMember {
  category?: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  achievements?: string[];
  expertise?: string[];
  quote?: string;
  education?: Education[];
  experience: {
    years?: string | number;  // Made optional
    sectors?: string[];
    currentRoles?: string[];
    current_role?: {          // Added this
      title: string;
      organization: string;
      focus: string;
      start: string;
    };
    career_history?: any[];   // Added this
    projectsLed?: number;     // Added this
    teamSize?: number;        // Added this
    highlights?: string[];    // Added this
  };
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
  };
}

export async function generateStaticParams() {
  return leadershipTeam.map((_, index) => ({
    id: index.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const memberId = parseInt(params.id);
  const member = leadershipTeam[memberId];

  if (!member) {
    return {
      title: 'Member Not Found',
    };
  }

  return {
    title: `${member.name} - Leadership Team | Universal Greening Organisation`,
    description: `Learn more about ${member.name}, ${member.position} at Universal Greening Organisation. ${member.bio.slice(0, 150)}...`,
  };
}

export default function LeadershipDetailPage({ params }: { params: { id: string } }) {
  const memberId = parseInt(params.id);
  const member = leadershipTeam[memberId];

  if (!member) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen"> 
        <LeadershipDetail member={member} />
    </div>
  );
}
