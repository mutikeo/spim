'use client'

import React from "react";
import {
  Input,
  Option,
  Select,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Button from '@/app/_components/Button';
import Multiselect from "@/app/_components/MultipleSelect";

export default function AddModal({ open, handleOpen }: { open: boolean, handleOpen: () => void }) {
  const facilityType = ['Hospital', 'Medical Clinic', 'School', 'University', 'Office Building', 'Etc'];
  const equipmentAssessmentType = [
    'Physical Security Equiptment',
    'Cybersecurity Infrastructure',
    'Occupational Safety Equiptment',
    'Fire Safety Systems',
    'Emergency Response Equiptment',
    'Etc'
  ];
  return (
    <>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <DialogHeader className="relative m-0 block" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Typography variant="h4" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Add New Assessment
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-2 pb-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Facility Type (select all that apply):
            </Typography>
            <Multiselect options={facilityType} />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Equipment Assessment Type (select all that apply):
            </Typography>
            <Multiselect options={equipmentAssessmentType} />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Facility Diagram/Layout:
            </Typography>
            <Select
              color="gray"
              size="lg"
              className="!min-w-full"
              placeholder="Facility Diagram/Layout"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Option value="uploadExisting">Upload Existing Diagram</Option>
              <Option value="CreateNew">Create New Diagram</Option>
            </Select>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
              Project ID/Reference #
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Project ID... #"
              name="weight"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
          </div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 text-left font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Location Information
          </Typography>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
              Facility Name *
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Facility Name.."
              name="weight"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
              Address *
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Address.."
              name="weight"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
                City *
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="12345.."
                name="weight"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
                State *
              </Typography>
              <Select
                color="gray"
                size="lg"
                className="!min-w-full"
                placeholder="State"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Option value="newYork">New York</Option>
                <Option value="iowa">Iowa</Option>
              </Select>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
                Zip *
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Zipcode..."
                name="weight"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
                Country *
              </Typography>
              <Select
                color="gray"
                size="lg"
                className="!min-w-full"
                placeholder="Country"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Option value="America">America</Option>
                <Option value="TBD">..TBD</Option>
              </Select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-between" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Button content="Cancel" />
          <Button content="Save" type="filled" />
        </DialogFooter>
      </Dialog>
    </>
  );
}