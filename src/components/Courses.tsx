import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';

export const Courses: React.FC = () => {
  return (
    <div className="relative py-24 bg-gradient-to-b from-purple-900 to-black" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Course Packages</h2>
          <p className="text-xl text-purple-200">Choose the perfect program for your goals</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-purple-200 mb-4">{course.description}</p>
                <div className="mb-8">
                  <p className="text-3xl font-bold text-yellow-400">${course.price}</p>
                  <p className="text-purple-300">{course.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-purple-100">
                      <Check className="h-5 w-5 text-green-400 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 px-6 rounded-xl hover:from-purple-500 hover:to-red-400 transition-all transform hover:scale-105 font-semibold">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};