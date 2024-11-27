import React from 'react';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const Hero: React.FC = () => {
  const stats = [
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      value: 8,
      suffix: ".0",
      label: "IELTS Score",
      formatValue: (value: number) => value.toFixed(1)
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      value: 100,
      suffix: "+",
      label: "Students Taught"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
      value: 5,
      suffix: "+ Years",
      label: "Teaching Experience"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-black" />,
      value: 15,
      suffix: "+",
      label: "Courses Available"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-red-700 to-yellow-500 text-white">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-20 gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master English with a
                <span className="text-yellow-300"> Professional</span>
              </h1>
              <p className="text-xl text-purple-100">
                Transform your English proficiency with personalized instruction from an IELTS certified teacher
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 rounded-lg p-2 w-fit mb-3">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-white">
                      <AnimatedCounter 
                        from={0} 
                        to={stat.value} 
                        formatValue={stat.formatValue}
                      />
                      {stat.suffix}
                    </p>
                    <p className="text-sm text-purple-100">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href="#register" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Start Learning
              </a>
              <a 
                href="#level-test" 
                className="bg-purple-900/50 hover:bg-purple-800/50 text-white px-8 py-3 rounded-lg transition-all border border-purple-500/20"
              >
                Take Level Test
              </a>
            </div>
          </div>

          {/* Right Content - Teacher Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Professional English Teacher"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-red-700/40 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};