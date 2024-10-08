"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ComplaintBox() {
  const [complaints] = useState([
    { id: 1, name: "John Doe", subject: "Faulty Product", description: "The product I received was damaged." },
    { id: 2, name: "Jane Smith", subject: "Late Delivery", description: "My order arrived 3 days late." },
    { id: 3, name: "Mike Johnson", subject: "Poor Customer Service", description: "The representative was unhelpful and rude." },
    { id: 4, name: "Emily Brown", subject: "Billing Issue", description: "I was charged twice for my last purchase." },
    { id: 5, name: "Chris Lee", subject: "Website Malfunction", description: "I couldn't complete my order due to a website error." },
  ])

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Recent Complaints</CardTitle>
        <CardDescription>List of complaints submitted by customers</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="mb-4 p-4 border rounded-lg">
              <div className="flex items-center space-x-4 mb-2">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${complaint.name}`} alt={complaint.name} />
                  <AvatarFallback>{complaint.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold">{complaint.name}</h3>
                  <p className="text-sm text-muted-foreground">{complaint.subject}</p>
                </div>
              </div>
              <p className="text-sm">{complaint.description}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Total complaints: {complaints.length}</p>
      </CardFooter>
    </Card>
  )
}