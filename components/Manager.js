"use client"
import { Button } from "@/components/ui/button"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { toggleVariants } from "./ui/toggle";
import { TableDemo } from "./PassTable";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea"
import { addRequestMeta } from "next/dist/server/request-meta";
import { DataChart } from "./MyChart";
import ComplaintBox from "./ComplaintBox";
import ComplainForm from "./ComplaintForm";

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [myData,setMyData] = useState([]);
    const[toggle,setToggle] = useState(false)
    const { toast } = useToast()

    useEffect(()=>{
      // getData();
    },[])

    const inputEmailRef = useRef(null);
    const inputAadharRef = useRef(null);
    const inputAddressRef = useRef(null);
    const toggleRef = useRef(null)
    const inputComplainRef = useRef(null);

    const togglePasswordVisibility = () => {
      setToggle((prevState) => !prevState);
      setShowPassword((prevState) => !prevState);
      // console.log(inputPassRef.current.type)
    };

    const dateGenerator = () => {
      const now = new Date();
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const day = daysOfWeek[now.getDay()]; // returns a number representing the day of the week, starting with 0 for Sunday
      const hours = now.getHours();
      const minutes = now.getMinutes()
      const month = now.getMonth() + 1; // Month is zero-based
      const year = now.getFullYear();
      const formattedDate = `${now.getDate()}/${month}/${year}`; 

      return [day,formattedDate,hours,minutes]
    }

    const submitData = () => {
      if(inputEmailRef.current.value && inputAadharRef.current.value && inputAddressRef.current.value){
        let myNewData = {
          id: uuidv4(),
          email: inputEmailRef.current.value,
          aadhar: inputAadharRef.current.value,
          address: inputAddressRef.current.value,
          complain: inputComplainRef.current.value,
          isResolved: false
        }
        setMyData([...myData,myNewData])
        console.log(myNewData)
        axios.post("http://localhost:3000/api/users",myNewData);

        const getDetails = dateGenerator();
        toast({
          title: "Action: Complain registered",
          description: `${getDetails[0]}, ${getDetails[1]} at  ${getDetails[2]}:${getDetails[3]}`,
          action: (
            <ToastAction altText="Goto schedule to undo">Back</ToastAction>
          ),
        }
      )
        inputEmailRef.current.value = null
        inputAadharRef.current.value = null
        inputAddressRef.current.value = null
     }
        else alert("Enter all the details")

    }

    const handleDelete = async (id) => {
      let c = confirm("Do you really want to delete this password");
      if(c){
        let updatedData = myData.filter((item) => item.id !== id);
        let deletedData = myData.filter((item) => item.id === id)[0];
        let res = await fetch("https://pass-manager-next-js.vercel.app/api/users",{
          method: "DELETE",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({
            // site: deletedData.site,
            // username: deletedData.username,
            // password: deletedData.password
          })
        })
        console.log(res)
        setMyData(updatedData)
      }

    }

  // return (
  //   <div className="mt-5 flex gap-6">
  //    {/* <div>

  //    </div> */}
  //   <div className="container mt-7 mx-auto flex justify-center items-center">
  //   <ComplainForm></ComplainForm>
  //   </div>
  //   <ComplaintBox></ComplaintBox>
  //   </div>
  // )
  return (
    <div className="mt-5 flex flex-col lg:flex-row gap-6">
      <div className="container mt-7 mx-auto flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="w-full lg:w-1/2">
          <ComplainForm />
        </div>
        <div className="w-full lg:w-1/2">
          <ComplaintBox />
        </div>
      </div>
    </div>
  )
  
}

export default Manager
    



