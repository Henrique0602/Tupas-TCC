/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function InputField({ type, placeholder, icon: Icon, value, onChange }) {
  return (
    <div className="relative mb-5 drop-shadow-md">
      <span className="absolute inset-y-0 left-3 flex items-center text-black">
        <Icon />
      </span>
      <input 
        type={type} 
        value={value}
        onChange={onChange}
        className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-black focus:outline-none" 
        placeholder={placeholder} 
      />
    </div>
  );
}

export default InputField;