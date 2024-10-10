'use client'

import { Card, Typography } from "@material-tailwind/react";

interface TableProps {
  head: string[];
  rows: ({ facilityName: string })[];
}
export default function Table({head, rows}:TableProps) {
  return (
    <section className="w-full bg-white p-3">
      <Card className="h-full w-full border border-gray-300 p-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {head.map((head) => (
                <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => {
              const classes = "py-4 border-b border-gray-300";
              return (
                <tr key={item.facilityName} className="hover:bg-gray-50">
                  { Object.entries(item).map(([key, value]) => (
                    <td className={classes} key={key}>
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}                      >
                        {value}
                      </Typography>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
