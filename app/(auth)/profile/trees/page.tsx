import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TreeDeciduous, 
  Calendar, 
  MapPin, 
  Plus 
} from "lucide-react"
import Link from "next/link"

export default function TreesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with Add Tree Button */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">My Trees</h1>
            <p className="text-gray-600">Track and manage your planted trees</p>
          </div>
          <Link href="/tree-tracker">
            <Button className="bg-[#00703C] hover:bg-[#005c32]">
              <Plus className="h-5 w-5 mr-2" />
              Plant a Tree
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Total Trees</h3>
              <TreeDeciduous className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">This Month</h3>
              <Calendar className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-600">Locations</h3>
              <MapPin className="h-5 w-5 text-[#00703C]" />
            </div>
            <p className="text-2xl font-bold">0</p>
          </Card>
        </div>

        {/* Trees List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Trees</h2>
          <Card className="divide-y divide-gray-200">
            <div className="text-center text-gray-500 py-8">
              No trees planted yet. Start by planting your first tree!
            </div>
          </Card>
        </div>

        {/* Tree Map Placeholder */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Tree Map</h2>
          <Card className="aspect-video bg-gray-50">
            <div className="flex items-center justify-center h-full text-gray-500">
              Map view coming soon
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}