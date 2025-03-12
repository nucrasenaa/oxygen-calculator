"use client";

import { useState, useEffect } from "react";

type TankSize = {
  name: string;
  factor: number;
};

const tankSizes: TankSize[] = [
  { name: "D cylinder", factor: 0.16 },
  { name: "E cylinder", factor: 0.28 },
  { name: "M cylinder", factor: 1.56 },
  { name: "H cylinder", factor: 3.14 },
];

interface OxygenCalculatorProps {
  initialConversionFactor?: string;
}

export default function OxygenCalculator({ initialConversionFactor }: OxygenCalculatorProps) {
  const [flowRate, setFlowRate] = useState<string>("");
  const [conversionFactor, setConversionFactor] = useState<string>(initialConversionFactor || "");
  const [cylinderPressure, setCylinderPressure] = useState<string>("");
  const [duration, setDuration] = useState<number | null>(null);
  const [selectedTank, setSelectedTank] = useState<TankSize | null>(null);

  useEffect(() => {
    if (initialConversionFactor) {
      // Find the tank that matches the conversion factor
      const tank = tankSizes.find(
        (tank) => tank.factor.toString() === initialConversionFactor
      );
      if (tank) {
        setSelectedTank(tank);
        setConversionFactor(tank.factor.toString());
      }
    }
  }, [initialConversionFactor]);

  const handleTankSelection = (tankName: string) => {
    const tank = tankSizes.find((t) => t.name === tankName);
    if (tank) {
      setSelectedTank(tank);
      setConversionFactor(tank.factor.toString());
    }
  };

  const calculateDuration = () => {
    if (!flowRate || !conversionFactor || !cylinderPressure) {
      setDuration(null);
      return;
    }

    const flow = parseFloat(flowRate);
    const factor = parseFloat(conversionFactor);
    const pressure = parseFloat(cylinderPressure);

    if (flow <= 0) {
      alert("อัตราการใช้ออกซิเจนต้องมากกว่า 0");
      return;
    }

    // Formula: Duration (minutes) = (Cylinder pressure × Conversion factor) / Flow rate
    const calculatedDuration = (pressure * factor) / flow;
    setDuration(Math.round(calculatedDuration));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateDuration();
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">ขนาดถัง</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={selectedTank?.name || ""}
            onChange={(e) => handleTankSelection(e.target.value)}
          >
            <option value="" disabled>
              เลือกขนาดถัง
            </option>
            {tankSizes.map((tank) => (
              <option key={tank.name} value={tank.name}>
                {tank.name} (conversion factor: {tank.factor})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="flowRate" className="block text-sm font-medium">
            อัตราการใช้ออกซิเจน (LPM)
          </label>
          <input
            id="flowRate"
            type="number"
            step="0.1"
            min="0.1"
            value={flowRate}
            onChange={(e) => setFlowRate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="conversionFactor" className="block text-sm font-medium">
            Conversion Factor
          </label>
          <input
            id="conversionFactor"
            type="number"
            step="0.01"
            value={conversionFactor}
            onChange={(e) => setConversionFactor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cylinderPressure" className="block text-sm font-medium">
            แรงดันออกซิเจนในถัง (PSI)
          </label>
          <input
            id="cylinderPressure"
            type="number"
            value={cylinderPressure}
            onChange={(e) => setCylinderPressure(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          คำนวณ
        </button>
      </form>

      {duration !== null && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium">ผลการคำนวณ</h3>
          <p className="mt-2 text-xl font-bold">
            เวลาที่ใช้ได้: {duration} นาที ({Math.floor(duration / 60)} ชั่วโมง {duration % 60} นาที)
          </p>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">รายละเอียดขนาดถัง</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ขนาดถัง</th>
                <th className="py-2 px-4 border-b">Conversion Factor</th>
              </tr>
            </thead>
            <tbody>
              {tankSizes.map((tank) => (
                <tr key={tank.name} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{tank.name}</td>
                  <td className="py-2 px-4 border-b">{tank.factor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}