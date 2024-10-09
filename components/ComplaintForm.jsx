"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ComplainForm() {
  const [phoneNo, setPhoneNo] = useState("")
  const [aadharNo, setAadharNo] = useState("")
  const [address, setAddress] = useState("")
  const [problemType, setProblemType] = useState("")
  const [complaint, setComplaint] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log({ phoneNo, aadharNo, address, problemType, complaint })
    alert("Form submitted successfully!")
  }

  const isValidPhoneNo = (phone) => /^\d{10}$/.test(phone)
  const isValidAadharNo = (aadhar) => /^\d{12}$/.test(aadhar)

  return (
    <Card className="w-full text-black max-w-4xl mx-auto bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-sm border border-gray-300 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">Complaint Form</CardTitle>
        <CardDescription className="text-gray-600">
          Please fill out the form below to submit your complaint.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone-no" className="text-gray-700">Phone Number</Label>
            <Input
              id="phone-no"
              type="tel"
              placeholder="Enter 10-digit phone number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              className="bg-white bg-opacity-50"
            />
            {phoneNo && !isValidPhoneNo(phoneNo) && (
              <p className="text-sm text-red-500">Please enter a valid 10-digit phone number.</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="aadhar-no" className="text-gray-700">Aadhar Number</Label>
            <Input
              id="aadhar-no"
              type="text"
              placeholder="Enter 12-digit Aadhar number"
              value={aadharNo}
              onChange={(e) => setAadharNo(e.target.value)}
              required
              className="bg-white bg-opacity-50"
            />
            {aadharNo && !isValidAadharNo(aadharNo) && (
              <p className="text-sm text-red-500">Please enter a valid 12-digit Aadhar number.</p>
            )}
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="address" className="text-gray-700">Address</Label>
            <Input
              id="address"
              type="text"
              placeholder="Enter your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="bg-white bg-opacity-50"
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="problem-type" className="text-gray-700">Type of Problem</Label>
            <Select onValueChange={setProblemType} required>
              <SelectTrigger id="problem-type" className="bg-white bg-opacity-50">
                <SelectValue placeholder="Select the type of problem" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical Issue</SelectItem>
                <SelectItem value="billing">Billing Problem</SelectItem>
                <SelectItem value="service">Service Complaint</SelectItem>
                <SelectItem value="product">Product Defect</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="complaint" className="text-gray-700">Complaint Details</Label>
            <Textarea
              id="complaint"
              placeholder="Describe your complaint here"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
              className="h-24 bg-white bg-opacity-50"
            />
          </div>
          <Button type="submit" className="col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            Submit Complaint
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}