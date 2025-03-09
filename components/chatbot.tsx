"use client"
import { useState, useRef, useEffect } from 'react'
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! How can I assist you today with Universal Greening Organisation?"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Add auto-resize functionality for input
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    autoResize();
  };

  // Handle keyboard events
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user'
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch response')
      }

      const data = await response.json()
      console.log('Response data:', data) // Debug log
      
      // Add assistant message
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: data.content || "I apologize, but I didn't receive a proper response.",
        role: 'assistant'
      }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        role: 'assistant'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle chat"
        >
          {isOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-[calc(100vw-32px)] md:w-96 max-w-[96vw] md:max-w-none h-[80vh] md:h-[520px] 
              bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 
              overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 md:p-4 text-white">
              <div className="flex items-center gap-2">
                <FaRobot className="text-lg md:text-xl" />
                <h3 className="font-semibold text-sm md:text-base">UGO Assistant</h3>
              </div>
              <p className="text-[10px] md:text-xs text-green-100 mt-1">Ask me anything about Universal Greening Organisation</p>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 scroll-smooth">
              <div className="space-y-3 md:space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 ${message.role === 'user' ? 'justify-end' : ''}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <FaRobot className="text-sm md:text-base text-green-600 dark:text-green-400" />
                      </div>
                    )}
                    <div className={`${
                      message.role === 'user' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      } rounded-lg p-2 md:p-3 max-w-[85%] shadow-sm`}
                    >
                      <p className="text-xs md:text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-600 flex items-center justify-center">
                        <FaUser className="text-sm md:text-base text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <FaRobot className="text-sm md:text-base text-green-600 dark:text-green-400" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 md:p-3">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area - Updated for better mobile experience */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-2 md:p-4 
              bg-gray-50 dark:bg-gray-900 relative">
              <form onSubmit={handleSubmit} className="flex gap-2 items-end">
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 
                      px-4 py-2 pr-12 text-sm md:text-base focus:outline-none focus:border-green-500 
                      dark:bg-gray-800 dark:text-white resize-none max-h-[100px] min-h-[40px]
                      leading-normal"
                    style={{ paddingRight: '3rem' }}
                  />
                  {isLoading && (
                    <div className="absolute right-3 bottom-2.5">
                      <div className="w-5 h-5 border-t-2 border-green-500 rounded-full animate-spin" />
                    </div>
                  )}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2.5 md:p-3
                    flex items-center justify-center transition-colors duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-sm md:text-base" />
                </motion.button>
              </form>

              {/* Mobile keyboard spacer */}
              <div className="h-safe-area-bottom" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
