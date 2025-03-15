"use client";

import { LoginButton } from "@/components/button";
import Link from "next/link";
import { BASE_API_URL } from "@/global";
import { storeCookie } from "@/lib/client-cookies";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const [nama, setNama] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      const url = `${BASE_API_URL}/user/login`;
      const payload = JSON.stringify({ nama: nama, password });
      const { data } = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (data.status == true) {
        toast(data.message, {
          hideProgressBar: false,
          containerId: `toastLogin`,
          type: "success",
          autoClose: 2000,
        });
        storeCookie("token", data.token);
        storeCookie("id", data.data.id);
        storeCookie("nama", data.data.nama);
        storeCookie("role", data.data.role);

        let role = data.data.role;

        if (role === "ADMIN")
          setTimeout(() => router.replace(`/admin/dashboard`), 1000);
        else if (role === "KASIR")
          setTimeout(() => router.replace(`/kasir/dashboard`), 1000);
      } else
        toast(data.message, {
          hideProgressBar: false,
          containerId: `toastLogin`,
          type: "warning",
          
        });
    } catch (error) {
      console.log(error);
      toast(`Something wrong`, {
        hideProgressBar: false,
        containerId: `toastLogin`,
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh p-14">
      <ToastContainer containerId={`toastLogin`} />
      <div className="w-1/3 bg-[#323232] text-white py-6 px-12 rounded-[20px] shadow-xl shadow-gray-600 mb-16">
        <h1 className="font-bold text-[32px] text-center mb-9">SIGN IN</h1>

        <form onSubmit={handleSubmit} className="">
          <div className="w-full my-4">
            <label htmlFor="name" className="block mb-2 font-medium text-white">
              Nama
            </label>
            <input
              type="text"
              name="name"
              placeholder="admin ganteng"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              id="email"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 
                          focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="w-full my-4">
            <label htmlFor="name" className="block mb-2 font-medium text-white">
              Password
            </label>

            <div className="flex">
              <input
                type={showPassword ? `text` : `password`}
                name="password"
                placeholder="admin123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-l-lg p-2.5 
                          focus:outline-none focus:ring-primary focus:border-primary"
              />

              <div
                className="cursor-pointer bg-black rounded-r-lg p-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226
16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451
10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0
1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21
21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423
7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0
.639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="mt-24 flex justify-center">
              <button
                type="submit"
                className="w-fit text-black bg-gray-50 font-bold rounded-lg px-14 py-2.5 text-center uppercase hover:bg-gray-500 mb-2"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-8 bg-black mr-auto text-white py-3 px-8 rounded-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
        <Link href={"/"}>Halaman Utama</Link>
      </div>
    </div>
  );
};

export default LoginPage;

{
  /* <div className="mb-6">
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
      </div> */
}
