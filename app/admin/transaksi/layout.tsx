import AdminTemplate from "@/components/adminTemplate";
import MenuList from "../menuList";

export const metadata = {
  title: "Transaksi | Report Penjualan",
  description: "Build & Developed by Fahmi Dhika",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return (
    <AdminTemplate title="Transaksi" id="transaksi" menuList={MenuList}>
      {children}
    </AdminTemplate>
  );
};

export default RootLayout;