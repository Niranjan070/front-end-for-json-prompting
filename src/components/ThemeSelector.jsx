import React from 'react';

const themes = [
  { name: 'Default', bg: 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500' },
  { name: 'Dark', bg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700' },
  { name: 'Green', bg: 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500' },
  { name: 'Sunset', bg: 'bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500' },
  { name: 'Ocean', bg: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500' },
];

const ThemeSelector = ({ currentTheme, onChange }) => (
  <div className="flex gap-2 mb-6">
    {themes.map((theme) => (
      <button
        key={theme.name}
        className={`w-8 h-8 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${theme.bg} ${currentTheme === theme.bg ? 'ring-4 ring-indigo-400' : ''}`}
        title={theme.name}
        onClick={() => onChange(theme.bg)}
      />
    ))}
  </div>
);

export default ThemeSelector;
