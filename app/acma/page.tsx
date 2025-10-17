"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Lightbulb, 
  Edit, 
  Wand2, 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Loader2,
  Copy,
  ExternalLink,
  Brain
} from "lucide-react"

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

interface Idea {
  title: string
  description: string
  tags: string[]
}

export default function ACMAContentCreatorPage() {
  const [activeTab, setActiveTab] = useState("ideas")
  const [isLoading, setIsLoading] = useState(false)
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI content creation assistant. I can help you with content strategy, writing tips, SEO optimization, and more. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [chatInput, setChatInput] = useState("")

  // Ideas state
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [ideasForm, setIdeasForm] = useState({
    domain: "",
    audience: "",
    context: ""
  })

  // Draft state
  const [draftContent, setDraftContent] = useState("")
  const [draftForm, setDraftForm] = useState({
    topic: "",
    tone: "professional",
    contentType: "blog-post",
    keyPoints: ""
  })

  // Refine state
  const [refinedContent, setRefinedContent] = useState("")
  const [refineForm, setRefineForm] = useState({
    text: "",
    refinementType: "improve-clarity",
    targetTone: "professional"
  })

  const generateIdeas = async () => {
    if (!ideasForm.domain || !ideasForm.audience) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockIdeas: Idea[] = [
        {
          title: "The Future of Remote Work",
          description: "How technology is reshaping the workplace and what it means for businesses",
          tags: ["Remote Work", "Technology", "Future"]
        },
        {
          title: "Sustainable Technology Solutions",
          description: "Green tech innovations that are making a positive impact on our planet",
          tags: ["Sustainability", "Green Tech", "Innovation"]
        },
        {
          title: "AI-Powered Personalization",
          description: "How artificial intelligence is revolutionizing customer experiences",
          tags: ["AI", "Personalization", "Customer Experience"]
        },
        {
          title: "Cybersecurity Best Practices",
          description: "Essential security measures every organization should implement",
          tags: ["Cybersecurity", "Security", "Best Practices"]
        }
      ]
      setIdeas(mockIdeas)
      setIsLoading(false)
    }, 1500)
  }

  const generateDraft = async () => {
    if (!draftForm.topic) return

    setIsLoading(true)
    
    setTimeout(() => {
      const mockDraft = `# ${draftForm.topic}

## Introduction

In today's rapidly evolving landscape, ${draftForm.topic.toLowerCase()} has become a critical topic that demands our attention. This comprehensive guide explores the key aspects and implications of this important subject.

## Key Points

${draftForm.keyPoints ? draftForm.keyPoints.split('\n').map(point => `- ${point.trim()}`).join('\n') : '- Main point 1\n- Main point 2\n- Main point 3'}

## Analysis

Understanding ${draftForm.topic.toLowerCase()} requires a deep dive into its various components. The ${draftForm.tone} approach we're taking here ensures that readers can grasp the concepts effectively.

## Conclusion

As we've explored, ${draftForm.topic.toLowerCase()} presents both opportunities and challenges. By staying informed and adapting to changes, we can navigate this landscape successfully.

---

*This content was generated with a ${draftForm.tone} tone for ${draftForm.contentType.replace('-', ' ')} format.*`
      
      setDraftContent(mockDraft)
      setIsLoading(false)
    }, 1500)
  }

  const refineText = async () => {
    if (!refineForm.text) return

    setIsLoading(true)
    
    setTimeout(() => {
      const mockRefined = `**Refined Version:**

${refineForm.text}

**Improvements Made:**
- Enhanced clarity and readability
- Improved grammar and sentence structure
- Adjusted tone to be more ${refineForm.targetTone}
- Better flow and organization
- More engaging language

**Summary:** The refined text maintains the original meaning while improving overall quality and readability. The content now has a more ${refineForm.targetTone} tone and better structure.`
      
      setRefinedContent(mockRefined)
      setIsLoading(false)
    }, 1500)
  }

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: chatInput,
      role: 'user',
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage])
    const currentInput = chatInput
    setChatInput("")
    setIsLoading(true)

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I'd be happy to help you with content creation! You asked: "${currentInput}". Here are some specific recommendations:

1. **Research First**: Always start with thorough research on your topic
2. **Know Your Audience**: Tailor your content to your specific audience
3. **Use Clear Structure**: Organize your content with clear headings and sections
4. **Include Examples**: Use real-world examples to illustrate your points
5. **Call to Action**: Always include a clear next step for your readers

