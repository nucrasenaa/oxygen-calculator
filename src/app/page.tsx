"use client";

import { useState } from "react";
import { Suspense, useEffect } from "react";
import OxygenCalculator from "@/components/OxygenCalculator";

// Create a client component to handle search params
function OxygenCalculatorWithParams() {
  const [conversionFactor, setConversionFactor] = useState<string>("");
  
  useEffect(() => {
    // Get URL search params in client component
    const params = new URLSearchParams(window.location.search);
    const factor = params.get("conversionFactor");
    if (factor) {
      setConversionFactor(factor);
    }
  }, []);

  return <OxygenCalculator initialConversionFactor={conversionFactor} />;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
          คำนวณเวลาการใช้งานถังออกซิเจน
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <OxygenCalculatorWithParams />
        </Suspense>
      </div>
    </main>
  );
}