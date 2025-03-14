import AdminTemplate from "@/components/adminTemplate";
import MenuList from "../menuList";

export const metadata = {
  title: "Dashboard | Report Penjualan",
  description: "Build & Developed by Fahmi Dhika",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return (
    <AdminTemplate title="Dashboard" id="dashboard" menuList={MenuList}>
      {children}
    </AdminTemplate>
  );
};

export default RootLayout;