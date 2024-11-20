import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-wrap justify-center items-center h-dvh ">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold xl:text-6xl">Selamat Datang.</h1>
        <h2 className="text-xl xl:text-2xl">Semangat bekerja</h2>
      </div>

      <Link href={"login"}>
        <div className="w-auto text-center py-4 px-8 rounded-xl text-2xl bg-[#323232] text-white">
          Login
        </div>
      </Link>
    </section>
  );
}
