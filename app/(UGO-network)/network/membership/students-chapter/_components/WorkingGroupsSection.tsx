'use client';

import { Users } from 'lucide-react';

type WorkingGroup = {
  id: string;
  name: string;
  description: string;
  working_group_members: Array<{
    role: 'member' | 'leader';
  }>;
};

export function WorkingGroupsSection({
  groups = [],
  userId
}: {
  groups: WorkingGroup[];
  userId: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Working Groups</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium
                         hover:bg-green-700 transition-colors">
          Join Group
        </button>
      </div>

      <div className="space-y-3">
        {groups.map((group) => (
          <div key={group.id} className="p-3 border rounded-lg">
            <h3 className="font-medium mb-1">{group.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{group.description}</p>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>{group.working_group_members.length} members</span>
            </div>
          </div>
        ))}

        {groups.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No working groups joined yet.
          </p>
        )}
      </div>
    </div>
  );
}
