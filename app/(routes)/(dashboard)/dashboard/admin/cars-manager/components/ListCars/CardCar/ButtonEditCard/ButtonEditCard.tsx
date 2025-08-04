"use client";

import { Button } from "@/components/ui/button";
import { ButtonEditCardTypes } from "./ButtonEditCard.types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Pencil } from "lucide-react";
import FormEditCar from "../FormEditCar/FormEditCar";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function ButtonEditCard(props: ButtonEditCardTypes) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="border border-gray-400 gap-1.5 w-full cursor-pointer"
        >
          <Pencil className="w-4 h-4" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle> Edit Car </DialogTitle>
        <DialogHeader>
          <DialogDescription asChild>
            <div>
              <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
