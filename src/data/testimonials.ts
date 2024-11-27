export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  achievement: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    text: 'Thanks to the IELTS preparation course, I achieved a band score of 8.5! The personalized feedback was invaluable.',
    achievement: 'IELTS 8.5'
  },
  {
    id: '2',
    name: 'Michael Park',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    text: 'The business English course helped me secure a promotion at work. The practical approach to teaching made all the difference.',
    achievement: 'Corporate Promotion'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    text: 'I gained so much confidence in speaking English. The conversation course was exactly what I needed.',
    achievement: 'Fluent Speaker'
  }
];