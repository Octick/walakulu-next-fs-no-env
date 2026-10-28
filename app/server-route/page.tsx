import { getSuccessMessage } from "@/server/actions";
import React from "react";

export default async function ServerRoute() {
  const message = (await getSuccessMessage()) as string;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-sm mb-4 font-thin text-gray-700">
        Next.js Full Stack App with no env
      </p>
      <div className="text-4xl font-bold max-w-lg text-center">
        {message ? <h1>{message}</h1> : <h1>loadng</h1>}
      </div>
    </div>
  );
}
