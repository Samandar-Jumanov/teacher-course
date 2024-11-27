import React, { useState } from 'react';
import { Book, CheckCircle } from 'lucide-react';
import { levels } from '../data/levels';

export const LevelTest: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'q1',
      text: 'How comfortable are you with everyday English conversations?',
      options: [
        { value: 'a1', text: 'I struggle with basic conversations' },
        { value: 'a2', text: 'I can handle simple exchanges' },
        { value: 'b1', text: 'I can participate in most conversations' },
        { value: 'b2', text: 'I can discuss complex topics fluently' }
      ]
    },
    {
      id: 'q2',
      text: 'How well can you understand English movies without subtitles?',
      options: [
        { value: 'a1', text: 'I need subtitles in my language' },
        { value: 'a2', text: 'I need English subtitles' },
        { value: 'b1', text: 'I understand most content' },
        { value: 'b2', text: 'I understand almost everything' }
      ]
    },
    {
      id: 'q3',
      text: 'How comfortable are you with writing in English?',
      options: [
        { value: 'a1', text: 'I can write basic phrases' },
        { value: 'a2', text: 'I can write simple messages' },
        { value: 'b1', text: 'I can write detailed texts' },
        { value: 'b2', text: 'I can write complex documents' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (Object.keys(answers).length >= 2) {
      setStep(3);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b text-black from-blue-50 to-white py-24" id="level-test">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your English Level</h2>
          <p className="text-xl text-gray-600">Take our quick assessment to determine your current English level</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 && (
            <div className="space-y-8">
              <div className="flex items-center justify-center">
                <Book className="h-16 w-16 text-blue-600" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to start your assessment?</h3>
                <p className="text-gray-600 mb-8">This quick test will help us understand your current English level</p>
                <button
                  onClick={() => setStep(2)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Test
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              {questions.map((question) => (
                <div key={question.id} className="border-b pb-8">
                  <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
                  <div className="space-y-4">
                    {question.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(question.id, option.value)}
                        className={`w-full text-left p-4 rounded-lg border transition-colors ${
                          answers[question.id] === option.value
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-400'
                        }`}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Your Recommended Level</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="text-xl font-semibold text-blue-800">Intermediate (B1)</p>
                <p className="text-gray-600 mt-2">Based on your answers, we recommend starting with our Intermediate level courses.</p>
              </div>
              <button
                onClick={() => window.location.href = '#courses'}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Recommended Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};