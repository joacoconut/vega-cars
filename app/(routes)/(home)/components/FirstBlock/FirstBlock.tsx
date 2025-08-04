import Reveal from "@/components/Shared/Reveal/Reveal";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FirstBlock() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-25 lg:px-0 items-center pt-20 lg:pt-0">
      <Reveal className="md:pl-15" position="bottom">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-center md:text-6xl lg:text-7xl uppercase text-[#eac76b] font-medium">
            Premium <br /> <span className="text-black">Car</span> Rental
          </h1>

          <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm text-center">
            Don't deny yourself pleasure of driving the best premium cars from
            around the world here and now.
          </p>

          <Link href="/cars" className="pt-5">
            <Button className="rounded-xl p-6 text-lg mt-5">
              Show All Models <MoveRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Reveal>

      <Reveal className="flex md:justify-center justify-end" position="right">
        <div className="relative w-[600px] aspect-square">
          <Image
            src="/images/hero-removebg-2.png"
            alt="Rent Cars"
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 600px"
            className="object-contain"
          />
        </div>
      </Reveal>
    </div>
  );
}
