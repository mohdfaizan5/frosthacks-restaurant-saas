import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  return (
    <header className="border  h-14 w-full flex justify-between px-5 items-center">
      <div></div>
      {/* <div className='bg-primary w-8 h-8 rounded-full'></div> */}
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/79694828?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <Button variant="destructive">
            Logout {"  "}
            <AiOutlineLogout />
          </Button>{" "}
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Header;
