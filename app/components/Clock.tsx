"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    async function fetchTime() {
      const res = await fetch(
        "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Manila",
      );
      const data: { dateTime: string } = await res.json();

      setTime(new Date(data.dateTime));
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

  return <div>{time ? formatTime(time) : "Loading..."}</div>;
}
