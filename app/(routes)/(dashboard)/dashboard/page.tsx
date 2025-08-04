import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ListCars from "./components/listCars/ListCars";

export default async function DashboardPage() {
  //Al ser una parte de la aplicación donde el usuario TIENE que estar registrado, hacemos la validación de siempre y la manipulamos segun nuestra necesidad, en este caso haciendo un redirect en lugar de mandar un mensaje de Unauthorized
  const { userId } = await auth();

  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      {/* <p>Listado de Autos...</p> */}
      <ListCars cars={cars} />
    </div>
  );
}
