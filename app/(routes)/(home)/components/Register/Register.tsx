import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <footer className="bg-black dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex justify-center gap-30 items-start">
        <div>
          <h2 className="text-xl font-semibold text-[#CBD5E1] dark:text-white text-center flex items-center gap-2">
            <Image
              priority={true}
              src="/logo_vc_dark.ico"
              alt="VegaCars"
              width={50}
              height={50}
            />
            VegaCars
          </h2>
          <p className="text-sm mt-2 text-white">Premium car rental service</p>
        </div>

        <div className="text-sm">
          <p className="mb-3 text-[#CBD5E1]  dark:text-neutral-300 font-medium text-center">
            Not registered yet?
          </p>
          <Link href="/sign-in" className="flex gap-x-3">
            <Button size={"lg"}>
              Create an Account <User className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-xs text-center mt-10 text-white">
        © 2025 VegaCars. All rights reserved.
      </div>
    </footer>
  );
}
