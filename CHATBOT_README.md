# AI Chatbot Documentation

## Overview
Your DevOps portfolio website now includes an intelligent AI chatbot that can answer questions about your experience, skills, YouTube videos, blog posts, portfolio projects, and contact information.

## Features

### 🤖 Smart Knowledge Base
The chatbot has comprehensive knowledge about:
- **Your Profile**: Name, title, experience, education, and certifications
- **Technical Skills**: AWS, Kubernetes, Docker, Terraform, CI/CD tools
- **Work Experience**: Current and previous positions at 2070health and Xenonstack
- **YouTube Channel**: Links to DuhOps World channel, video tutorials, and shorts
- **Blog Articles**: All blog posts on AWS, Kubernetes, Terraform, and DevOps
- **Portfolio Projects**: Featured projects and case studies
- **Contact Information**: Email, LinkedIn, GitHub, and availability

### 💬 Natural Language Understanding
The chatbot uses pattern matching to understand questions like:
- "What are your AWS skills?"
- "Tell me about your experience"
- "Show me YouTube videos"
- "What blog articles do you have?"
- "How can I contact you?"
- "What projects have you worked on?"

### 🎨 Modern UI
- Floating chat button (bottom-right corner)
- Clean, responsive chat interface
- User/bot message distinction
- Typing indicators
- Timestamps for messages
- Dark mode compatible

## How It Works

### User Interface
1. A floating chat button appears on all pages in the bottom-right corner
2. Click the button to open the chat window
3. Type your question and press Enter or click Send
4. The bot responds instantly with relevant information
5. Close the chat window with the X button

### Message Flow
```
User types question → Pattern matching → Knowledge base lookup → Response generation → Display
```

## Customization

### Updating Knowledge Base
To update the chatbot's knowledge, edit `/components/chatbot.tsx`:

```typescript
const knowledgeBase = {
  owner: {
    // Update your personal info here
    name: "Your Name",
    email: "your@email.com",
    // ...
  },
  skills: {
    // Add/remove skills
    cloud: ["AWS", "GCP", "Azure"],
    // ...
  },
  youtube: {
    // Update YouTube info
    channel: "https://youtube.com/@yourchannel",
    videos: [
      { title: "...", url: "...", description: "..." }
    ]
  },
  // ... other sections
}
```

### Adding New Question Patterns
To add support for new types of questions, add new pattern matching in the `getResponse` function:

```typescript
// Example: Adding support for questions about certifications
if (message.match(/certification|certified|cert|badge/)) {
  return `I have the following certifications:
• AWS Solutions Architect Associate
• Google Cloud Platform Fundamentals
...`
}
```

### Styling Customization
The chatbot uses Tailwind CSS and your existing design system. To customize:

1. **Chat Button**: Edit the floating button styles
2. **Chat Window**: Modify the container dimensions/colors
3. **Messages**: Change message bubble styles
4. **Colors**: Update bg-primary, text-primary, etc.

## Advanced Features (Future Enhancements)

### OpenAI Integration (Optional)
To make the chatbot even smarter with GPT, you can integrate OpenAI API:

```typescript
// Add to your .env.local
OPENAI_API_KEY=your_api_key_here

// Update the getResponse function to call OpenAI
const response = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message: userMessage })
})
```

### Analytics Integration
Track chatbot usage:
```typescript
// Add analytics when user sends a message
analytics.track('chatbot_message', {
  question: userMessage,
  category: determineCategory(userMessage)
})
```

### Conversation History
Store conversation in localStorage:
```typescript
useEffect(() => {
  localStorage.setItem('chatHistory', JSON.stringify(messages))
}, [messages])
```

## Testing the Chatbot

Try these sample questions:
- "Hello" - Get a greeting and menu
- "What are your skills?" - See technical expertise
- "Tell me about your experience" - Learn about work history
- "Show me YouTube videos" - Get video links
- "What blog posts do you have?" - See articles
- "How can I contact you?" - Get contact info
- "What AWS services do you know?" - AWS expertise
- "Tell me about Kubernetes" - Container orchestration info

## Troubleshooting

### Chatbot Not Appearing
1. Check that the import is correct in `app/layout.tsx`
2. Ensure the component is included in the JSX
3. Clear your browser cache and reload

### Messages Not Displaying
1. Check browser console for errors
2. Verify the pattern matching in `getResponse` function
3. Ensure knowledge base is properly formatted

### Styling Issues
1. Make sure Tailwind CSS is properly configured
2. Check for conflicting CSS classes
3. Verify dark mode compatibility

## Performance

- **Instant Responses**: No API calls, all processing happens client-side
- **Lightweight**: ~15KB additional bundle size
- **No Dependencies**: Uses only React hooks and existing UI components
- **Mobile Friendly**: Responsive design works on all screen sizes

## Future Enhancements Ideas

1. **Multi-language Support**: Add responses in multiple languages
2. **Voice Input**: Add speech recognition
3. **Suggested Questions**: Show quick-reply buttons
4. **Search Integration**: Search blog posts and portfolio
5. **Contact Form**: Direct integration with contact form
6. **Calendar Booking**: Schedule consultations directly
7. **File Sharing**: Share resume/documents
8. **Real-time Typing**: Show typing indicators

## Files Modified

- `/components/chatbot.tsx` - Main chatbot component (NEW)
- `/app/layout.tsx` - Added chatbot to layout

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## License

This chatbot is part of your portfolio website and follows the same license as your main project.

---

**Need Help?** The chatbot code is well-commented and easy to modify. Start with the `knowledgeBase` object for content updates and the `getResponse` function for behavior changes.
