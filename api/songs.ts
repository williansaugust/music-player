import type { VercelRequest, VercelResponse } from '@vercel/node';

const songs = [
  {
    id: 1001,
    title: 'Dreamscape Awakening',
    artist: 'Neon Horizons',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 1002,
    title: 'Midnight Cruiser',
    artist: 'The Synth Royals',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(songs);
}
