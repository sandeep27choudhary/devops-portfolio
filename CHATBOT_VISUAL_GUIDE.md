# AI Chatbot Visual Guide

## Component Overview

### 1. Floating Chat Button (Closed State)
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                 ┌───┐
│                                 │ 💬 │  ← Floating button
│                                 └───┘    (bottom-right corner)
└─────────────────────────────────────┘
```
- **Position**: Fixed, bottom-right corner
- **Color**: Primary color (adapts to theme)
- **Icon**: MessageCircle (speech bubble)
- **Hover effect**: Scales to 110%

### 2. Chat Window (Open State)
```
┌─────────────────────────────────────┐
│ 🤖 DevOps Assistant        Ask me! ✕│  ← Header
├─────────────────────────────────────┤
│                                     │
│  🤖  Hello! I'm Sandeep's AI        │  ← Bot message
│      assistant. I can help...      │    (left-aligned)
│      10:30 AM                       │
│                                     │
│              What are your skills?  │  ← User message
│              10:31 AM            👤 │    (right-aligned)
│                                     │
│  🤖  Sandeep has extensive...       │  ← Bot response
│      - AWS Cloud Infrastructure    │
│      - Kubernetes & Containers      │
│      10:31 AM                       │
│                                     │
│  🤖  ● ● ●                          │  ← Typing indicator
│                                     │
├─────────────────────────────────────┤
│ [Type message here...]        [📤]  │  ← Input field
└─────────────────────────────────────┘
```

### 3. Detailed Layout

#### Header Section
```
┌─────────────────────────────────────┐
│ 🤖 DevOps Assistant        [   ✕  ] │
│    Ask me anything!                 │
└─────────────────────────────────────┘
```
- **Background**: Primary color
- **Text**: Primary-foreground color
- **Bot icon**: In circle with subtle background
- **Close button**: Top-right with hover effect

#### Messages Section
```
Bot Message (Left-aligned):
┌──────────────────────────┐
│ 🤖 [Message text here]   │
│    [Timestamp]           │
└──────────────────────────┘

User Message (Right-aligned):
        ┌──────────────────────────┐
        │ [Message text here]   👤 │
        │ [Timestamp]              │
        └──────────────────────────┘
```
- **Bot messages**: Gray background, left-aligned
- **User messages**: Primary color, right-aligned
- **Icons**: Bot icon (🤖) and User icon (👤)
- **Timestamps**: Small, subtle text

#### Input Section
```
┌─────────────────────────────────────┐
│ [Type your message here...  ] [📤] │
└─────────────────────────────────────┘
```
- **Input field**: Stretches full width
- **Send button**: Blue/primary color
- **Enter key**: Also sends message

## Color Scheme

### Light Mode
```css
Background:      #FFFFFF (white)
Text:           #000000 (black)
Bot Messages:   #F3F4F6 (gray-100)
User Messages:  [Primary color]
Header:         [Primary color]
```

### Dark Mode
```css
Background:      #0A0A0A (near-black)
Text:           #FFFFFF (white)
Bot Messages:   #1F2937 (gray-800)
User Messages:  [Primary color]
Header:         [Primary color]
```

## Size Specifications

```
Chat Window:
- Width: 380px (fixed)
- Height: 600px (max-height: 80vh)
- Border radius: 8px
- Shadow: 2xl

Chat Button:
- Size: 56x56px (14 x 14 in Tailwind)
- Border radius: Full (circle)
- Icon: 24x24px (6 x 6 in Tailwind)

Messages:
- Max width: 75% of chat window
- Padding: 16px (4 in Tailwind)
- Border radius: 8px

