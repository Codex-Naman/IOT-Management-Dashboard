import React from 'react';
import { Activity } from 'lucide-react';
import { DeviceCard } from './DeviceCard';
import { DeviceChart } from './DeviceChart';
import { mockDevices } from '../data/mockData';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">IoT Device Monitor</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockDevices.map(device => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockDevices.map(device => (
            <DeviceChart key={device.id} device={device} />
          ))}
        </div>
      </main>
    </div>
  );
};