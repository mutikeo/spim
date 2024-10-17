'use client'

import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
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
  Textarea,
} from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Button from '@/app/_components/Button';

import ScannerModal from  './ScannerModal';

export default function AddEquipmentModal({ open, handleOpen }: { open: boolean, handleOpen: () => void }) {
  const [openScanner, setOpenScanner] = useState(false);
  const [qrResult, setQrResult] = useState({});
  const handleOpenScannerModal = () => setOpenScanner(!openScanner);
  const handleScanComplete = (result: object) => {
    setQrResult(result);
    setOpenScanner(false);
  }
  return (
    <>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <DialogHeader className="relative m-0 block" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Typography variant="h4" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Add Equipment Assessment
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
            <Select
              color="gray"
              size="lg"
              className="!min-w-full"
              placeholder="Facility Type.."
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
 >
              <Option value="Select">Select Equipment Type</Option>
              <Option value="Security">Security Cameras</Option>
              <Option value="Access">Access Control System</Option>
              <Option value="Alarm">Alarm Systems</Option>
              <Option value="Locks">Locks &amp; Keys</Option>
              <Option value="Etc">Etc</Option>
            </Select>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Equipment Name/Model: *
              </Typography>
              <Input
                required
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
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Quantity *
              </Typography>
              <Input
                required
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
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Location in Facility: *
              </Typography>
              <Input
                required
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
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Current Condition *
              </Typography>
              <Select
                color="gray"
                size="lg"
                className="!min-w-full"
                placeholder="Country"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
 >
                <Option value="Excellent">Excellent</Option>
                <Option value="Good">Good</Option>
                <Option value="Fair">Fair</Option>
                <Option value="Poor">Poor</Option>
                <Option value="NonFunctional">Non Functional</Option>

              </Select>
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Last Maintenance Date *
            </Typography>
            <Input
              required
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
              }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 text-left font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Additional Notes *
            </Typography>
            <Textarea
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter your comment..."
              rows={3} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>
          </div>
          <div>
            <Button content="Scan QR" onClick={handleOpenScannerModal} />
            {!isEmpty(qrResult) && <pre className="text-green-500 overflow-x-auto whitespace-pre">{JSON.stringify(qrResult)}</pre>}
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-between" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Button content="Cancel" />
          <Button content="Add Equipment" type="filled" />
        </DialogFooter>
      </Dialog>
      <ScannerModal open={openScanner} handleOpen={handleOpenScannerModal} handleScanComplete={handleScanComplete}  />
    </>
  );
}