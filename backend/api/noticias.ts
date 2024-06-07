import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';
 
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const noticias = await kv.hgetall('noticias');
  return response.status(200).json(noticias);
}