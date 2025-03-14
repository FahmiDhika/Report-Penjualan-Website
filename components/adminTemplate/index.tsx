import { ReactNode } from "react";
import Sidebar from "./sideBar";
// import { IUser } from "@/app/types";
// import { getCookies } from "@/lib/server-cookie";
// import { BASE_API_URL, BASE_IMAGE_PROFILE } from "@/global";
// import { get } from "@/lib/api-bridge";

type MenuType = {
  id: string;
  icon: ReactNode;
  path: string;
  label: string;
};
type ManagerProp = {
  children: ReactNode;
  id: string;
  title: string;
  menuList: MenuType[];
};

const ManagerTemplate = async ({
  children,
  id,
  title,
  menuList,
}: ManagerProp) => {

  return (
    <div className="w-full min-h-dvh bg-slate-50">
      <Sidebar menuList={menuList} title={title} id={id}>
        {children}
      </Sidebar>
    </div>
  );
};

export default ManagerTemplate;