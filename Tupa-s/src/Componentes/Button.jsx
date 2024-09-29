import React from 'react';

function Button({ text, onClick }) {
  return (
    <button 
      type="submit" 
      className="bg-color_verde text-colortxt_white py-2 rounded-3xl w-64 h-12 mb-2 text-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;