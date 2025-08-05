import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const deleted = await db.order.delete({
      where: { id: context.params.id },
    });

    return NextResponse.json({
      message: "Reservation canceled",
      data: deleted,
    });
  } catch (error) {
    console.error("[CANCEL_RESERVATION]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
