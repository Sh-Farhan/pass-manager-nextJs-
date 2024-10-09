import ComplaintsTable from '@/components/ComplainTable'
import { DataChart } from '@/components/MyChart'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-row gap-5">
      <DataChart></DataChart>
      <ComplaintsTable></ComplaintsTable>
    </div>
  )
}

export default page
