"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import OxygenCalculator from "@/components/OxygenCalculator";

export default function Home() {
  const searchParams = useSearchParams();
  const [conversionFactor, setConversionFactor] = useState<string>("");

  useEffect(() => {
    const factor = searchParams.get("conversionFactor");
    if (factor) {
      setConversionFactor(factor);
    }
  }, [searchParams]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
          คำนวณเวลาการใช้งานถังออกซิเจน
        </h1>
        <OxygenCalculator initialConversionFactor={conversionFactor} />
      </div>
    </main>
  );
}