import React from 'react';

const OutputDisplay = ({ output, onCopy }) => (
  <div className="relative mt-8 bg-black/80 border-2 border-violet-400 rounded-2xl max-w-2xl w-full shadow-xl overflow-x-auto px-8 py-6">
    <button
      onClick={onCopy}
      className="absolute top-4 right-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-1 rounded-lg text-sm shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300"
      title="Copy to clipboard"
    >
      Copy
    </button>
    <pre className="text-lg md:text-xl text-gray-100 whitespace-pre-wrap font-mono">
      {output}
    </pre>
  </div>
);

export default OutputDisplay;
