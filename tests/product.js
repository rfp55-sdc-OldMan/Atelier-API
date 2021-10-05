import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 3000,
  duration: '15s',
};

export default function () {
  const id = Math.floor(Math.random() * 1000000);
  http.get(`http://localhost:3001/products/${id}`);
  sleep(1);
}

// CLI command: k6 run test/script.js
