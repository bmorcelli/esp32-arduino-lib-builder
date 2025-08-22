import * as Network from 'expo-network';

export async function discoverDevices() {
  // Placeholder for mDNS discovery: returns empty list.
  // Real implementation should query local network using mDNS.
  return [];
}

export function manualDevice(ip) {
  return { ip };
}
