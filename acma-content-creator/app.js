// ACMA Content Creator - JavaScript Application
class ACMAContentCreator {
    constructor() {
        this.apiBaseUrl = 'http://localhost:8000';
        this.apiKey = 'your-api-key-here'; // Replace with actual API key
        this.currentTab = 'ideas';
        this.chatHistory = [];
        this.demoMode = true; // Set to false for production
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkApiConnection();
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabName = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.showTab(tabName);
            });
        });

        // Form submissions
        document.getElementById('ideas-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateIdeas();
        });

        document.getElementById('draft-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateDraft();
        });

        document.getElementById('refine-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.refineText();
        });

        document.getElementById('chat-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendChatMessage();
        });

        // Enter key for chat
        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendChatMessage();
            }
        });
    }

    async checkApiConnection() {
        if (this.demoMode) {
            this.updateConnectionStatus('demo');
            return;
        }

        try {
            const response = await fetch(`${this.apiBaseUrl}/api/v1/health`, {
                method: 'GET',
                headers: {
                    'X-API-Key': this.apiKey,
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                this.updateConnectionStatus(true);
            } else {
                this.updateConnectionStatus(false);
            }
        } catch (error) {
            console.error('API connection failed:', error);
            this.updateConnectionStatus(false);
        }
    }

    updateConnectionStatus(status) {
        const statusElement = document.querySelector('.bg-green-400, .bg-red-400, .bg-yellow-400');
        const statusText = document.querySelector('.text-sm');
        
        if (status === 'demo') {
            statusElement.className = 'w-2 h-2 bg-yellow-400 rounded-full';
            statusText.textContent = 'Demo Mode';
        } else if (status === true) {
            statusElement.className = 'w-2 h-2 bg-green-400 rounded-full';
            statusText.textContent = 'API Connected';
        } else {
            statusElement.className = 'w-2 h-2 bg-red-400 rounded-full';
            statusText.textContent = 'API Disconnected';
        }
    }

    showTab(tabName) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });

        // Remove active class from all tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.className = btn.className.replace('bg-purple-600 text-white', 'text-gray-600 hover:bg-gray-100');
        });

        // Show selected tab content
        document.getElementById(`content-${tabName}`).classList.remove('hidden');

        // Add active class to selected tab button
        const activeBtn = document.getElementById(`tab-${tabName}`);
        activeBtn.className = activeBtn.className.replace('text-gray-600 hover:bg-gray-100', 'bg-purple-600 text-white');

        this.currentTab = tabName;
    }

    async makeApiRequest(endpoint, data) {
        // Demo mode with mock responses
        if (this.demoMode) {
            return this.getMockResponse(endpoint, data);
        }

        try {
            const response = await fetch(`${this.apiBaseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'X-API-Key': this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    getMockResponse(endpoint, data) {
        // Simulate API delay
        return new Promise((resolve) => {
            setTimeout(() => {
                if (endpoint === '/api/v1/ideas') {
                    resolve({
                        ideas: [
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
                    });
                }
                
                if (endpoint === '/api/v1/draft') {
                    resolve({
                        content: `# ${data.topic}\n\n## Introduction\n\nIn today's rapidly evolving landscape, ${data.topic.toLowerCase()} has become a critical topic that demands our attention. This comprehensive guide explores the key aspects and implications of this important subject.\n\n## Key Points\n\n${data.key_points ? data.key_points.split('\n').map(point => `- ${point.trim()}`).join('\n') : '- Main point 1\n- Main point 2\n- Main point 3'}\n\n## Analysis\n\nUnderstanding ${data.topic.toLowerCase()} requires a deep dive into its various components. The ${data.tone} approach we're taking here ensures that readers can grasp the concepts effectively.\n\n## Conclusion\n\nAs we've explored, ${data.topic.toLowerCase()} presents both opportunities and challenges. By staying informed and adapting to changes, we can navigate this landscape successfully.\n\n---\n\n*This content was generated with a ${data.tone} tone for ${data.content_type.replace('-', ' ')} format.*`,
                        title: data.topic,
                        word_count: 250
                    });
                }
                
                if (endpoint === '/api/v1/refine') {
                    resolve({
                        refined_text: `**Refined Version:**\n\n${data.text}\n\n**Improvements Made:**\n- Enhanced clarity and readability\n- Improved grammar and sentence structure\n- Adjusted tone to be more ${data.target_tone}\n- Better flow and organization\n- More engaging language\n\n**Summary:** The refined text maintains the original meaning while improving overall quality and readability. The content now has a more ${data.target_tone} tone and better structure.`,
                        changes_made: ["Improved clarity", "Enhanced tone", "Better structure"]
                    });
                }
                
                if (endpoint === '/api/v1/chat') {
                    const responses = [
                        "That's a great question! Let me help you with that. Based on your content creation needs, I'd recommend focusing on clarity and engagement.",
                        "I'd be happy to assist you with content strategy! Here are some key tips: know your audience, maintain consistency, and always provide value.",
                        "Excellent point! For effective content creation, consider these factors: research your topic thoroughly, use compelling headlines, and include clear calls-to-action.",
                        "That's an interesting challenge! Let me suggest some approaches: start with a strong hook, use storytelling techniques, and always end with actionable insights."
                    ];
                    
                    resolve({
                        response: responses[Math.floor(Math.random() * responses.length)] + `\n\nRegarding "${data.message}", here are some specific recommendations:\n\n1. **Research First**: Always start with thorough research on your topic\n2. **Know Your Audience**: Tailor your content to your specific audience\n3. **Use Clear Structure**: Organize your content with clear headings and sections\n4. **Include Examples**: Use real-world examples to illustrate your points\n5. **Call to Action**: Always include a clear next step for your readers\n\nWould you like me to elaborate on any of these points?`,
                        suggestions: ["Content structure", "Audience targeting", "Engagement techniques"]
                    });
                }
                
                // Default mock response
                resolve({ message: "Mock response for demo purposes" });
            }, 1500); // 1.5 second delay to simulate API response time
        });
    }

    showLoading(elementId) {
        document.getElementById(elementId).classList.remove('hidden');
    }

    hideLoading(elementId) {
        document.getElementById(elementId).classList.add('hidden');
    }

    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        errorDiv.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-exclamation-triangle"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        document.body.appendChild(errorDiv);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 5000);
    }

    showSuccess(message) {
        // Create success notification
        const successDiv = document.createElement('div');
        successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        successDiv.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        document.body.appendChild(successDiv);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (successDiv.parentElement) {
                successDiv.remove();
            }
        }, 3000);
    }

    async generateIdeas() {
        const domain = document.getElementById('domain').value.trim();
        const audience = document.getElementById('audience').value.trim();
        const context = document.getElementById('context').value.trim();

        if (!domain || !audience) {
            this.showError('Please fill in both Domain and Target Audience fields');
            return;
        }

        this.showLoading('ideas-loading');
        this.hideResults('ideas-results');

        try {
            const data = {
                domain: domain,
                audience: audience,
                context: context || undefined
            };

            const response = await this.makeApiRequest('/api/v1/ideas', data);
            this.displayIdeas(response.ideas || response);
        } catch (error) {
            this.showError('Failed to generate ideas. Please try again.');
            console.error('Ideas generation error:', error);
        } finally {
            this.hideLoading('ideas-loading');
        }
    }

    displayIdeas(ideas) {
        const resultsDiv = document.getElementById('ideas-results');
        const ideasList = document.getElementById('ideas-list');
        
        ideasList.innerHTML = '';

        if (Array.isArray(ideas)) {
            ideas.forEach((idea, index) => {
                const ideaCard = document.createElement('div');
                ideaCard.className = 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow';
                ideaCard.innerHTML = `
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            ${index + 1}
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-gray-800 mb-2">${idea.title || idea}</h4>
                            ${idea.description ? `<p class="text-gray-600 text-sm">${idea.description}</p>` : ''}
                            ${idea.tags ? `<div class="mt-2 flex flex-wrap gap-1">
                                ${idea.tags.map(tag => `<span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">${tag}</span>`).join('')}
                            </div>` : ''}
                        </div>
                    </div>
                `;
                ideasList.appendChild(ideaCard);
            });
        } else {
            // Handle single idea or different format
            const ideaCard = document.createElement('div');
            ideaCard.className = 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4';
            ideaCard.innerHTML = `
                <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        💡
                    </div>
                    <div class="flex-1">
                        <h4 class="font-semibold text-gray-800 mb-2">Generated Idea</h4>
                        <p class="text-gray-600">${ideas}</p>
                    </div>
                </div>
            `;
            ideasList.appendChild(ideaCard);
        }

        resultsDiv.classList.remove('hidden');
        this.showSuccess('Content ideas generated successfully!');
    }

    async generateDraft() {
        const topic = document.getElementById('topic').value.trim();
        const tone = document.getElementById('tone').value;
        const contentType = document.getElementById('content-type').value;
        const keyPoints = document.getElementById('key-points').value.trim();

        if (!topic) {
            this.showError('Please enter a topic for your content');
            return;
        }

        this.showLoading('draft-loading');
        this.hideResults('draft-results');

        try {
            const data = {
                topic: topic,
                tone: tone,
                content_type: contentType,
                key_points: keyPoints || undefined
            };

            const response = await this.makeApiRequest('/api/v1/draft', data);
            this.displayDraft(response.content || response.draft || response);
        } catch (error) {
            this.showError('Failed to generate draft. Please try again.');
            console.error('Draft generation error:', error);
        } finally {
            this.hideLoading('draft-loading');
        }
    }

    displayDraft(content) {
        const resultsDiv = document.getElementById('draft-results');
        const draftText = document.getElementById('draft-text');
        
        draftText.innerHTML = this.formatContent(content);
        resultsDiv.classList.remove('hidden');
        this.showSuccess('Content draft generated successfully!');
    }

    async refineText() {
        const textToRefine = document.getElementById('text-to-refine').value.trim();
        const refinementType = document.getElementById('refinement-type').value;
        const targetTone = document.getElementById('target-tone').value;

        if (!textToRefine) {
            this.showError('Please enter text to refine');
            return;
        }

        this.showLoading('refine-loading');
        this.hideResults('refine-results');

        try {
            const data = {
                text: textToRefine,
                refinement_type: refinementType,
                target_tone: targetTone
            };

            const response = await this.makeApiRequest('/api/v1/refine', data);
            this.displayRefinedText(response.refined_text || response.content || response);
        } catch (error) {
            this.showError('Failed to refine text. Please try again.');
            console.error('Text refinement error:', error);
        } finally {
            this.hideLoading('refine-loading');
        }
    }

    displayRefinedText(content) {
        const resultsDiv = document.getElementById('refine-results');
        const refinedText = document.getElementById('refined-text');
        
        refinedText.innerHTML = this.formatContent(content);
        resultsDiv.classList.remove('hidden');
        this.showSuccess('Text refined successfully!');
    }

    async sendChatMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (!message) return;

        // Add user message to chat
        this.addChatMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        try {
            const data = {
                message: message,
                history: this.chatHistory
            };

            const response = await this.makeApiRequest('/api/v1/chat', data);
            this.hideTypingIndicator();
            this.addChatMessage(response.response || response.message || response, 'ai');
            
            // Update chat history
            this.chatHistory.push({ role: 'user', content: message });
            this.chatHistory.push({ role: 'assistant', content: response.response || response.message || response });
        } catch (error) {
            this.hideTypingIndicator();
            this.addChatMessage('Sorry, I encountered an error. Please try again.', 'ai');
            console.error('Chat error:', error);
        }
    }

    addChatMessage(message, sender) {
        const chatMessages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        
        const isUser = sender === 'user';
        messageDiv.className = `chat-bubble ${isUser ? 'user' : 'ai'}`;
        
        messageDiv.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="w-8 h-8 ${isUser ? 'bg-purple-600' : 'bg-gray-400'} rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas ${isUser ? 'fa-user' : 'fa-robot'} text-white text-sm"></i>
                </div>
                <div class="flex-1">
                    <p class="font-medium text-sm ${isUser ? 'text-purple-100' : 'text-gray-600'} mb-1">
                        ${isUser ? 'You' : 'AI Assistant'}
                    </p>
                    <p class="${isUser ? 'text-white' : 'text-gray-800'}">${this.formatContent(message)}</p>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'chat-bubble ai';
        
        typingDiv.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-robot text-white text-sm"></i>
                </div>
                <div class="flex-1">
                    <p class="font-medium text-sm text-gray-600 mb-1">AI Assistant</p>
                    <div class="flex items-center space-x-1">
                        <div class="typing-indicator"></div>
                        <div class="typing-indicator"></div>
                        <div class="typing-indicator"></div>
                        <span class="ml-2 text-gray-600 text-sm">Typing...</span>
                    </div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    formatContent(content) {
        // Convert line breaks to HTML
        return content.replace(/\n/g, '<br>');
    }

    hideResults(elementId) {
        document.getElementById(elementId).classList.add('hidden');
    }

    copyToClipboard(elementId) {
        const element = document.getElementById(elementId);
        const text = element.textContent || element.innerText;
        
        navigator.clipboard.writeText(text).then(() => {
            this.showSuccess('Content copied to clipboard!');
        }).catch(() => {
            this.showError('Failed to copy content');
        });
    }

    refineContent() {
        const draftText = document.getElementById('draft-text').textContent;
        document.getElementById('text-to-refine').value = draftText;
        this.showTab('refine');
    }

    compareTexts() {
        const originalText = document.getElementById('text-to-refine').value;
        const refinedText = document.getElementById('refined-text').textContent;
        
        // Create comparison modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-96 overflow-y-auto">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">Text Comparison</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-2">Original Text</h4>
                        <div class="bg-gray-50 p-4 rounded-lg border text-sm">${originalText}</div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-2">Refined Text</h4>
                        <div class="bg-green-50 p-4 rounded-lg border text-sm">${refinedText}</div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Global functions for HTML onclick handlers
function showTab(tabName) {
    app.showTab(tabName);
}

function copyToClipboard(elementId) {
    app.copyToClipboard(elementId);
}

function refineContent() {
    app.refineContent();
}

function compareTexts() {
    app.compareTexts();
}

// Initialize the application
const app = new ACMAContentCreator();
