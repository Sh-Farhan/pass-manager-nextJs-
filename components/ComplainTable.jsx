// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// export default function ComplaintsTable() {
//   const complaints = [
//     { "address": "12 MG Road, Bengaluru, India", "complaint": "Potholes on road" },
//     { "address": "25 Lajpat Nagar, New Delhi, India", "complaint": "Broken streetlight" },
//     { "address": "78 Marine Drive, Mumbai, India", "complaint": "Abandoned vehicle" },
//     { "address": "303 Park Street, Kolkata, India", "complaint": "Noise complaint" },
//     { "address": "66 T Nagar, Chennai, India", "complaint": "Trash not collected" },
//     { "address": "18 Kharadi Road, Pune, India", "complaint": "Illegal construction" },
//     { "address": "402 Banjara Hills, Hyderabad, India", "complaint": "Water leakage" },
//     { "address": "5 Sector 17, Chandigarh, India", "complaint": "Stray animals issue" },
//     { "address": "104 Anna Salai, Chennai, India", "complaint": "Overgrown vegetation" },
//     { "address": "56 Viman Nagar, Pune, India", "complaint": "Street vendor nuisance" },
//     { "address": "89 Civil Lines, Jaipur, India", "complaint": "Power outage" },
//     { "address": "33 Old Rajinder Nagar, New Delhi, India", "complaint": "Garbage dumping" },
//     { "address": "777 Residency Road, Bengaluru, India", "complaint": "Water contamination" },
//     { "address": "24 MG Road, Kochi, India", "complaint": "Blocked drainage" },
//     { "address": "99 Salt Lake, Kolkata, India", "complaint": "Public urination" },
//     { "address": "150 Sarojini Nagar, Lucknow, India", "complaint": "Parking violation" },
//     { "address": "48 Gachibowli, Hyderabad, India", "complaint": "Illegal advertising banners" },
//     { "address": "12 Jubilee Hills, Hyderabad, India", "complaint": "Noise pollution from construction" },
//     { "address": "2 Mall Road, Shimla, India", "complaint": "Lack of street lighting" },
//     { "address": "9 Connaught Place, New Delhi, India", "complaint": "Open manhole" }
//   ]

//   return (
//     <div className="container mx-auto py-10 h-96 mt-5 border overflow-y-scroll">
//       <Table>
//         <TableCaption>List of Complaints</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[300px]">Address</TableHead>
//             <TableHead>Complaint</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {complaints.map((item, index) => (
//             <TableRow key={index}>
//               <TableCell className="font-medium">{item.address}</TableCell>
//               <TableCell>{item.complaint}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }

import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ComplaintsTable() {
  const complaints = [
    { "aadharNo": "123456789012", "phoneNo": "9876543210", "address": "12 MG Road, Bengaluru, India", "problemType": "Infrastructure", "description": "Potholes on road" },
    { "aadharNo": "234567890123", "phoneNo": "8765432109", "address": "25 Lajpat Nagar, New Delhi, India", "problemType": "Utilities", "description": "Broken streetlight" },
    { "aadharNo": "345678901234", "phoneNo": "7654321098", "address": "78 Marine Drive, Mumbai, India", "problemType": "Parking", "description": "Abandoned vehicle" },
    { "aadharNo": "456789012345", "phoneNo": "6543210987", "address": "303 Park Street, Kolkata, India", "problemType": "Noise", "description": "Noise complaint" },
    { "aadharNo": "567890123456", "phoneNo": "5432109876", "address": "66 T Nagar, Chennai, India", "problemType": "Sanitation", "description": "Trash not collected" },
    { "aadharNo": "678901234567", "phoneNo": "4321098765", "address": "18 Kharadi Road, Pune, India", "problemType": "Construction", "description": "Illegal construction" },
    { "aadharNo": "789012345678", "phoneNo": "3210987654", "address": "402 Banjara Hills, Hyderabad, India", "problemType": "Water", "description": "Water leakage" },
    { "aadharNo": "890123456789", "phoneNo": "2109876543", "address": "5 Sector 17, Chandigarh, India", "problemType": "Animals", "description": "Stray animals issue" },
    { "aadharNo": "901234567890", "phoneNo": "1098765432", "address": "104 Anna Salai, Chennai, India", "problemType": "Landscaping", "description": "Overgrown vegetation" },
    { "aadharNo": "012345678901", "phoneNo": "0987654321", "address": "56 Viman Nagar, Pune, India", "problemType": "Public Nuisance", "description": "Street vendor nuisance" }
  ]

  return (
    <div className="container mx-auto py-10 h-96 mt-5 border overflow-y-scroll">
      <Table>
        <TableCaption>List of Complaints</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Aadhar No.</TableHead>
            <TableHead className="w-[120px]">Phone No.</TableHead>
            <TableHead className="w-[300px]">Address</TableHead>
            <TableHead className="w-[120px]">Problem Type</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {complaints.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.aadharNo.slice(-4).padStart(12, '*')}</TableCell>
              <TableCell>{item.phoneNo}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.problemType}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}