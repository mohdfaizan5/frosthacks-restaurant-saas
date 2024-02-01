import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Menu = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl py-3 ">Dashboard</h1>
      <section>
        <Sheet>
          <SheetTrigger>
            <Button className="my-3">+ Add new Item</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>New Item</SheetTitle>
              <SheetDescription className="py-5">
                <div className="grid w-full max-w-sm items-center gap-1.5 py-4">
                  <Label htmlFor="email">Item Name</Label>
                  <Input type="email" id="email" placeholder="eg: Chocolate Naan" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 py-4">
                  <Label htmlFor="email">Description</Label>
                  <Textarea />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 py-4">
                  <Label htmlFor="price">Price</Label>
                  <Input type="price" id="price" placeholder="200" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 py-4">
                  <Label htmlFor="email">Item Name</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <Button>Add Item +</Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </section>
      <div className="w-1/4 border h-screen py-32"></div>
    </div>
  );
};

export default Menu;
