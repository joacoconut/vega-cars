"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import FormAddCar from "../FormAddCar/FormAddCar";

export default function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          size={"lg"}
          onClick={() => setOpenDialog(true)}
          className="cursor-pointer bg-[#eac76b] hover:bg-[#e6b93d] pr-[-5px] text-[18px] w-50"
        >
          Add New Car
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add New Car</DialogTitle>
        <DialogHeader>
          <DialogDescription asChild>
            <div>
              <FormAddCar setOpenDialog={setOpenDialog} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
