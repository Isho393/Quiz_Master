import React from 'react';

export default function CategoryCard ({ category, onSelect })  {
  return (
    <div
      onClick={() => onSelect(category)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative p-8 text-white">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
          {category.name}
        </h3>
        
        <p className="text-white/80 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
          {category.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            {category.questions.length} questions
          </span>
          
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-white/40 transition-colors duration-300" />
    </div>
  );
};