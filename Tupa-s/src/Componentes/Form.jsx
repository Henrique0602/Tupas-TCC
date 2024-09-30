import React from 'react';

function Form({ children }) {
  return (
    <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg w-auto h-full flex flex-row justify-start">
      <div className="flex-col">{children}</div>
    </div>
  );
}

export default Form;