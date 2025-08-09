import React, { useState, FormEvent, ChangeEvent, MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';

// Pure Frontend - No data processing
const TextToJsonApp: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showOutput, setShowOutput] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
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

  const copyToClipboard = (): void => {
    // Frontend-only: Just show success message
    alert('JSON copied to clipboard! (Frontend Demo)');
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInput(e.target.value);
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>): void => {
    if (!isLoading && input.trim()) {
      const target = e.target as HTMLButtonElement;
      target.style.transform = 'translateY(-3px)';
      target.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.4)';
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>): void => {
    if (!isLoading && input.trim()) {
      const target = e.target as HTMLButtonElement;
      target.style.transform = 'translateY(-2px)';
      target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
    }
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
      {/* Header with Glassmorphism */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        padding: '20px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            margin: 0,
            color: 'white',
            letterSpacing: '1px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Text to JSON Converter
          </h1>
        </div>
      </header>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', marginTop: '100px' }}>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '40px' }}>
          Transform your plain text into structured JSON format
        </p>

        {/* Feature Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '16px 20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            minWidth: '150px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⚡</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Fast Processing</div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '16px 20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            minWidth: '150px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎯</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Accurate Results</div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '16px 20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            minWidth: '150px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔒</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Secure & Private</div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <textarea
              value={input}
              onChange={handleInputChange}
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
                padding: '16px',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                transition: 'border-color 0.3s ease',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            style={{
              background: isLoading || !input.trim() 
                ? 'linear-gradient(135deg, #4a5568, #2d3748)' 
                : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 32px',
              color: 'white',
              cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: isLoading || !input.trim() 
                ? 'none' 
                : '0 8px 25px rgba(139, 92, 246, 0.3)',
              transform: isLoading || !input.trim() ? 'none' : 'translateY(-2px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              margin: '0 auto',
              minWidth: '180px',
              justifyContent: 'center'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isLoading ? (
              <>
                <div style={{
                  width: '18px',
                  height: '18px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Processing...
              </>
            ) : (
              <span>Convert to JSON</span>
            )}
          </button>
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
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(<TextToJsonApp />);
