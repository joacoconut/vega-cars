"use client";

import { useAuth } from "@clerk/nextjs";
import { ListCarsProps } from "./ListCars.types";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import ModalAddReservation from "@/components/Shared/ModalAddReservation/ModalAddReservation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SkeletonCars from "@/components/Shared/Skeleton/SkeletonCars";

export default function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { userId } = useAuth();
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  if (!cars) {
    return <SkeletonCars />;
  }

  return (
    <>
      {cars.length === 0 && <p>There's no cars with this filters</p>}

      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {cars.map((car: Car) => {
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
          const likedCar = lovedItems.some((item) => item.id === car.id);

          return (
            <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
              <Image
                src={photo}
                alt={name}
                width={400}
                height={600}
                className="rounded-lg aspect-[3/2]"
              />
              <div className="p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-xl min-h-16 lg:min-h-fit"> {name} </p>
                  <p>
                    <span className="font-bold">USD ${priceDay} /day</span>
                  </p>
                </div>
                <p className="flex items-center">
                  <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                  {type}
                </p>

                <p className="flex items-center">
                  <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                  {transmission}
                </p>

                <p className="flex items-center">
                  <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                  {people}
                </p>

                <p className="flex items-center">
                  <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                  {engine}
                </p>

                <p className="flex items-center">
                  <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                  {cv}
                </p>

                {userId ? (
                  <div className="flex items-center justify-center gap-x-3 ">
                    <div className="w-3/4">
                      <ModalAddReservation car={car} />
                    </div>

                    <Heart
                      className={`mt-2 cursor-pointer ${
                        likedCar && "fill-black"
                      }`}
                      onClick={
                        likedCar
                          ? () => removeLovedItem(car.id)
                          : () => addLoveItem(car)
                      }
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                ) : (
                  <div className="w-full mt-5 text-center">
                    <Link href="/sign-in">
                      <Button className="w-full">Log In to Reserve</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
