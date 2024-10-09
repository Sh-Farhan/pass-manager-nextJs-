// "use client"

// import React, { useState } from 'react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import axios from 'axios'
// import { useEffect } from 'react';

// export default function ComplaintBox() {
//   const [complaints,setComplaints] = useState([
//     { id: 1, name: "John Doe", subject: "Faulty Product", description: "The product I received was damaged." },
//     { id: 2, name: "Jane Smith", subject: "Late Delivery", description: "My order arrived 3 days late." },
//     { id: 3, name: "Mike Johnson", subject: "Poor Customer Service", description: "The representative was unhelpful and rude." },
//     { id: 4, name: "Emily Brown", subject: "Billing Issue", description: "I was charged twice for my last purchase." },
//     { id: 5, name: "Chris Lee", subject: "Website Malfunction", description: "I couldn't complete my order due to a website error." },
//   ])

//   const getData = async () => {
//     const details = await axios.get("http://localhost:3000/api/users");
//     const dbData = await details.data;
//     // setComplaints([...comp,dbData])
//     console.log(dbData)
//   }

//   useEffect(() => {
//     getData();
//   })

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle>Recent Complaints</CardTitle>
//         <CardDescription>List of complaints submitted by customers</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ScrollArea className="h-[400px] w-full rounded-md border p-4">
//           {complaints.map((complaint) => (
//             <div key={complaint.id} className="mb-4 p-4 border rounded-lg">
//               <div className="flex items-center space-x-4 mb-2">
//                 <Avatar>
//                   <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${complaint.name}`} alt={complaint.name} />
//                   <AvatarFallback>{complaint.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <h3 className="text-sm font-semibold">{complaint.name}</h3>
//                   <p className="text-sm text-muted-foreground">{complaint.subject}</p>
//                 </div>
//               </div>
//               <p className="text-sm">{complaint.description}</p>
//             </div>
//           ))}
//         </ScrollArea>
//       </CardContent>
//       <CardFooter>
//         <p className="text-sm text-muted-foreground">Total complaints: {complaints.length}</p>
//       </CardFooter>
//     </Card>
//   )
// }

"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ComplaintBox() {
  const [complaints] = useState([
    { id: 1, aadharNo: "123456789012", phoneNo: "9876543210", address: "123 Main St, City", problemType: "Technical Issue", description: "My internet connection is very slow." },
    { id: 2, aadharNo: "234567890123", phoneNo: "8765432109", address: "456 Elm St, Town", problemType: "Billing Problem", description: "I was overcharged on my last bill." },
    { id: 3, aadharNo: "345678901234", phoneNo: "7654321098", address: "789 Oak St, Village", problemType: "Service Complaint", description: "The technician didn't show up for the scheduled appointment." },
    { id: 4, aadharNo: "456789012345", phoneNo: "6543210987", address: "101 Pine St, County", problemType: "Product Defect", description: "The router I received is not working properly." },
    { id: 5, aadharNo: "567890123456", phoneNo: "5432109876", address: "202 Maple St, District", problemType: "Other", description: "I'm unable to access my account online." },
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
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${complaint.aadharNo}`} alt={`Avatar ${complaint.aadharNo}`} />
                  <AvatarFallback>{complaint.aadharNo.slice(-4)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold">Aadhar: {complaint.aadharNo}</h3>
                  <p className="text-sm text-muted-foreground">Phone: {complaint.phoneNo}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm"><strong>Address:</strong> {complaint.address}</p>
                <p className="text-sm"><strong>Problem Type:</strong> {complaint.problemType}</p>
                <p className="text-sm"><strong>Description:</strong> {complaint.description}</p>
              </div>
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