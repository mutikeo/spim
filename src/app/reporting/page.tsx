'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

import {
  DocumentMagnifyingGlassIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  UserGroupIcon
 } from '@heroicons/react/24/outline';

import Header from '@/app/_components/Header';
import CardItem from "@/app/_components/CardItem";

export default function SiteAssessment() {
  const router = useRouter();

  return (
    <>
      <div className="w-full bg-slate-100 text-black">
        <Header
          title='PSIM.ai Security Reporting'
          backTitle="Dashboard"
          backUrl="/dashboard"
        />
        <div className="
        container mx-auto rounded-2xl text-black
        grid grid-cols-4 gap-10 mt-8">
          <CardItem
            icon={<DocumentMagnifyingGlassIcon className="m-auto size-20 text-[#34785D]" />}
            heading="Incident Summary"
            description="Overview of all security incidents in the last 30 days."
            btnText="Generate"
            onClick={() => router.push('/reporting/incident-summary')} />
          <CardItem
            icon={<PresentationChartLineIcon className="m-auto size-20 text-[#34785D]" />}
            heading="Risk Assessment"
            description="Detailed risk analysis for all monitored sites."
            btnText="Generate"
            onClick={() => router.push('/site-assessment')} />
          <CardItem
            icon={<ShieldCheckIcon className="m-auto size-20 text-[#34785D]" />}
            heading="Asset Inventory"
            description="Complete list of all security equipment and their status."
            btnText="Generate"
            onClick={() => router.push('/site-assessment')} />
          <CardItem
            icon={<UserGroupIcon className="m-auto size-20 text-[#34785D]" />}
            heading="Response Time Analysis"
            description="Evaluation of incident response times and efficiency."
            btnText="Generate"
            onClick={() => router.push('/site-assessment')} />
        </div>
        <div className="container mx-auto rounded-2xl text-black gap-10 mt-10 pb-10">
          <div className="col-span-1 flex items-center justify-center">
            <CardItem
              heading="Generate Custom Report"
              description="Create a tailored report by selecting specific parameters."
              btnText="Create Custom Report"
              onClick={() => router.push('/custom-report')}
              extraClassName="text-center w-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
