import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:bg-[#eac76b] lg:grid-cols-2 h-full items-center justify-center">
      <div className="flex items-center justify-center ">{children}</div>
      <div className="hidden lg:flex lg:bg-black h-full justify-center items-center lg:flex-col">
        <Image
          src="/logo_vc_dark.ico"
          alt="Logo VegaCars"
          width="140"
          height="140"
        />
        <h1 className="text-slate-200 text-lg">
          Vega <span className="text-[#eac76b]">Cars</span>
        </h1>
      </div>
    </div>
  );
}
