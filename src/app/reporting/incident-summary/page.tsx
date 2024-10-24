'use client';
import React from 'react';

import Header from '@/app/_components/Header';

import Chart from './Chat';

export default function IncidentSummary() {

  return (
    <div className="w-full bg-slate-100 text-black">
      <Header
        title='PSIM.ai Security Reporting'
        backTitle="Report"
        backUrl="/reporting"
      />
      <div className="container mx-auto flex items-center justify-center p-8">
        <h2 className="text-center font-bold text-4xl">Incident Summary (Last 30 Days)</h2>
      </div>

      <div className="
        container mx-auto rounded-2xl text-black
        grid grid-cols-2 gap-10 mt-8 mb-8">
        <div className="flex items-center justify-center flex-col rounded-2xl shadow-2xl p-4">
          <p className="font-bold">Incident Priority Distribution</p>
          <Chart />
        </div>

        <div className="flex flex-col rounded-2xl shadow-2xl">
          <div className="mt-4 border-b border-gray-300 pb-4 p-8">
            <p className="font-bold text-xl text-yellow-800">High Priority: Unauthorized Access Attempt</p>
            <p>Date: 2023-05-15 | Location: Server Room | Status: Resolved</p>
            <p className="text-sm">Multiple failed login attempts detected from unknown IP address.</p>
          </div>
          <div className="mt-4 border-b border-gray-300 pb-4 p-8">
            <p className="font-bold text-xl text-orange-800">Medium Priority: Surveillance Camera Malfunction</p>
            <p>Date: 2023-05-10 | Location: Parking Lot B | Status: In Progress</p>
            <p className="text-sm">Camera #12 experiencing intermittent connectivity issues.</p>
          </div>
          <div className="mt-4 border-b border-gray-300 pb-4 p-8">
            <p className="font-bold text-xl text-green-800">Low Priority: Door Left Ajar</p>
            <p>Date: 2023-05-05 | Location: Office 302 | Status: Resolved</p>
            <p className="text-sm">Door sensor detected door left open for extended period.</p>
          </div>
        </div>
      </div>
    </div>
  );
}