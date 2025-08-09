import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Pure Frontend - No data processing
function TextToJsonApp() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Frontend-only: Just show loading and then display placeholder
    setIsLoading(true);
    
    // Simulate loading time for UI demonstration
    setTimeout(() => {
      setIsLoading(false);
      setShowOutput(true);
    }, 2000);
  };

  const copyToClipboard = () => {
    // Frontend-only: Just show success message
    alert('JSON copied to clipboard! (Frontend Demo)');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #000000, #581c87, #000000)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Floating sparkle */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '48px',
        opacity: 0.6,
        animation: 'float 3s ease-in-out infinite'
      }}>
        ✨
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-20px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Plain Text to JSON Converter
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '40px' }}>
          Transform your plain text into structured JSON format
        </p>
        
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Enter your text here..."
              rows={4}
              style={{
                width: '100%',
                maxWidth: '600px',
                borderRadius: '16px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #8b5cf6',
                fontSize: '16px',
                color: 'white',
                padding: '16px 60px 16px 16px',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: isLoading || !input.trim() ? '#666' : '#8b5cf6',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 12px',
                color: 'white',
                cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                fontSize: '14px'
              }}
            >
              {isLoading ? (
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid #ccc',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              ) : (
                '→'
              )}
            </button>
          </div>
          
          <p style={{ fontSize: '14px', opacity: 0.6 }}>
            Press Ctrl+Enter to submit quickly
          </p>
        </form>

        {showOutput && (
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', margin: 0 }}>Generated JSON:</h3>
              <button
                onClick={copyToClipboard}
                style={{
                  background: '#7c3aed',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                📋 Copy JSON
              </button>
            </div>
            <pre style={{
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              padding: '20px',
              fontSize: '14px',
              overflow: 'auto',
              maxHeight: '400px',
              whiteSpace: 'pre-wrap'
            }}>
{`{
  "message": "Frontend Demo - No Processing",
  "input_received": "${input}",
  "status": "Ready for backend integration",
  "note": "This is a UI demonstration only"
}`}
            </pre>
          </div>
        )}
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        opacity: 0.7
      }}>
        Text to JSON Converter
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<TextToJsonApp />);