Avatar Icons:
- Size: 32x32px (8 x 8 in Tailwind)
- Border radius: Full (circle)
```

## Animation Effects

### 1. Chat Button Hover
```
Normal:    scale(1.0)
Hover:     scale(1.1)
Transition: 200ms ease
```

### 2. Typing Indicator
```
● → animate-bounce (delay: 0ms)
● → animate-bounce (delay: 150ms)
● → animate-bounce (delay: 300ms)
```

### 3. Message Entry
```
Fade in + slide up animation
Duration: 300ms
```

### 4. Window Open/Close
```
Fade in/out: opacity 0 → 1
Scale: 95% → 100%
Duration: 300ms
```

## Responsive Behavior

### Desktop (≥768px)
```
Chat Window: 380px x 600px
Position: Fixed bottom-right (24px from edges)
Messages: Full features enabled
```

### Tablet (≥640px, <768px)
```
Chat Window: 360px x 550px
Position: Fixed bottom-right (16px from edges)
Font size: Slightly reduced
```

### Mobile (<640px)
```
Chat Window: 90% width x 80vh height
Position: Centered or full-screen option
Touch-optimized: Larger tap targets
Keyboard aware: Adjusts position when typing
```

## Message Formatting

### Text Formatting
```
**Bold text** → Bold text
• Bullet point
  - Sub-bullet
[Link text](url) → Clickable link
```

### Multi-line Support
```
Line 1
Line 2
Line 3

Paragraph 2
```

### Lists
```
**Section Title:**
• Item 1
• Item 2
• Item 3
```

## User Interaction Flow

```
1. User sees floating button
   ↓
2. Clicks button
   ↓
3. Chat window opens with welcome message
   ↓
4. User types question
   ↓
5. User presses Enter or clicks Send
   ↓
6. Message appears (user side)
   ↓
7. Typing indicator shows (500ms)
   ↓
8. Bot response appears
   ↓
9. User can continue conversation
   ↓
10. User clicks X to close
```

## Accessibility Features

### Keyboard Navigation
```
Tab:         Focus on input field
Enter:       Send message
Escape:      Close chat window
```

### Screen Reader
```
aria-label="Open chat"
aria-label="Close chat"
role="button"
```

### Visual Indicators
```
Focus ring on input field
Hover states on buttons
Color contrast: WCAG AA compliant
```

## Sample Conversation Layout

```
┌─────────────────────────────────────┐
│ 🤖 DevOps Assistant        Ask me! ✕│
├─────────────────────────────────────┤
│                                     │
│  🤖  Hello! 👋 I'm Sandeep's AI     │
│      assistant. I can help you     │
│      learn about:                  │
│      • Sandeep's experience        │
│      • YouTube videos              │
│      • Blog articles               │
│      What would you like to know?  │
│      10:30 AM                      │
│                                     │
│              Hi! What are your     │
│              AWS skills?        👤 │
│              10:31 AM              │
│                                     │
│  🤖  Sandeep has extensive AWS     │
│      expertise including:          │
│                                     │
│      ☁️ Cloud Services:            │
│      AWS ECS, EC2, Lambda, S3...   │
│                                     │
│      He's also AWS Solutions       │
│      Architect Associate certified!│
│      10:31 AM                      │
│                                     │
│              Show me YouTube       │
│              videos             👤 │
│              10:32 AM              │
│                                     │
│  🤖  📺 YouTube Channel:            │
│      DuhOps World                  │
│                                     │
│      Subscribe: youtube.com/@duh...│
│                                     │
│      Featured Videos:              │
│      • Gemini CLI                  │
│        youtu.be/KRNAVpUbnZQ        │
│      • AWS Architect AI            │
│        youtu.be/YJyYyBDcGlg        │
│      10:32 AM                      │
│                                     │
├─────────────────────────────────────┤
│ Ask me anything...            [📤] │
└─────────────────────────────────────┘
```

## Mobile View Adjustments

```
┌──────────────────────────┐
│ 🤖 DevOps Asst      [✕] │  ← Compact header
├──────────────────────────┤
│  🤖  Hello! I'm AI...    │  ← Smaller font
│      10:30              │  ← Shorter timestamp
│                          │
│      What are your    👤 │  ← Full width
│      skills?             │    messages
│      10:31              │
├──────────────────────────┤
│ [Type...]          [📤] │  ← Touch-friendly
└──────────────────────────┘    input
```

---

**Design Philosophy**: Clean, minimal, professional while being friendly and approachable. The chatbot should feel like a helpful assistant, not a hindrance.
