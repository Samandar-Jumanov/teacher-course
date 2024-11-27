import React, { useState } from 'react';
import { Calendar, Clock, Book, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';

export const CourseRegistration: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 text-black to-white py-24" id="register">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Course Registration</h2>
          <p className="text-xl text-gray-600">Begin your journey to English mastery</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 && (
            <div className="space-y-8">
              <div className="flex justify-center space-x-4 mb-8">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      num === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold mb-6">Select Your Course</h3>
              <div className="grid gap-6">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => {
                      setSelectedCourse(course.id);
                      setStep(2);
                    }}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      selectedCourse === course.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                        <p className="text-gray-600">{course.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">${course.price}</p>
                        <p className="text-gray-500">{course.duration}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center space-x-4 mb-8">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      num <= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Class Time</label>
                  <input
                    type="time"
                    name="preferredTime"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Registration Complete!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for registering! We'll contact you shortly with the next steps.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => window.location.href = '#'}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Return to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};