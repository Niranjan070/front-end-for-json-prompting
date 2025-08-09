
import React from 'react';

const InputForm = ({ onSubmit, value, onChange }) => (
  <form className="w-full flex justify-center" onSubmit={onSubmit}>
    <div className="w-full max-w-2xl flex rounded-2xl border border-purple-400/80 bg-gradient-to-br from-purple-900/80 to-black/80 shadow-lg overflow-hidden">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter the text"
        className="flex-1 bg-transparent text-white text-3xl px-8 py-6 focus:outline-none placeholder-gray-300 font-light"
        style={{ fontWeight: 400, letterSpacing: '0.01em' }}
      />
      <button
        type="submit"
        className="px-10 py-0 bg-purple-500 hover:bg-purple-600 text-white font-extrabold text-2xl rounded-none rounded-r-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300"
        style={{ fontFamily: 'inherit' }}
      >
        submit
      </button>
    </div>
  </form>
);

export default InputForm;
