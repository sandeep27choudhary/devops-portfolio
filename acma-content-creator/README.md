# ACMA Content Creator

A modern, cute AI-powered content creation application that integrates with the ACMA API for seamless content generation workflows.

## ✨ Features

- **🎯 Content Ideas Generation** - Generate creative content ideas based on domain and audience
- **📝 Content Drafting** - Create compelling content with customizable tone and style
- **✨ Text Refinement** - Polish and improve existing content with AI assistance
- **💬 AI Chat Interface** - Conversational AI assistant for content creation guidance
- **🎨 Modern UI Design** - Clean, responsive interface with smooth animations
- **⚡ Real-time API Integration** - Seamless connection to ACMA API endpoints

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- ACMA API server running on `http://localhost:8000`
- Valid API key for authentication

### Installation

1. **Clone or download** the application files
2. **Update API Key** in `app.js`:
   ```javascript
   this.apiKey = 'your-actual-api-key-here';
   ```
3. **Start ACMA API server** on `http://localhost:8000`
4. **Open** `index.html` in your web browser

### Development Setup

For local development with live reload:

```bash
# Install a simple HTTP server
npm install -g http-server

# Navigate to the project directory
cd acma-content-creator

# Start the server
http-server -p 3000 -o
```

## 🔧 Configuration

### API Configuration

Update the API configuration in `app.js`:

```javascript
class ACMAContentCreator {
    constructor() {
        this.apiBaseUrl = 'http://localhost:8000';  // Your API server URL
        this.apiKey = 'your-api-key-here';          // Your API key
        // ...
    }
}
```

### API Endpoints

The application integrates with these ACMA API endpoints:

- `POST /api/v1/ideas` - Generate content ideas
- `POST /api/v1/draft` - Create content drafts
- `POST /api/v1/refine` - Refine existing text
- `POST /api/v1/chat` - Conversational AI chat
- `GET /api/v1/health` - API health check

### Request Headers

All API requests include:
```
X-API-Key: your-api-key-here
Content-Type: application/json
```

## 📱 Usage

### Content Ideas Generation

1. Navigate to the **Content Ideas** tab
2. Enter your **Domain/Industry** (e.g., "Technology", "Fashion")
3. Specify your **Target Audience** (e.g., "Young professionals", "Parents")
4. Add optional **Additional Context**
5. Click **Generate Content Ideas**

### Content Drafting

1. Switch to the **Draft Content** tab
2. Enter your **Topic/Title**
3. Select the desired **Tone** (Professional, Casual, Friendly, etc.)
4. Choose **Content Type** (Blog Post, Social Media, Email, etc.)
5. Add **Key Points** to include
6. Click **Generate Draft**

### Text Refinement

1. Go to the **Refine Text** tab
2. Paste your existing content
3. Select **Refinement Type** (Improve Clarity, Fix Grammar, etc.)
4. Choose **Target Tone**
5. Click **Refine Text**

### AI Chat Assistant

1. Open the **AI Chat** tab
2. Type your question about content creation
3. Get instant AI-powered responses
4. Continue the conversation for detailed guidance

## 🎨 Customization

### Styling

The application uses Tailwind CSS for styling. Key customization areas:

- **Color Scheme**: Update gradient classes in HTML
- **Typography**: Modify font imports in the `<head>` section
- **Animations**: Adjust CSS animations in the `<style>` section
- **Layout**: Modify grid and flex classes for different layouts

### Branding

Update the branding elements:

```html
<!-- Header Logo -->
<div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
    <i class="fas fa-brain text-purple-600 text-xl"></i>
</div>

<!-- App Title -->
<h1 class="text-2xl font-bold">ACMA Content Creator</h1>
```

## 🔒 Security

- API keys are stored in client-side JavaScript (consider server-side proxy for production)
- All API requests use HTTPS in production
- Input validation and sanitization implemented
- Error handling prevents sensitive information exposure

## 🐛 Troubleshooting

### Common Issues

**API Connection Failed**
- Verify ACMA API server is running on `http://localhost:8000`
- Check API key is correct
- Ensure CORS is enabled on the API server

**Content Not Generating**
- Check browser console for error messages
- Verify API endpoints are responding correctly
- Ensure required fields are filled

**Styling Issues**
- Clear browser cache
- Verify Tailwind CSS is loading correctly
- Check for JavaScript errors in console

### Debug Mode

Enable debug logging by adding to `app.js`:

```javascript
// Add this to constructor
this.debug = true;

// Add debug logging to API requests
if (this.debug) {
    console.log('API Request:', endpoint, data);
    console.log('API Response:', response);
}
```

## 📦 File Structure

```
acma-content-creator/
├── index.html          # Main HTML file
├── app.js             # JavaScript application logic
└── README.md          # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support and questions:

- Check the troubleshooting section above
- Review browser console for error messages
- Verify API server configuration
- Test API endpoints independently

---

**Built with ❤️ for content creators**
