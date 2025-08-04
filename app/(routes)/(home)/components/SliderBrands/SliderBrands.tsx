"use client";

import Reveal from "@/components/Shared/Reveal/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { dataBrands } from "./SliderBrands.data";
import Image from "next/image";

export default function SliderBrands() {
  return (
    <Reveal
      position="bottom"
      className="flex gap-x-20 justify-center lg:pb-20 mt-5 mb-10"
    >
      <Carousel
        className="w-full max-w-6xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataBrands.map(({ url }) => (
            <CarouselItem
              key={url}
              className="basis-4/4 md:basis-2/4 lg:basis-1/6"
            >
              <div className="relative w-[160px] aspect-[3/2] mx-auto">
                <Image
                  src={`/images/brands/${url}`}
                  alt="Brand"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}
