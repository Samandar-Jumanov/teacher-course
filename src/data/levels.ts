export interface Level {
  id: string;
  name: string;
  description: string;
  cefr: string;
  skills: {
    reading: string;
    writing: string;
    speaking: string;
    listening: string;
  };
}

export const levels: Level[] = [
  {
    id: 'beginner',
    name: 'Beginner (A1)',
    description: 'Can understand and use familiar everyday expressions and basic phrases.',
    cefr: 'A1',
    skills: {
      reading: 'Can understand simple texts and signs',
      writing: 'Can write simple messages and fill out forms',
      speaking: 'Can introduce themselves and answer basic questions',
      listening: 'Can understand slow, clear speech'
    }
  },
  {
    id: 'elementary',
    name: 'Elementary (A2)',
    description: 'Can communicate in simple and routine tasks on familiar topics.',
    cefr: 'A2',
    skills: {
      reading: 'Can understand short, simple texts',
      writing: 'Can write short notes and messages',
      speaking: 'Can describe daily routines and preferences',
      listening: 'Can understand common expressions'
    }
  },
  {
    id: 'intermediate',
    name: 'Intermediate (B1)',
    description: 'Can deal with most situations likely to arise while traveling.',
    cefr: 'B1',
    skills: {
      reading: 'Can understand main points of clear texts',
      writing: 'Can write personal letters and simple essays',
      speaking: 'Can join conversations on familiar topics',
      listening: 'Can understand main points of clear speech'
    }
  },
  {
    id: 'upper-intermediate',
    name: 'Upper Intermediate (B2)',
    description: 'Can interact with a degree of fluency and spontaneity.',
    cefr: 'B2',
    skills: {
      reading: 'Can understand complex texts',
      writing: 'Can write detailed texts on various subjects',
      speaking: 'Can interact fluently with native speakers',
      listening: 'Can understand extended speech'
    }
  }
];