# Chatbot Test Questions

## Quick Test Script
Copy and paste these questions into the chatbot to test all features:

### 1. Greetings & Introduction
```
Hi
Hello there
Tell me about yourself
Who are you?
```

### 2. Skills & Expertise
```
What are your skills?
What technologies do you know?
Tell me about your AWS experience
Do you know Kubernetes?
What DevOps tools do you use?
What is your expertise in Terraform?
```

### 3. Work Experience
```
What is your work experience?
Where have you worked?
Tell me about your current job
What did you do at Xenonstack?
```

### 4. Education & Certifications
```
What certifications do you have?
Tell me about your education
Are you AWS certified?
What qualifications do you have?
```

### 5. YouTube & Videos
```
Do you have YouTube videos?
Show me your tutorials
What is your YouTube channel?
Tell me about DuhOps World
What videos have you created?
```

### 6. Blog & Articles
```
What blog posts do you have?
Show me articles about AWS
Do you write about Kubernetes?
What have you written about Terraform?
Tell me about your blog
```

### 7. Portfolio & Projects
```
What projects have you worked on?
Show me your portfolio
Tell me about your case studies
What have you built?
```

### 8. Specific Technologies
```
Tell me about AWS
What AWS services do you use?
Explain your Kubernetes experience
How do you use CI/CD?
What is your Terraform expertise?
Tell me about Docker
```

### 9. Contact Information
```
How can I contact you?
What is your email?
How do I get in touch?
Are you available for hire?
Where can I find your LinkedIn?
Can I see your resume?
```

### 10. Help & Support
```
What can you help me with?
How can you assist?
What information do you have?
Help me
```

### 11. Location & Availability
```
Where are you based?
What is your location?
Are you available for remote work?
```

### 12. Thank You
```
Thank you
Thanks for the info
I appreciate your help
```

## Expected Response Types

### ✅ Should Answer
- Any question about skills, experience, education
- Questions about YouTube channel and videos
- Questions about blog posts and articles
- Portfolio and project inquiries
- Contact and availability information
- Technology-specific questions (AWS, Kubernetes, etc.)

### ⚠️ Fallback Response
If a question doesn't match any pattern, the bot will provide a menu of topics it can help with.

## Testing Checklist

- [ ] Bot appears as floating button on all pages
- [ ] Chat window opens when button is clicked
- [ ] Bot sends welcome message immediately
- [ ] User can type and send messages
- [ ] Enter key sends messages
- [ ] Bot responds within 500ms
- [ ] Typing indicator shows while bot is "thinking"
- [ ] Messages have timestamps
- [ ] Chat history persists during session
- [ ] Links in responses are clickable
- [ ] Close button closes chat window
- [ ] Chat is responsive on mobile devices
- [ ] Dark mode styling looks correct
- [ ] No console errors in browser

## Sample Conversation Flow

```
User: Hi
Bot: Hello! 👋 I'm Sandeep's AI assistant. I can help you learn about:
     • Sandeep's experience and skills
     • DevOps and cloud infrastructure projects
     • YouTube videos and tutorials
     • Blog articles
     • How to get in touch
     What would you like to know?

User: What are your AWS skills?
Bot: Sandeep has extensive expertise in:
     ☁️ Cloud Services:
     AWS ECS, EC2, Lambda, S3, RDS, DynamoDB, CloudFront, Route 53
     ...

User: Show me YouTube videos
Bot: 📺 YouTube Channel: DuhOps World
     Subscribe here: https://www.youtube.com/@duhops
     Featured Videos:
     • Gemini CLI - AI command-line interface tutorial
       https://youtu.be/KRNAVpUbnZQ
     ...

User: How can I contact you?
Bot: 📧 Get in Touch with Sandeep:
     Email: csandeep497@gmail.com
     LinkedIn: https://linkedin.com/in/sandeep-k-choudhary
     ...

User: Thanks!
Bot: You're welcome! 😊
     Feel free to ask if you have any other questions...
```

## Common Issues & Solutions

### Issue: Bot doesn't recognize question
**Solution**: Add more pattern variations to the regex in `getResponse` function

### Issue: Response is generic
**Solution**: Add more specific pattern matching before the general patterns

### Issue: Links not working
**Solution**: Check that URLs in knowledge base are correct and properly formatted

### Issue: Mobile layout broken
**Solution**: Verify responsive classes in Tailwind and test on actual devices

## Performance Metrics

- **Response Time**: < 500ms (simulated thinking delay)
- **Message Load Time**: Instant (client-side only)
- **Bundle Size Impact**: ~15KB
- **Memory Usage**: Minimal (stores messages in component state)

## Browser Testing Matrix

Test on:
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Edge (desktop)

## Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Sufficient color contrast
- [ ] Focus indicators visible
- [ ] ARIA labels present

---

**Pro Tip**: Open browser DevTools Console while testing to catch any JavaScript errors or warnings.
