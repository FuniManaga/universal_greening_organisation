import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  UserPlus,
  School,
  Building2,
  GraduationCap 
} from "lucide-react"
import Link from "next/link"

export default function NetworkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">My Network</h1>
            <p className="text-gray-600">Connect with other UGO members</p>
          </div>
          <Link href="/network/membership/join">
            <Button className="bg-[#00703C] hover:bg-[#005c32]">
              <UserPlus className="h-5 w-5 mr-2" />
              Invite Member
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Network Members</h3>
              <Users className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Events Attended</h3>
              <Calendar className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Discussions</h3>
              <MessageSquare className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>
        </div>

        {/* Network Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Students */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Students</h3>
                <p className="text-sm text-gray-500">0 members</p>
              </div>
            </div>
          </Card>

          {/* Institutions */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <School className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Academic Institutions</h3>
                <p className="text-sm text-gray-500">0 partners</p>
              </div>
            </div>
          </Card>

          {/* Organizations */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold">Organizations</h3>
                <p className="text-sm text-gray-500">0 partners</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Network Activity</h2>
          <Card className="divide-y divide-gray-200">
            <div className="text-center text-gray-500 py-8">
              No recent network activity to display
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}