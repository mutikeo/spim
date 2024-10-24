"use client";

import { useState } from 'react';

import Header from '@/app/_components/Header';
import Button from '@/app/_components/Button';

import AddEquipmentModal from './AddEquipmentModal';

export default function SiteAssessmentDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(!open);

  return (
    <>
      <div className="w-full bg-slate-100">
        <Header
          title='Site Assessment Details'
          backTitle="Site Assessment"
          backUrl="/site-assessment"
        />
        <div className="
          container mx-auto bg-white rounded-2xl overflow-hidden
          shadow-[20px_20px_40px_rgba(0,0,0,0.07)] mt-[-64px]
          flex flex-col justify-center">
          <div className="flex justify-between px-8 py-4 bg-gray-100 items-center">
            <span className="text-black font-bold">OVERVIEW</span>
          </div>
          <div className="gap-4 mt-4 px-8 py-4 text-black font-bold text-lg">
            Cental Warehouse {id}
          </div>
          <div className="grid grid-cols-7 gap-4 px-8 py-4 text-black">
            <div className="bp-4">
              <p className="font-bold text-sm mb-2">Assessment Type</p>
              <p>Physical Security</p>
              <p>Equipment</p>
            </div>
            <div className="bp-4">
              <p className="font-bold text-sm mb-2">Layout</p>
              <p>Existing Diagram</p>
            </div>
            <div className="bp-4">
              <p className="font-bold text-sm mb-2">Facility Name</p>
              <p>Name Here</p>
            </div>
            <div className="bp-4">
              <p className="font-bold text-sm mb-2">Address</p>
              <p>100 World Trade Center</p>
            </div>
            <div className="bp-4">
              <p className="font-bold text-sm mb-2">State</p>
              <p>New York</p>
            </div>
            <div className="bp-4">
              <p className="font-bold text-sm mb-2">Zip</p>
              <p>10038</p>
            </div>
            <div className="bp-4">
              <p className="font-bold text-sm mb-2">Country</p>
              <p>USA</p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="grid grid-cols-4 gap-4 px-8 py-4 text-black mb-4">
              <div className="bp-4">
                <p className="font-bold text-sm mb-2">First Name</p>
                <p>John</p>
              </div>
              <div className="bp-4">
                <p className="font-bold text-sm mb-2">Last Name</p>
                <p>Doe</p>
              </div>
              <div className="bp-4">
                <p className="font-bold text-sm mb-2">Phone Number</p>
                <p>123-456-7890</p>
              </div>
              <div className="bp-4">
                <p className="font-bold text-sm mb-2">Email</p>
                <p>johndoe@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold text-black">Physical Security Equipment Assessment</h2>
          <Button size="lg" type="filled" content="Add New Equipment" onClick={handleOpenModal} />
        </div>

        <div className="
          container mx-auto bg-white rounded-2xl overflow-hidden
          shadow-[20px_20px_40px_rgba(0,0,0,0.07)] mt-8
          flex flex-col justify-center px-8 py-4">
            <p className="px-4 py-32 text-center text-xl">No Equipment Assessment added. Please use the button to add one.</p>
        </div>
      </div>
      <AddEquipmentModal open={open} handleOpen={handleOpenModal}  />
    </>
  )
};
