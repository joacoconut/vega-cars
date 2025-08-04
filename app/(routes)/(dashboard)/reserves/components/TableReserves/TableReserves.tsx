"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableReservesProps } from "./TableReserves.types";
import { formatPrice } from "../../../../../../lib/formatPrice";
import { CircleX, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function TableReserves(props: TableReservesProps) {
  const [orders, setOrders] = useState(props.orders);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  const handleCancelOrder = async (orderId: string) => {
    setLoadingId(orderId); // activar loader para ese ID
    try {
      // Llamada al backend para cancelar
      await axios.delete(`/api/reservations/${orderId}`);

      // Actualizar UI local
      setOrders((prev) => prev.filter((order) => order.id !== orderId));

      toast.success("Reservation Cancelled", {
        style: {
          backgroundColor: "#49bc1e",
          color: "white",
          border: "none",
        },
      });
    } catch (error) {
      toast.error("Error canceling reservation", {
        style: {
          backgroundColor: "#fc3127",
          color: "white",
          border: "none",
        },
      });
      // Podés mostrar un toast o mensaje de error
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <Table>
      <TableCaption>A list of your recent bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">CAR</TableHead>
          <TableHead>DATE START</TableHead>
          <TableHead>DATE END</TableHead>
          <TableHead>STATUS</TableHead>
          <TableHead className="text-right">AMOUNT</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} className="font-medium">
            <TableCell className="py-3"> {order.carName} </TableCell>
            <TableCell className="py-3">
              {new Date(order.orderDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="py-3">
              {new Date(order.orderEndDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="py-4">
              <div className="p-2 text-white bg-green-600 rounded-lg w-fit">
                {order.status.toUpperCase()}
              </div>
            </TableCell>
            <TableCell className="text-right">
              {formatPrice(Number(order.totalAmount))}
            </TableCell>
            <TableCell className="text-center">
              {loadingId === order.id ? (
                <Loader2 className="animate-spin text-red-600 " />
              ) : (
                <CircleX
                  className="cursor-pointer bg-red-600 rounded-full text-white"
                  onClick={() => handleCancelOrder(order.id)}
                />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
