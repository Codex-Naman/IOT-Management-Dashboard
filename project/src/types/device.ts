export interface Device {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'warning';
  type: string;
  lastReading: number;
  battery: number;
  temperature: number;
  humidity: number;
  readings: Reading[];
}

export interface Reading {
  timestamp: number;
  value: number;
  type: 'temperature' | 'humidity' | 'battery';
}