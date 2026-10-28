/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export function GET(req: Request) {
  try {
    const message = "Next.js full-stack App";
    if (message === undefined) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed To Load the env Variables",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message: message + " - API Route",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: `Server Error` },
      { status: 500 },
    );
  }
}
