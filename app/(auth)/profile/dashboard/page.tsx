import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, TreeDeciduous, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back to UGO Network</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Trees Planted</h3>
              <TreeDeciduous className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Network Events</h3>
              <Users className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Completed Projects</h3>
              <CheckCircle2 className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Active Projects</h3>
              <Clock className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          <Card className="p-6">
            <div className="text-center text-gray-500 py-8">
              No recent activity to display
            </div>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
          <Card className="p-6">
            <div className="text-center text-gray-500 py-8">
              No upcoming events to display
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}