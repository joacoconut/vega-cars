import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  // Extraer 'id' del pathname
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return new NextResponse("ID not provided", { status: 400 });
  }

  try {
    const deleted = await db.order.delete({
      where: { id },
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
