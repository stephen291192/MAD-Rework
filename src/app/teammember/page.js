"use client";

import Header from "../header"
import Footer from "../footer"
import React,{useState} from "react"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Teammember({ members }) {
  const [selectedMember, setSelectedMember] = useState(1);

  const handleMemberClick = (index) => {
    setSelectedMember(index === selectedMember ? null : index);
  };

    return (
      <>
     <div className="flex flex-col lg:flex-row items-center">

{/* Left side content */}
<div className="w-full lg:w-1/2 lg:px-20 mb-8 lg:mb-0">
  {selectedMember !== null && (
    <div>
      <h2 className="font-bold text-gray-700 text-4xl mb-2">
        {members[selectedMember].name}
      </h2>
      <p className="text-gray-500 mb-2">
        {members[selectedMember].department}
      </p>
      <p className="text-sm font-base leading-6 text-gray-500 mb-3">
        {members[selectedMember].content}
      </p>
      <p className="font-bold text-gray-500 flex items-center">
        More &nbsp;
        <span className="pt-1 text-gray-500">
          <FaArrowRightLong />
        </span>
      </p>
    </div>
  )}
</div>

{/* Right side team member photos */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 imgSize">
  {members.map((member, index) => (
    <img
      key={index}
      src={member.photo}
      alt={member.name}
      className={`cursor-pointer border shadow-inner p-4 ${
        index === selectedMember && 'border-2 shadow-md'
      }`}
      onClick={() => handleMemberClick(index)}
    />
  ))}
</div>

</div>

        
    
      </>
    )
  }
  