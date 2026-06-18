export type Movie = {
  id: number;
  title: string;
  genre: string;
  rating: string;
  runtime: string;
  language: string;
  description: string;
  accent: string;
  showtimes: Array<{
    id: number;
    label: string;
    theater: string;
    time: string;
    price: string;
  }>;
};

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Interstellar',
    genre: 'Sci-Fi',
    rating: '8.7',
    runtime: '2h 49m',
    language: 'English',
    description:
      "A team of explorers travels through a wormhole in space to ensure humanity's survival.",
    accent: 'from-sky-500 via-cyan-500 to-indigo-500',
    showtimes: [
      { id: 101, label: 'IMAX', theater: 'PVR ICON', time: '10:30 AM', price: '₹350' },
      { id: 102, label: 'Atmos', theater: 'PVR ICON', time: '2:15 PM', price: '₹400' },
      { id: 103, label: 'Dolby 4K', theater: 'Cinepolis', time: '7:30 PM', price: '₹450' },
    ],
  },
  {
    id: 2,
    title: 'Dune: Part Two',
    genre: 'Adventure',
    rating: '8.9',
    runtime: '2h 46m',
    language: 'English',
    description:
      'Paul Atreides unites with the Fremen on a warpath of revenge against the conspirators who destroyed his family.',
    accent: 'from-amber-500 via-orange-500 to-red-500',
    showtimes: [
      { id: 201, label: 'IMAX', theater: 'PVR Luxe', time: '1:00 PM', price: '₹320' },
      { id: 202, label: 'Atmos', theater: 'PVR Luxe', time: '6:00 PM', price: '₹420' },
    ],
  },
  {
    id: 3,
    title: 'Oppenheimer',
    genre: 'Drama',
    rating: '8.4',
    runtime: '3h',
    language: 'English',
    description:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    accent: 'from-fuchsia-500 via-purple-500 to-slate-900',
    showtimes: [
      { id: 301, label: '70MM', theater: 'INOX', time: '3:30 PM', price: '₹350' },
      { id: 302, label: '70MM', theater: 'INOX', time: '9:00 PM', price: '₹450' },
    ],
  },
  {
    id: 4,
    title: 'Spider-Man: Across the Spider-Verse',
    genre: 'Animation',
    rating: '8.9',
    runtime: '2h 20m',
    language: 'English',
    description:
      'Miles Morales catapults across the multiverse and meets a team of Spider-People charged with protecting it.',
    accent: 'from-red-500 via-rose-500 to-pink-500',
    showtimes: [
      { id: 401, label: '3D', theater: 'PVR Gold', time: '11:00 AM', price: '₹300' },
      { id: 402, label: '3D', theater: 'PVR Gold', time: '8:30 PM', price: '₹380' },
    ],
  },
];

export const events = [
  { title: 'Live Concert Night', city: 'Mumbai', note: 'Premium seating and backstage passes available.' },
  { title: 'Stand-up Special', city: 'Bangalore', note: 'Limited seats for an intimate comedy experience.' },
  { title: 'Film Festival', city: 'Delhi', note: 'A curated selection of award-winning indie films.' },
];

export const offers = [
  '15% off for first-time bookings with code CINE15',
  'Buy 3 get 1 free on weekday screenings',
  'Premium lounge access bundled with VIP tickets',
];

export function getMovieById(id: number) {
  return movies.find((movie) => movie.id === id);
}
