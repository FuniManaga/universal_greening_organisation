import React from 'react'

const SDGProgressTracker: React.FC = () => {
  const sdgProgress = [
    { goal: 'No Poverty', progress: 65 },
    { goal: 'Zero Hunger', progress: 72 },
    { goal: 'Quality Education', progress: 80 },
    // Add more SDGs as needed
  ]

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">SDG Progress</h3>
      {sdgProgress.map((sdg) => (
        <div key={sdg.goal} className="mb-4">
          <div className="flex justify-between mb-1">
            <span>{sdg.goal}</span>
            <span>{sdg.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${sdg.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SDGProgressTracker

