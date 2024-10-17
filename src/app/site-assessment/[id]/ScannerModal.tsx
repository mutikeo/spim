import { Scanner } from '@yudiel/react-qr-scanner';
import { Dialog } from '@material-tailwind/react';

export default function ScannerModal(
  { open, handleOpen, handleScanComplete }:
  { open: boolean, handleOpen: () => void, handleScanComplete: (result: object) => void }) {
  return (
    <Dialog size="sm" open={open} handler={handleOpen} className="p-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <Scanner
        onScan={handleScanComplete} />
    </Dialog>
  );
}