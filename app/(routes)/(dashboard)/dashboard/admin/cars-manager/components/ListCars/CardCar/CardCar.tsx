"use client";

import Image from "next/image";
import { CardCarTypes } from "./CardCar.types";
import {
  Fuel,
  Gauge,
  Gem,
  Trash,
  Users,
  Wrench,
  ArrowDown,
  ArrowUp,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ButtonEditCard from "./ButtonEditCard/ButtonEditCard";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CardCar({ car }: CardCarTypes) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean | null>(null);
  const [loadingDelete, setLoadingDelete] = useState<boolean | null>(null);

  const deleteCar = async () => {
    setLoadingDelete(true);
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast.success("Car Deleted Successfully", {
        style: { backgroundColor: "#49bc1e", color: "white" },
      });
      router.refresh();
    } catch {
      toast.error("Something went wrong", {
        style: { backgroundColor: "#fc3127", color: "white" },
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  const handlePublishCar = async (publish: boolean) => {
    setLoading(true);

    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });

      router.refresh();
    } catch {
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <Image
          src={car.photo}
          alt={car.name}
          width={600}
          height={400}
          className="w-full h-52 object-cover pt-10"
        />

        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full 
          ${
            car.isPublish ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {car.isPublish ? "Published" : "Unpublished"}
        </span>
      </div>

      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold text-center text-black dark:text-white">
          {car.name}
        </h3>
        <p className="text-center text-lg font-medium text-[#d4af37]">
          USD ${car.priceDay} / day
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Gem size={16} /> {car.type}
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} /> {car.people} people
          </div>
          <div className="flex items-center gap-2">
            <Gauge size={16} /> {car.cv} CV
          </div>
          <div className="flex items-center gap-2">
            <Fuel size={16} /> {car.engine}
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Wrench size={16} /> {car.transmission}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-2 mt-4">
          <Button
            className="flex-1 flex items-center gap-2 bg-red-600 text-white hover:bg-red-700"
            onClick={deleteCar}
          >
            {loadingDelete ? (
              <Loader2 className="animate-spin text-white" />
            ) : (
              <>
                <Trash size={16} /> Delete
              </>
            )}
          </Button>

          {/* <div className="flex-1 w-full bg-red-500 rounded-md text-center cursor-pointer"> */}
          <ButtonEditCard carData={car} />
          {/* </div> */}
        </div>

        <Button
          variant="outline"
          disabled={loading === true}
          className="w-full mt-2 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePublishCar(!car.isPublish)}
        >
          {loading ? (
            <Loader2 className="animate-spin text-black" />
          ) : car.isPublish ? (
            <>
              Unpublish <ArrowDown size={16} />
            </>
          ) : (
            <>
              Publish <ArrowUp size={16} />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
