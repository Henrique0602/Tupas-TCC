import React from 'react';

function Checkbox({ label }) {
  return (
    <label className="flex items-center">
      <input type="checkbox" className="form-checkbox mr-2" />
      <span className="text-black text-sm">{label}</span>
    </label>
  );
}

export default Checkbox;