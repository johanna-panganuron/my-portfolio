'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import '../styles/chatbot.css'

export default function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Johanna. Ask me anything about myself!", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech stack') || msg.includes('what can you do')) {
      return "I'm skilled in Vue, Vite, React, Next.js, Node.js, Laravel, MySQL, MongoDB, and more! I'm a full-stack developer with expertise in both frontend and backend technologies."
    } else if (msg.includes('project')) {
      return "I've worked on several projects including a Pet Grooming Management System, CPC Voting System, Task Tracker, and CPC Library Management System. You can view them in the Projects section!"
    } else if (msg.includes('education') || msg.includes('school') || msg.includes('study') || msg.includes('college')) {
      return "I'm currently pursuing a Bachelor of Science in Information Technology at Cordova Public College, expected to graduate in 2026."
    } else if (msg.includes('ojt') || msg.includes('internship') || msg.includes('job') || msg.includes('work') || msg.includes('hire')) {
      return "I'm actively seeking OJT opportunities where I can apply my technical skills in a professional environment and contribute to real-world projects!"
    } else if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('phone') || msg.includes('call')) {
      return "You can reach me at johannapanganuron@gmail.com or call me at 09491280100. You can also connect with me on Facebook, GitHub, or LinkedIn!"
    } else if (msg.includes('about') || msg.includes('who') || msg.includes('tell me about')) {
      return "I'm a BSIT student and aspiring full-stack developer passionate about creating efficient web applications using modern technologies."
    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good afternoon')) {
      return "Hello! Nice to meet you! What would you like to know about me?"
    } else if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else about my skills, projects, or experience!"
    } else if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you')) {
      return "Goodbye! Feel free to come back anytime if you have more questions. Have a great day!"
    } else {
      return "I'm here to help you learn about my portfolio! I can answer questions about:\n\n• My technical skills and technologies\n• Projects I've worked on\n• My education background\n• OJT opportunities\n• How to contact me\n\nWhat would you like to know?"
    }
  }

  const handleSend = () => {
    if (!input.trim()) return
  
    const userMessage = { text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
  
    setTimeout(() => {
      const botMessage = { text: getBotResponse(input), sender: 'bot' }
      setMessages(prev => [...prev, botMessage])
      
      // Auto scroll to bottom
      setTimeout(() => {
        const messagesContainer = document.querySelector('.chatbot-messages')
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight
        }
      }, 100)
    }, 500)
  
    setInput('')
    
    // Scroll after user message
    setTimeout(() => {
      const messagesContainer = document.querySelector('.chatbot-messages')
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight
      }
    }, 100)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div className={`chatbot-container ${showChatbot ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle" 
        onClick={() => setShowChatbot(!showChatbot)}
        aria-label="Toggle chatbot"
      >
        {showChatbot ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <Image 
            src="/images/profile.png" 
            alt="Chat with Johanna" 
            width={60} 
            height={60}
            className="chatbot-avatar"
          />
        )}
      </button>

      {showChatbot && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <Image 
                src="/images/profile.png" 
                alt="Johanna" 
                width={40} 
                height={40}
                className="chatbot-header-avatar"
              />
              <div>
                <h3>Johanna Panganuron</h3>
                <span className="chatbot-status">Online</span>
              </div>
            </div>
            <button onClick={() => setShowChatbot(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <Image 
                    src="/images/profile.png" 
                    alt="Johanna" 
                    width={30} 
                    height={30}
                    className="message-avatar"
                  />
                )}
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}