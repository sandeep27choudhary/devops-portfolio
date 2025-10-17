# ACMA API Configuration

## API Endpoints

The ACMA Content Creator integrates with the following API endpoints:

### 1. Content Ideas Generation
```
POST /api/v1/ideas
Headers: X-API-Key: your-api-key
Body: {
  "domain": "Technology",
  "audience": "Young professionals",
  "context": "Optional additional context"
}
```

### 2. Content Drafting
```
POST /api/v1/draft
Headers: X-API-Key: your-api-key
Body: {
  "topic": "AI in Healthcare",
  "tone": "professional",
  "content_type": "blog-post",
  "key_points": "List of key points to cover"
}
```

### 3. Text Refinement
```
POST /api/v1/refine
Headers: X-API-Key: your-api-key
Body: {
  "text": "Text to refine",
  "refinement_type": "improve-clarity",
  "target_tone": "professional"
}
```

### 4. AI Chat
```
POST /api/v1/chat
Headers: X-API-Key: your-api-key
Body: {
  "message": "User message",
  "history": [{"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}]
}
```

### 5. Health Check
```
GET /api/v1/health
Headers: X-API-Key: your-api-key
```

## Expected Response Formats

### Ideas Response
```json
{
  "ideas": [
    {
      "title": "10 Ways AI is Transforming Healthcare",
      "description": "Explore how artificial intelligence is revolutionizing medical practices",
      "tags": ["AI", "Healthcare", "Technology"]
    }
  ]
}
```

### Draft Response
```json
{
  "content": "Generated content text here...",
  "title": "Optional title",
  "word_count": 500
}
```

### Refine Response
```json
{
  "refined_text": "Improved content text here...",
  "changes_made": ["Improved clarity", "Fixed grammar"]
}
```

### Chat Response
```json
{
  "response": "AI assistant response here...",
  "suggestions": ["Optional suggestions"]
}
```

## Demo Configuration

For testing without a real API server, you can modify `app.js` to use mock responses:

```javascript
// Add this method to ACMAContentCreator class
async makeApiRequest(endpoint, data) {
    // Mock responses for demo
    if (endpoint === '/api/v1/ideas') {
        return {
            ideas: [
                {
                    title: "The Future of Remote Work",
                    description: "How technology is reshaping the workplace",
                    tags: ["Remote Work", "Technology", "Future"]
                },
                {
                    title: "Sustainable Technology Solutions",
                    description: "Green tech innovations for a better planet",
                    tags: ["Sustainability", "Green Tech", "Innovation"]
                }
            ]
        };
    }
    
    if (endpoint === '/api/v1/draft') {
        return {
            content: `# ${data.topic}\n\nThis is a sample draft generated for your topic: "${data.topic}". The content would be tailored to your specified tone (${data.tone}) and content type (${data.content_type}).\n\nKey points to cover:\n${data.key_points || 'None specified'}\n\nThis is where the AI would generate comprehensive, engaging content based on your requirements.`
        };
    }
    
    if (endpoint === '/api/v1/refine') {
        return {
            refined_text: `Refined version of your text:\n\n${data.text}\n\n[This would be the improved version with better clarity, grammar, and tone adjustments.]`
        };
    }
    
    if (endpoint === '/api/v1/chat') {
        return {
            response: `I'd be happy to help you with content creation! You asked: "${data.message}". Here's my response with helpful tips and suggestions for your content strategy.`
        };
    }
    
    // Default mock response
    return { message: "Mock response for demo purposes" };
}
```

## CORS Configuration

If you're running the API server locally, ensure CORS is configured to allow requests from your frontend:

```python
# Example for Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])

# Example for Express.js
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
}));
```

## Environment Variables

For production deployment, consider using environment variables:

```javascript
// In app.js constructor
this.apiBaseUrl = process.env.ACMA_API_URL || 'http://localhost:8000';
this.apiKey = process.env.ACMA_API_KEY || 'your-api-key-here';
```
