import { db } from "@/lib/db";
import { useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// PATCH — actualizar auto
export async function PATCH(req: NextRequest, context: any) {
  try {
    const { userId } = useAuth(); // Clerk ya no requiere await
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
    console.error("[CAR PATCH ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// DELETE — eliminar auto
export async function DELETE(req: NextRequest, context: any) {
  try {
    const { userId } = useAuth();
    const { carId } = context.params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await db.car.delete({
      where: {
        id: carId,
        userId,
      },
    });

    return new NextResponse("Car deleted successfully", { status: 200 });
  } catch (error) {
    console.error("[CAR DELETE ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
