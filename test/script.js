import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const id = Math.floor(Math.random() * 1000000);
  http.get(`http://localhost:3001/products/${id}/styles`);
  sleep(1);
}
