import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';
// import ThemeSelector from './components/ThemeSelector';

const mockApiCall = (prompt) => {
  // Simulate API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`{\n  "prompt": "${prompt}",\n  "result": "This is a mock JSON response."\n}`);
    }, 1000);
  });
};


function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  // const [theme, setTheme] = useState('bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500');

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOutput(true);
    setOutput(''); // Show output field, but no data
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black animate-glow">
  {/* Removed floating sparkle icon */}
      <div className="relative z-20 w-full flex flex-col items-center px-4">
        <Header />
    <div className="my-8" />
    <InputForm onSubmit={handleSubmit} value={input} onChange={handleChange} />
        {showOutput && (
          <OutputDisplay output={output} onCopy={handleCopy} />
        )}
      </div>
  {/* Removed uizard branding at bottom */}
    </div>
  );
}

export default App;
