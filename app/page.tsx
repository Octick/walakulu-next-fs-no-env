"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const req = await fetch("/api");
        const res = await req.json();
        if (!req.ok || !res.success) {
          setTimeout(() => {
            setIsLoading(false);
            setMessage(res.message);
          }, 2000);
          return;
        }
        setTimeout(() => {
          setIsLoading(false);
          setMessage(res.message);
        }, 2000);
        return;
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getMessage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-sm mb-4 font-thin text-gray-700">
        Next.js Full Stack App with no env
      </p>
      <div className="text-4xl font-bold max-w-lg text-center">
        {isLoading ? <h1>Loading...</h1> : <h1>{message}</h1>}
      </div>
    </div>
  );
}
