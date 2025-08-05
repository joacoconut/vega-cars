import { db } from "@/lib/db";
import { useAuth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: { params: { carId: string } }
) {
  try {
    const { userId } = useAuth(); // auth() ya no necesita `await` acá
    const { carId } = context.params;
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
