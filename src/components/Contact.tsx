import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-purple-900 to-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-purple-200">Start your English learning journey today</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-purple-200 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300 h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-red-400 transition-all transform hover:scale-105 font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <Mail className="h-6 w-6 text-yellow-400" />, title: "Email", content: "contact@englishteacher.com" },
              { icon: <Phone className="h-6 w-6 text-red-400" />, title: "Phone", content: "+1 (555) 123-4567" },
              { icon: <MapPin className="h-6 w-6 text-purple-400" />, title: "Location", content: "123 Learning Street, Education City, EC 12345" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start bg-black/50 p-6 rounded-xl border border-purple-500/20"
              >
                <div className="bg-gradient-to-r from-purple-900 to-black p-3 rounded-lg mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-purple-200">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};