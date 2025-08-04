"use client";

import ModalAddReservation from "@/components/Shared/ModalAddReservation/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, GemIcon, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";

export default function ListLovedCars() {
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <p className="pt-5">No Cars Liked Yet!</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {lovedItems.map((car: Car) => {
            const {
              priceDay,
              photo,
              name,
              type,
              transmission,
              people,
              engine,
              id,
              cv,
            } = car;

            return (
              <div
                className="p-1 rounded-lg shadow-md hover:shadow-lg"
                key={id}
              >
                <Image
                  src={photo}
                  alt={car.name}
                  width={400}
                  height={600}
                  className="rounded-lg aspect-[3/2]"
                />
                <div className="p-3">
                  <div className="flex flex-col mb-3 gap-x-4">
                    <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                    <p> USD ${priceDay} per Day </p>
                  </div>
                  <p className="flex items-center">
                    <GemIcon className="h-4 w-4 mr-2" strokeWidth={1} />
                    {type}
                  </p>
                  <p className="flex items-center">
                    <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                    {transmission}
                  </p>
                  <p className="flex items-center">
                    <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                    {people}
                  </p>
                  <p className="flex items-center">
                    <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                    {cv}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 mt-2">
                    <div className="w-full">
                      <ModalAddReservation car={car} />
                    </div>

                    <Heart
                      className="mt-2 cursor-pointer fill-black"
                      onClick={() => removeLovedItem(car.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
