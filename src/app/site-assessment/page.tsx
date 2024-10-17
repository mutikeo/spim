'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/app/_components/Button';
import Header from '@/app/_components/Header';
import Table from '@/app/_components/Table';

import AddModal from './AddModal';

const ButtonNavigation = ({ id }: { id: string | number }) => {
  const router = useRouter();
  return (
    <div className="flex justify-end">
      <Button
        content="View Details"
        onClick={() => router.push(`/site-assessment/${id}`)}
      />
    </div>
  );
}
// TODO: dummy data
const TABLE_HEAD = [
  "FACILITY NAME#",
  "LOCATION",
  "DATE",
  "STATUS",
  "OVERALL SCORE",
  "RISK LEVEL",
  "ASSIGNED TO",
  "ACTION",
];

const TABLE_ROWS = [
  {
    facilityName: "Central Warehouse",
    location: "Chicago, IL",
    date: "2023-06-15",
    status: "Completed",
    overallScore: "92%",
    riskLevel: "Low",
    assignedTo: "John Doe",
    action: <ButtonNavigation id={1} />,
  },
  {
    facilityName: "North Site",
    location: "New York, NY",
    date: "2023-06-12",
    status: "In Progress",
    overallScore: "78%",
    riskLevel: "Medium",
    assignedTo: "Jane Doe",
    action: <ButtonNavigation id={5} />,
  },
  {
    facilityName: "South Site",
    location: "Miami, FL",
    date: "2023-06-10",
    status: "Completed",
    overallScore: "95%",
    riskLevel: "Low",
    assignedTo: "Bob Smith",
    action: <ButtonNavigation id={2} />,
  },
  {
    facilityName: "East Site",
    location: "Boston, MA",
    date: "2023-06-08",
    status: "In Progress",
    overallScore: "85%",
    riskLevel: "Medium",
    assignedTo: "Alice Johnson",
    action: <ButtonNavigation id={3} />,
  },
  {
    facilityName: "West Site",
    location: "Los Angeles, CA",
    date: "2023-06-05",
    status: "Completed",
    overallScore: "98%",
    riskLevel: "Low",
    assignedTo: "Mike Davis",
    action: <ButtonNavigation id={4} />,
  },
];

export default function SiteAssessment() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(!open);

  return (
    <>
      <div className="w-full bg-slate-100 text-black">
        <Header title='Facility Site Assessment' />
        <div className="
          container mx-auto bg-white rounded-2xl overflow-hidden
          shadow-[20px_20px_40px_rgba(0,0,0,0.07)] mt-[-64px]
          flex flex-col justify-center">
          <div className="flex justify-between px-8 py-4 bg-gray-100 items-center">
            <span className="text-black font-bold">OVERVIEW</span>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8 px-8 py-4 text-black">
            <div className="bp-4 text-center">
              <p>Total Facilities</p>
              <p className="text-4xl font-bold text-[#1c237e] py-2">15</p>
            </div>
            <div className="bp-4 text-center">
              <p>Assessments Completed</p>
              <p className="text-4xl font-bold text-[#1c237e] py-2">35</p>
            </div>
            <div className="bp-4 text-center">
              <p>Assessments In Progress</p>
              <p className="text-4xl font-bold text-[#1c237e] py-2">123</p>
            </div>
            <div className="bp-4 text-center">
              <p>Pending Assessments</p>
              <p className="text-4xl font-bold text-[#1c237e] py-2">15</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white rounded-2xl overflow-hidden shadow-[20px_20px_40px_rgba(0,0,0,0.07)] mt-8">
          <div className="flex justify-between px-8 py-4 items-center">
            <h2 className="text-black font-bold text-2xl">Recent Facility Assessments</h2>
            <Button size="lg" type="filled" content="Add New Assessment" onClick={handleOpenModal} />
          </div>
          <div className="overflow-x-auto">
            <Table head={TABLE_HEAD} rows={TABLE_ROWS} />
          </div>
          <div className="px-8 py-4">
            Showing 3 of 15 results
          </div>
        </div>
      </div>
      <AddModal open={open} handleOpen={handleOpenModal} />
    </>
  );
}
