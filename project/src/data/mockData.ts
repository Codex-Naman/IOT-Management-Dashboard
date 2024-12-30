import { Device } from '../types/device';

const generateReadings = (count: number, type: 'temperature' | 'humidity' | 'battery') => {
  return Array.from({ length: count }, (_, i) => ({
    timestamp: Date.now() - (count - i) * 300000,
    value: type === 'temperature' 
      ? 20 + Math.random() * 10 
      : type === 'humidity' 
        ? 30 + Math.random() * 40
        : 60 + Math.random() * 40,
    type
  }));
};

export const mockDevices: Device[] = [
  {
    id: '1',
    name: 'Temperature Sensor A1',
    status: 'online',
    type: 'temperature',
    lastReading: 24.5,
    battery: 85,
    temperature: 24.5,
    humidity: 45,
    readings: [...generateReadings(24, 'temperature')]
  },
  {
    id: '2',
    name: 'Humidity Sensor B2',
    status: 'warning',
    type: 'humidity',
    lastReading: 68,
    battery: 45,
    temperature: 22.1,
    humidity: 68,
    readings: [...generateReadings(24, 'humidity')]
  },
  {
    id: '3',
    name: 'Environmental Monitor C3',
    status: 'offline',
    type: 'environmental',
    lastReading: 0,
    battery: 12,
    temperature: 23.8,
    humidity: 52,
    readings: [...generateReadings(24, 'battery')]
  }
];