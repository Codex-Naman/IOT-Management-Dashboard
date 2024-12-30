import React from 'react';
import { Device } from '../types/device';

interface DeviceChartProps {
  device: Device;
}

export const DeviceChart: React.FC<DeviceChartProps> = ({ device }) => {
  const maxValue = Math.max(...device.readings.map(r => r.value));
  const points = device.readings.map((reading, index) => {
    const x = (index / (device.readings.length - 1)) * 100;
    const y = (reading.value / maxValue) * 100;
    return `${x},${100 - y}`;
  }).join(' ');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {device.name} - {device.type.charAt(0).toUpperCase() + device.type.slice(1)} Readings
      </h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points={points}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200" />
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-200" />
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Last 24 hours
      </div>
    </div>
  );
};