"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SettingsForm({ 
  field, 
  initialValue, 
  onSave 
}: { 
  field: string
  initialValue: string
  onSave: (value: string) => Promise<void>
}) {
  const [value, setValue] = useState(initialValue)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)
    try {
      await onSave(value)
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to save:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return isEditing ? (
    <div className="flex gap-2">
      <Input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder={`Enter your ${field}`}
      />
      <Button 
        onClick={handleSave} 
        disabled={isLoading}
      >
        Save
      </Button>
      <Button 
        variant="outline" 
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </Button>
    </div>
  ) : (
    <Button 
      variant="outline" 
      onClick={() => setIsEditing(true)}
    >
      Edit
    </Button>
  )
}