Would you like me to elaborate on any of these points?`,
        role: 'assistant',
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ACMA Content Creator</h1>
            <p className="text-muted-foreground">AI-Powered Content Generation</p>
          </div>
        </div>
        <Badge variant="secondary" className="mb-4">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
          Demo Mode
        </Badge>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ideas" className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Content Ideas
          </TabsTrigger>
          <TabsTrigger value="draft" className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Draft Content
          </TabsTrigger>
          <TabsTrigger value="refine" className="flex items-center gap-2">
            <Wand2 className="h-4 w-4" />
            Refine Text
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            AI Chat
          </TabsTrigger>
        </TabsList>

        {/* Content Ideas Tab */}
        <TabsContent value="ideas" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-purple-600" />
                Generate Content Ideas
              </CardTitle>
              <CardDescription>
                Tell us about your domain and target audience to get creative content suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Domain/Industry</label>
                  <Input
                    placeholder="e.g., Technology, Fashion, Food, Health..."
                    value={ideasForm.domain}
                    onChange={(e) => setIdeasForm(prev => ({ ...prev, domain: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <Input
                    placeholder="e.g., Young professionals, Parents, Students..."
                    value={ideasForm.audience}
                    onChange={(e) => setIdeasForm(prev => ({ ...prev, audience: e.target.value }))}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Additional Context (Optional)</label>
                <Textarea
                  placeholder="Any specific requirements, goals, or constraints for your content..."
                  value={ideasForm.context}
                  onChange={(e) => setIdeasForm(prev => ({ ...prev, context: e.target.value }))}
                  rows={3}
                />
              </div>

              <Button 
                onClick={generateIdeas} 
                disabled={!ideasForm.domain || !ideasForm.audience || isLoading}
                className="w-full"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Lightbulb className="h-4 w-4 mr-2" />}
                Generate Content Ideas
              </Button>

              {ideas.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">✨ Generated Content Ideas</h3>
                  <div className="grid gap-4">
                    {ideas.map((idea, index) => (
                      <Card key={index} className="border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-2">{idea.title}</h4>
                              <p className="text-muted-foreground text-sm mb-2">{idea.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {idea.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Draft Content Tab */}
        <TabsContent value="draft" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-5 w-5 text-blue-600" />
                Draft Content
              </CardTitle>
              <CardDescription>
                Create compelling content with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Topic/Title</label>
                  <Input
                    placeholder="What's your content about?"
                    value={draftForm.topic}
                    onChange={(e) => setDraftForm(prev => ({ ...prev, topic: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tone</label>
                  <Select value={draftForm.tone} onValueChange={(value) => setDraftForm(prev => ({ ...prev, tone: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Content Type</label>
                <Select value={draftForm.contentType} onValueChange={(value) => setDraftForm(prev => ({ ...prev, contentType: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog-post">Blog Post</SelectItem>
                    <SelectItem value="social-media">Social Media Post</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="product-description">Product Description</SelectItem>
                    <SelectItem value="marketing-copy">Marketing Copy</SelectItem>
                    <SelectItem value="article">Article</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Key Points to Include</label>
                <Textarea
                  placeholder="List the main points you want to cover in your content..."
                  value={draftForm.keyPoints}
                  onChange={(e) => setDraftForm(prev => ({ ...prev, keyPoints: e.target.value }))}
                  rows={4}
                />
              </div>

              <Button 
                onClick={generateDraft} 
                disabled={!draftForm.topic || isLoading}
                className="w-full"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                Generate Draft
              </Button>

              {draftContent && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">📝 Generated Content</h3>
                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="prose max-w-none whitespace-pre-wrap">{draftContent}</div>
                    </CardContent>
                  </Card>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" onClick={() => copyToClipboard(draftContent)}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" onClick={() => {
                      setRefineForm(prev => ({ ...prev, text: draftContent }))
                      setActiveTab("refine")
                    }}>
                      <Wand2 className="h-4 w-4 mr-2" />
                      Refine
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Refine Text Tab */}
        <TabsContent value="refine" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-green-600" />
                Refine Text
              </CardTitle>
              <CardDescription>
                Polish and improve your content with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Text to Refine</label>
                <Textarea
                  placeholder="Paste your content here to refine and improve it..."
                  value={refineForm.text}
                  onChange={(e) => setRefineForm(prev => ({ ...prev, text: e.target.value }))}
                  rows={8}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Refinement Type</label>
                  <Select value={refineForm.refinementType} onValueChange={(value) => setRefineForm(prev => ({ ...prev, refinementType: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="improve-clarity">Improve Clarity</SelectItem>
                      <SelectItem value="enhance-tone">Enhance Tone</SelectItem>
                      <SelectItem value="fix-grammar">Fix Grammar</SelectItem>
                      <SelectItem value="make-concise">Make More Concise</SelectItem>
                      <SelectItem value="expand-details">Expand Details</SelectItem>
                      <SelectItem value="optimize-seo">Optimize for SEO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Tone</label>
                  <Select value={refineForm.targetTone} onValueChange={(value) => setRefineForm(prev => ({ ...prev, targetTone: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={refineText} 
                disabled={!refineForm.text || isLoading}
                className="w-full"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Wand2 className="h-4 w-4 mr-2" />}
                Refine Text
              </Button>

              {refinedContent && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">✨ Refined Content</h3>
                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <div className="prose max-w-none whitespace-pre-wrap">{refinedContent}</div>
                    </CardContent>
                  </Card>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" onClick={() => copyToClipboard(refinedContent)}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Chat Tab */}
        <TabsContent value="chat" className="mt-6">
          <div className="flex flex-col h-[600px] min-h-[500px]">
            <Card className="flex-1 flex flex-col">
              <CardHeader className="border-b flex-shrink-0">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                  AI Assistant
                </CardTitle>
                <CardDescription>
                  Ask me anything about content creation!
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0 min-h-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 break-words ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>

                      {message.role === 'user' && (
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-muted rounded-lg px-4 py-2">
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="border-t p-4 flex-shrink-0">
                  <div className="flex gap-2">
                    <Textarea
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask me anything about content creation..."
                      className="flex-1 min-h-[60px] max-h-[120px] resize-none"
                      disabled={isLoading}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          sendChatMessage()
                        }
                      }}
                    />
                    <Button
                      onClick={sendChatMessage}
                      disabled={!chatInput.trim() || isLoading}
                      size="lg"
                      className="px-4 self-end"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
