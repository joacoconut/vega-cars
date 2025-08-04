import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Ups! An error ocurred! Try later </h1>

          <Link href="/">
            <Button> Return to Home </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
