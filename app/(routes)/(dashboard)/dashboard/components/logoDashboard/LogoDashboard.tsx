import Image from "next/image";
import Link from "next/link";

export default function LogoDashboard() {
  return (
    <Link
      href="/"
      className="flex items-center pl-3 h-20 mxy-2 gap-2 border-b cursor-pointer min-h-20"
    >
      <Image
        src="/logo.ico"
        alt="Logo VegaCars"
        width={65}
        height={65}
        priority
      />

      <h1 className="text-2xl font-semibold ">
        Vega<span className="text-[#eac76b]">Cars</span>
      </h1>
    </Link>
  );
}
