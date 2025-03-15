"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import MenuItem from "./menuItem";
import { BiLogOut } from "react-icons/bi";
import profile from "@/public/Amogus.png";
import { removeCookie } from "@/lib/client-cookies";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type menuType = {
  id: string;
  icon: ReactNode;
  path: string;
  label: string;
};

type managerProp = {
  children: ReactNode;
  id: string;
  title: string;
  menuList: menuType[];
};

const sideBar = ({ children, id, title, menuList }: managerProp) => {
  const [nama, setNama] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const nama = Cookies.get("nama");
    const role = Cookies.get("role");

    if (nama) {
      setNama(nama);
    }

    if (role) {
      setRole(role);
    }
  }, []);

  const handleLogout = () => {
    removeCookie("token");
    removeCookie("id");
    removeCookie("nama");
    removeCookie("role");
    router.replace(`/login`);
  };

  return (
    <div className="w-full min-h-dvh flex">
      {/* Sidebar */}
      <div className="w-1/5 h-screen fixed flex flex-col top-0 left-0 px-5 bg-[#323232] text-white py-10">
        {/* Logo */}
        <div className="w-full text-center flex-col flex items-center justify-center">
          <Image src={profile} alt="" width={150}></Image>
          <h1 className="font-semibold tracking-widest text-lg mb-2">{nama}</h1>
          <h2 className="font-semibold tracking-widest text-md bg-orange-600 px-2 py-1 rounded-full">{role}</h2>
        </div>

        {/* Menu List */}
        <div className="w-full flex-grow flex items-center justify-center">
          <div className="px-4 w-full text-zinc-100 tracking-widest font-semibold">
            {menuList.map((menu, index) => (
              <MenuItem
                icon={menu.icon}
                label={menu.label}
                path={menu.path}
                active={menu.id === id}
                key={`keyMenu${index}`}
              />
            ))}
          </div>
        </div>

        {/* Log Out Button */}
        <div className="w-full flex-grow flex items-end justify-start">
          <div className="w-fit flex items-center px-4 py-2 bg-red-900 hover:bg-red-600 ease-in-out duration-300 rounded-lg cursor-pointer font-bold shadow-xl">
            <BiLogOut size={32} />
            <button className="w-auto text-md ml-3" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-4/5 ml-[20%] flex flex-col">
        {/* Header */}
        <header className="w-[80%] ml-[20%] h-[80px] fixed top-0 left-0 right-0 px-12 flex items-center justify-between bg-white shadow-md">
          <h1 className="text-3xl font-bold py-2 px-4 bg-[#a00000] text-white rounded-2xl tracking-widest">
            {title}
          </h1>
          <h1 className="text-2xl font-semibold py-[2px] px-2 border-b-2 border-[#a00000]">
            Report Penjualan
          </h1>
        </header>

        {/* Main Content */}
        <div className="w-full flex-grow h-fit pt-[120px] overflow-auto py-11 px-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default sideBar;
