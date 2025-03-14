import { ReactNode } from "react";

import { GoHome } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";

interface IPropMenu {
  id: string;
  path: string;
  label: string;
  icon: ReactNode;
}

let menuList: IPropMenu[] = [
  {
    id: `dashboard`,
    path: `/admin/dashboard`,
    label: `Dashboard`,
    icon: (
        <GoHome size={48} />
    ),
  },
  {
    id: `user`,
    path: `/admin/user`,
    label: `User`,
    icon: (
      <FaRegUser size={48} />
    ),
  },
  {
    id: `produk`,
    path: `/admin/produk`,
    label: `Produk`,
    icon: (
        <GiCardboardBoxClosed size={48} />
    ),
  },
  {
    id: `transaksi`,
    path: `/admin/transaksi`,
    label: `Transaksi`,
    icon: (
        <IoMdCart size={48} />
    ),
  },
];

export default menuList