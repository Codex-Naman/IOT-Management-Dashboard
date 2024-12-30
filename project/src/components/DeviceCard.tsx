import React from 'react';
import { Battery, Thermometer, Droplets } from 'lucide-react';
import { Device } from '../types/device';

interface DeviceCardProps {
  device: Device;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  const statusColor = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    warning: 'bg-yellow-500'
  }[device.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{device.name}</h3>
        <div className={`h-3 w-3 rounded-full ${statusColor}`} />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Battery className="w-5 h-5 mr-2" />
            <span>{device.battery}%</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Thermometer className="w-5 h-5 mr-2" />
            <span>{device.temperature}°C</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Droplets className="w-5 h-5 mr-2" />
            <span>{device.humidity}%</span>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Status</span>
            <span className="capitalize">{device.status}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-500">Last Reading</span>
            <span>{device.lastReading} {device.type === 'temperature' ? '°C' : '%'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};