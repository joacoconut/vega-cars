import { auth } from "@clerk/nextjs/server";
import ListLovedCars from "./components/ListLovedCars";
import { redirect } from "next/navigation";

export default async function page() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl"> Cars You Liked </h1>
      <ListLovedCars />
    </div>
  );
}
