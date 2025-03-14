import { LoginButton } from "@/components/button/button";
import Link from "next/link";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center h-dvh">
      <div className="bg-[#323232] text-white py-6 px-12 rounded-[20px] shadow-xl shadow-gray-600 mb-16">
        <h1 className="font-bold text-[32px] text-center mb-9">SIGN IN</h1>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-medium text-white">
            Nama
          </label>
          <input
            type="name"
            name="name"
            placeholder="admin123"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
          />
        </div>
        <div className="mb-12">
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="adminpass123"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
          />
        </div>

        <LoginButton />
      </div>

      <Link href={"/"}>
        <div className="mt-6 xl:mt-0 boton-elegante">
            Halaman Utama
        </div>
      </Link>
        
    </section>
  );
};

export default Page;
