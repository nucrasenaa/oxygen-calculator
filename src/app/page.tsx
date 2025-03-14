"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import OxygenCalculator from "@/components/OxygenCalculator";

function OxygenCalculatorWithParams() {
  const searchParams = useSearchParams();
  const [conversionFactor, setConversionFactor] = useState<string>("");

  useEffect(() => {
    const factor = searchParams.get("conversionFactor");
    if (factor) {
      setConversionFactor(factor);
    }
  }, [searchParams]);

  return <OxygenCalculator initialConversionFactor={conversionFactor} />;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
          คำนวณเวลาการใช้งานถังออกซิเจน
        </h1>
        {/* <p className="text-center text-gray-600 mb-8 max-w-2xl">
          แอปพลิเคชันนี้ช่วยให้คุณคำนวณระยะเวลาการใช้งานถังออกซิเจนขนาดต่างๆ ได้อย่างรวดเร็วและแม่นยำ 
          โดยคำนวณจากอัตราการใช้ออกซิเจน (LPM) และแรงดันออกซิเจนในถัง (PSI) สำหรับถังขนาด D, E, M และ H cylinder
        </p> */}
        
        <Suspense fallback={<div>Loading...</div>}>
          <OxygenCalculatorWithParams />
        </Suspense>
        
        <div className="mt-12 text-sm text-gray-600 max-w-2xl">
          <h2 className="text-lg font-semibold mb-2">วิธีใช้งานเครื่องคำนวณออกซิเจน</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>เลือกขนาดถังออกซิเจนที่คุณใช้งาน (D, E, M หรือ H cylinder)</li>
            <li>ใส่อัตราการใช้ออกซิเจนในหน่วย LPM (ลิตรต่อนาที)</li>
            <li>ใส่แรงดันออกซิเจนในถังในหน่วย PSI</li>
            <li>กดปุ่ม คำนวณ เพื่อดูผลลัพธ์</li>
          </ol>
          
          <h2 className="text-lg font-semibold mt-6 mb-2">เกี่ยวกับการคำนวณ</h2>
          <p>
            การคำนวณระยะเวลาการใช้งานถังออกซิเจนใช้สูตร: 
            เวลา (นาที) = (แรงดันออกซิเจน × Conversion Factor) ÷ อัตราการใช้ออกซิเจน
          </p>
          <p className="mt-2">
            ค่า Conversion Factor แตกต่างกันไปตามขนาดของถัง โดยถังขนาดใหญ่จะมีค่า Conversion Factor สูงกว่า
            ซึ่งหมายถึงมีปริมาณออกซิเจนที่ใช้งานได้มากกว่า
          </p>
        </div>
      </div>
    </main>
  );
}