import { Car } from "@prisma/client";
import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
import { toast } from "sonner";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast.warning("Car already exists in the list", {
            style: {
              backgroundColor: "#f59e0b",
              color: "white",
              border: "none",
            },
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast.success("Car added successfully", {
          style: {
            backgroundColor: "#49bc1e",
            color: "white",
            border: "none",
          },
        });
      },

      removeLovedItem: (id: string) => {
        set({
          lovedItems: get().lovedItems.filter((item) => item.id !== id),
        });
      },
    }),
    {
      name: "loved-cars-storage", // nombre clave en localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
