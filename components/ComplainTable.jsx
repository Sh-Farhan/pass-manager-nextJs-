import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ComplaintsTable() {
  const complaints = [
    { "address": "12 MG Road, Bengaluru, India", "complaint": "Potholes on road" },
    { "address": "25 Lajpat Nagar, New Delhi, India", "complaint": "Broken streetlight" },
    { "address": "78 Marine Drive, Mumbai, India", "complaint": "Abandoned vehicle" },
    { "address": "303 Park Street, Kolkata, India", "complaint": "Noise complaint" },
    { "address": "66 T Nagar, Chennai, India", "complaint": "Trash not collected" },
    { "address": "18 Kharadi Road, Pune, India", "complaint": "Illegal construction" },
    { "address": "402 Banjara Hills, Hyderabad, India", "complaint": "Water leakage" },
    { "address": "5 Sector 17, Chandigarh, India", "complaint": "Stray animals issue" },
    { "address": "104 Anna Salai, Chennai, India", "complaint": "Overgrown vegetation" },
    { "address": "56 Viman Nagar, Pune, India", "complaint": "Street vendor nuisance" },
    { "address": "89 Civil Lines, Jaipur, India", "complaint": "Power outage" },
    { "address": "33 Old Rajinder Nagar, New Delhi, India", "complaint": "Garbage dumping" },
    { "address": "777 Residency Road, Bengaluru, India", "complaint": "Water contamination" },
    { "address": "24 MG Road, Kochi, India", "complaint": "Blocked drainage" },
    { "address": "99 Salt Lake, Kolkata, India", "complaint": "Public urination" },
    { "address": "150 Sarojini Nagar, Lucknow, India", "complaint": "Parking violation" },
    { "address": "48 Gachibowli, Hyderabad, India", "complaint": "Illegal advertising banners" },
    { "address": "12 Jubilee Hills, Hyderabad, India", "complaint": "Noise pollution from construction" },
    { "address": "2 Mall Road, Shimla, India", "complaint": "Lack of street lighting" },
    { "address": "9 Connaught Place, New Delhi, India", "complaint": "Open manhole" }
  ]

  return (
    <div className="container mx-auto py-10 h-96 mt-5 border overflow-y-scroll">
      <Table>
        <TableCaption>List of Complaints</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Address</TableHead>
            <TableHead>Complaint</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {complaints.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.address}</TableCell>
              <TableCell>{item.complaint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}