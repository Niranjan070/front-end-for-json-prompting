// API service for converting text to JSON
export const convertTextToJson = async (text) => {
  /* 
  TODO: Replace this mock implementation with actual API call
  
  Example implementation:
  const response = await fetch('https://your-backend-api.com/api/convert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-api-key' // if required
    },
    body: JSON.stringify({ 
      text: text,
      format: 'json',
      options: {
        extractEntities: true,
        includeMetadata: true
      }
    })
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
  */
  
  // Mock API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock JSON response
  const mockJsonOutput = {
    "input": {
      "originalText": text,
      "processedAt": new Date().toISOString(),
      "wordCount": text.split(' ').length,
      "characterCount": text.length
    },
    "analysis": {
      "language": "en",
      "sentiment": "neutral",
      "confidence": 0.92,
      "readabilityScore": 8.5
    },
    "extractedData": {
      "entities": [
        {
          "type": "PERSON",
          "text": text.match(/\b[A-Z][a-z]+\b/g)?.[0] || "Unknown",
          "confidence": 0.95
        }
      ],
      "keywords": text.split(' ')
        .filter(word => word.length > 4)
        .slice(0, 5)
        .map(word => word.toLowerCase()),
      "topics": ["general", "text-analysis"]
    },
    "metadata": {
      "version": "1.0.0",
      "processingTimeMs": 2000,
      "model": "text-to-json-v1",
      "features": [
        "entity-extraction",
        "sentiment-analysis", 
        "keyword-extraction"
      ]
    }
  };
  
  return mockJsonOutput;
};
