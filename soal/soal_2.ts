function calculateAverageResponseTime(responseTimes: { endpoint: string, time: number }[]): number {
  const totalResponseTime = responseTimes.reduce((total, log) => total + log.time, 0);
  
  // Menghitung rata-rata
  const averageResponseTime = totalResponseTime / responseTimes.length;
  
  return averageResponseTime;
}

// Contoh penggunaan
const responseTimes = [
  { endpoint: '/api/v1/users', time: 120 },
  { endpoint: '/api/v1/products', time: 80 },
  { endpoint: '/api/v1/orders', time: 150 }
];

const averageTime = calculateAverageResponseTime(responseTimes);
console.log(averageTime);