import AdminTemplate from "@/components/adminTemplate";
import MenuList from "../menuList";

export const metadata = {
  title: "User | Report Penjualan",
  description: "Build & Developed by Fahmi Dhika",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return (
    <AdminTemplate title="User" id="user" menuList={MenuList}>
      {children}
    </AdminTemplate>
  );
};

export default RootLayout;