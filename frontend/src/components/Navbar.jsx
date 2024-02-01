import React from "react";
import { Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { GrAnalytics } from "react-icons/gr";

const Navbar = () => {
  return (
    <header className="border-r border-black h-screen w-1/4 flex flex-col items-center ">
      <div>
        <h1 className="text-3xl font-bold my-14">
          <a href="http://localhost:5174">
            Cafe<span className="text-[#DC2929]">Toolz</span>
          </a>
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        <Link to="/" className="flex items-center gap-2 hover:text-primary">
          <MdRestaurantMenu />{" "}
          <span className="font-semibold text-xl ">Menu</span>
        </Link>
        <Link
          to="/analytics"
          className="flex items-center gap-2 hover:text-primary"
        >
          <GrAnalytics />
          <span className="font-semibold text-xl ">Analytics</span>
        </Link>
        <Link
          to="/customer"
          className="flex items-center gap-2 hover:text-primary"
        >
          <IoPeople />
          <span className="font-semibold text-xl ">Customers</span>
        </Link>
        <Link
          to="/transactions"
          className="flex items-center gap-2 hover:text-primary"
        >
          <GrTransaction />
          <span className="font-semibold text-xl ">Transactions</span>
        </Link>
        {/*  */}
        <Link
          to="em"
          className="flex items-center gap-2 hover:text-primary"
        >
          <IoMdSettings />

          <span className="font-semibold text-xl ">Email Marketing</span>
        </Link>
        {/*  */}
        <Link to="wa" className="flex items-center gap-2 hover:text-primary">
          <IoMdSettings />

          <span className="font-semibold text-xl ">Whatsapp Marketing</span>
        </Link>
        {/*  */}
        <Link to="setting" className="flex items-center gap-2 hover:text-primary">
          <IoMdSettings />

          <span className="font-semibold text-xl ">Settings</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
