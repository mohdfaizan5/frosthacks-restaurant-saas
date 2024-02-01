import React from "react";
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

const Transaction = () => {
  return (
    <div className="px-2 py-4">
      <section className="flex justify-between">
        <h1 className="text-xl font-semibold">Order History</h1>
        <div className="flex gap-3">
          <Button>Create Order</Button>
          <Button variant="secondary">Download Report</Button>
        </div>
      </section>
      <section className="flex gap-6">
        <input type="text" placeholder="Search" className="border border-black px-2 py-1 rounded-md" />
        <div className="flex gap-3">
          <Button >All Orders</Button>
          <Button variant="outline">Upcoming Orders</Button>
        </div>
      </section>
      <section className="p-3 border my-5 rounded-md h-screen border-black">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead className="w-[100px]">Created At</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead className="text-right">Amount</TableHead>
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
  );
};

export default Transaction;
