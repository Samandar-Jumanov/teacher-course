export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
}

export const courses: Course[] = [
  {
    id: 'ielts-intensive',
    title: 'IELTS Intensive Preparation',
    description: 'Comprehensive IELTS training focusing on all four modules: Reading, Writing, Listening, and Speaking.',
    duration: '12 weeks',
    price: 999,
    features: [
      'Weekly mock tests',
      'One-on-one feedback sessions',
      'Study materials included',
      'Speaking practice with native speakers',
      'Writing evaluation and feedback'
    ]
  },
  {
    id: 'business-english',
    title: 'Business English',
    description: 'Master professional English communication for the corporate world.',
    duration: '8 weeks',
    price: 799,
    features: [
      'Email writing',
      'Presentation skills',
      'Negotiation vocabulary',
      'Business etiquette',
      'Meeting participation'
    ]
  },
  {
    id: 'conversation',
    title: 'Advanced Conversation',
    description: 'Enhance your speaking fluency and confidence in English.',
    duration: '6 weeks',
    price: 599,
    features: [
      'Small group sessions',
      'Real-life scenarios',
      'Pronunciation focus',
      'Idioms and expressions',
      'Cultural context'
    ]
  }
];