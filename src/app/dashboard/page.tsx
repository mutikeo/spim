import Image from "next/image";
import logo from '@/public/images/u5.png';

import {
  DocumentMagnifyingGlassIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  UserGroupIcon
 } from '@heroicons/react/24/outline';

 import Button from "@/app/_components/Button";

export default function Dashboard() {
  return (
    <div className="w-full bg-slate-100">
      <div className="h-8 bg-[rgba(255,0,0,1)] text-white flex items-center justify-center text-sm">
        Optonal Alert Banner Here…Optonal Alert Banner Here…Optonal Alert Banner Here…Optonal Alert Banner Here
      </div>
      <div className="w-full bg-[rgba(28,35,126,0.9)]">
        <div className="container mx-auto flex items-center h-full justify-between py-4">
          <div className="pl-8">
            <Image src={logo} alt="PSIM.ai Logo" width={80} height={80} className="m-auto" />
          </div>
          <div className="flex items-center pr-8 text-white">
            Welcome,&nbsp;<b>[username]</b>
            &nbsp;|&nbsp;
            <a className="font-bold" href="#">Logout</a>
          </div>
        </div>
      </div>
      <div
        className="
          h-64 bg-cover bg-center bg-no-repeat
          bg-[rgba(4,4,82,0.9)] bg-[url('/images/bg.png')]
          flex items-center justify-center">
        <h1 className="text-4xl text-white text-center font-bold">Dashboard</h1>
      </div>
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
        container mx-auto rounded-2xl mt-[64px] text-black
        grid grid-cols-4 gap-10 mt-8">
        <div className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />
          </div>
          <h3 className="text-2xl font-bold">Site Assessment</h3>
          <p className="my-6">Interactive site layout and risk assessment tools.</p>
          <Button content="Assess Sites" />
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