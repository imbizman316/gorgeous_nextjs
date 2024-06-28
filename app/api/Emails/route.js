import Email from "../../(models)/Email";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("CAME THROOOOUH!");
  try {
    const body = await req.json();
    // const emailData = body.email;

    await Email.create(body);
    return NextResponse.json({ message: "Email Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
