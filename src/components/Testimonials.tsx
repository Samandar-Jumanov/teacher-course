import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-purple-900" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Student Success Stories</h2>
          <p className="text-xl text-purple-200">Hear from our successful students</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full blur"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full relative border-2 border-yellow-500"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-purple-200 mb-4">{testimonial.text}</p>
                <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-400 px-4 py-2 rounded-full inline-block">
                  {testimonial.achievement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};