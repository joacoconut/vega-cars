import { db } from "@/lib/db";
import { useAuth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: any // 👈 el cambio importante
) {
  try {
    const { userId } = useAuth(); // Clerk ya no requiere await
    const { carId } = context.params; // se accede a params desde context
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const car = await db.car.update({
      where: {
        id: carId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    console.error("[CAR FORM PATCH ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
