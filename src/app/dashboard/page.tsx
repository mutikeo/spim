'use client';

import { useRouter } from 'next/navigation';
import {
  DocumentMagnifyingGlassIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  UserGroupIcon
 } from '@heroicons/react/24/outline';

 import Button from "@/app/_components/Button";
 import TopBanner from "@/app/_components/Banner";
 import Header from "@/app/_components/Header";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="w-full bg-slate-100">
      <TopBanner>
        Optonal Alert Banner Here…Optonal Alert Banner Here…Optonal Alert Banner Here…Optonal Alert Banner Here
      </TopBanner>
      <Header title='Dashboard' />
      <div className="
        container mx-auto bg-white rounded-2xl overflow-hidden
        shadow-[20px_20px_40px_rgba(0,0,0,0.07)] mt-[-64px]
        flex flex-col justify-center">
        <div className="flex justify-between px-8 py-4 bg-gray-100 items-center">
          <span className="text-black font-bold">OVERVIEW</span>
          <Button content="View More" />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8 px-8 py-4 text-black">
          <div className="bp-4 text-center">
            <p>Active Sites</p>
            <p className="text-4xl font-bold text-[#1c237e] py-2">15</p>
            <span className="text-gray-500 text-xs">Online: <span className="text-[#34785D] font-bold">18</span></span> |
            <span className="text-gray-500 text-xs ml-1">Offline: <span className="text-[#34785D] font-bold">2</span></span>
          </div>
          <div className="bp-4 text-center">
            <p>Rental Assessments</p>
            <p className="text-4xl font-bold text-[#1c237e] py-2">35</p>
            <span className="text-gray-500 text-xs">Completed: <span className="text-[#34785D] font-bold">18</span></span> |
            <span className="text-gray-500 text-xs ml-1">In Progress: <span className="text-[#34785D] font-bold">2</span></span> |
            <span className="text-gray-500 text-xs ml-1">Scheduled: <span className="text-[#34785D] font-bold">2</span></span>
          </div>
          <div className="bp-4 text-center">
            <p>System Health</p>
            <p className="text-4xl font-bold text-[#1c237e] py-2">34</p>
            <span className="text-gray-500 text-xs">Status: <span className="text-[#34785D] font-bold">Warning</span></span> |
            <span className="text-gray-500 text-xs ml-1">Uptime: <span className="text-[#34785D] font-bold">99.7%</span></span> |
            <span className="text-gray-500 text-xs ml-1">Active Alerts: <span className="text-[#34785D] font-bold">2</span></span>
          </div>
          <div className="bp-4 text-center">
            <p>Security Incidents</p>
            <p className="text-4xl font-bold text-[#1c237e] py-2">53</p>
            <span className="text-gray-500 text-xs">This Week: <span className="text-[#34785D] font-bold">3</span></span> |
            <span className="text-gray-500 text-xs ml-1">This Month: <span className="text-[#34785D] font-bold">12</span></span> |
            <span className="text-gray-500 text-xs ml-1">Unresolved: <span className="text-[#34785D] font-bold">3</span></span>
          </div>
        </div>
      </div>
      <div className="
        container mx-auto rounded-2xl text-black
        grid grid-cols-4 gap-10 mt-8">
        <div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Site Assessment</h3>
          <p className="my-6">Interactive site layout and risk assessment tools.</p>
          <Button onClick={() => router.push('/site-assessment')} content="Assess Sites" />
        </div>
        <div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <PresentationChartLineIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Reporting</h3>
          <p className="my-6">Generate and view comprehensive security reports.</p>
          <Button content="View Report" />
        </div><div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheckIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Equipment Directions</h3>
          <p className="my-6">Detailed directions for equipment installation and maintenance.</p>
          <Button content="View Directions" />
        </div><div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <UserGroupIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">User Management</h3>
          <p className="my-6">Handle user authentication, roles, and permissions.</p>
          <Button content="Manage Users" />
        </div><div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Site Assessment</h3>
          <p className="my-6">Interactive site layout and risk assessment tools.</p>
          <Button content="Assess Sites" />
        </div><div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Site Assessment</h3>
          <p className="my-6">Interactive site layout and risk assessment tools.</p>
          <Button content="Assess Sites" />
        </div><div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Site Assessment</h3>
          <p className="my-6">Interactive site layout and risk assessment tools.</p>
          <Button content="Assess Sites" />
        </div><div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Site Assessment</h3>
          <p className="my-6">Interactive site layout and risk assessment tools.</p>
          <Button content="Assess Sites" />
        </div><div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Site Assessment</h3>
          <p className="my-6">Interactive site layout and risk assessment tools.</p>
          <Button content="Assess Sites" />
        </div>
      </div>
    </div>
  );
}
