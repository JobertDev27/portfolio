"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    async function fetchTime() {
      const res = await fetch(
        "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Manila",
      );
      const data: { dateTime: string; dayOfWeek: string } = await res.json();

      setTime(new Date(data.dateTime));
      setDay(data.dayOfWeek);
    }

    fetchTime();
  }, []);

  useEffect(() => {
    if (!time) return;

    const interval = setInterval(() => {
      setTime((prev) => (prev ? new Date(prev.getTime() + 1000) : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  function formatTime(date: Date): string {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  return (
    <div className="flex items-center justify-center flex-col gap-5 p-2 lg:p-6 border border-(--highlight) w-fit">
      <p>Philippines</p>
      <Image
        src={"/earth.png"}
        alt="earth"
        width={64}
        height={64}
        className="w-6 h-6 md:w-16 md:h-16"
      />
      <div className="flex items-center flex-col">
        <p className="text-lg md:text-2xl font-bold">
          {time ? formatTime(time) : "Loading..."}
        </p>
        <p className="text-sm md:text-lg">{day} UTC+08:00</p>
      </div>
    </div>
  );
}
