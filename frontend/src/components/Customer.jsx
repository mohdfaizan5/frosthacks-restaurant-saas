import React from 'react'
import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const Customer = () => {
  return (
    <div className='px-4'>
      <section>
        <h1 className="text-xl font-semibold my-3">Customers</h1>
        <div className='flex gap-4'>
        <input type="text" placeholder="Search by name,email or phone" className="border border-black px-3 py-1 rounded-md" />
        {/* <input type="text" placeholder="Type" className="border border-black px-2 py-1 rounded-md" /> */}
        </div>
      </section>

      <section className="p-3 border my-5 rounded-md h-screen border-black">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sr.no</TableHead>
              <TableHead>Last Order Date</TableHead>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="font-medium">15/01/24</TableCell>
              <TableCell>Meh</TableCell>
              <TableCell>98065 89868</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INCH09</TableCell>
              <TableCell className="font-medium">26/01/24</TableCell>
              <TableCell>Zee</TableCell>
              <TableCell>78954 87234</TableCell>
              <TableCell className="text-right">$100.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

export default Customer