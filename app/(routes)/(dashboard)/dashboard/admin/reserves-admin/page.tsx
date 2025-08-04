import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import TableReserves from "./components/TableReserves/TableReserves";
import { isAdministrator } from "@/lib/isAdmin";

export default async function reservesAdmin() {
  const user = currentUser();
  const { userId } = await auth();

  if (!userId || !user || !isAdministrator(userId)) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="text-3xl mb-4">Reserves Page</h1>
      <TableReserves orders={orders} />
    </div>
  );
}
