export const metadata = {
  title: "Login | Report Penjualan",
  description: "Build & Developed by Fahmi Dhika",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return <div>{children}</div>;
};

export default RootLayout;
