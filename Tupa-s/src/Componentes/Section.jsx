import React from 'react';

function Section({ title, linkText, children }) {
  return (
    <div className="rounded-lg flex flex-col my-16 mx-8 md:mx-16">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold text-2xl">{title}</h1>
        {linkText && <a href="#" className="text-green-600 text-sm font-medium">{linkText}</a>}
      </div>
      <div className="flex flex-row gap-8 justify-center mt-10">
        {children}
      </div>
    </div>
  );
}

export default Section;