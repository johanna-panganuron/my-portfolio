'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FaLaptopCode, FaFolderOpen, FaEnvelope, FaBriefcase, FaUser, FaTools } from 'react-icons/fa'
import Image from 'next/image'
import '../styles/chatbot.css'

const quickReplies = [
  { label: 'About', icon: <FaUser /> },
  { label: 'Skills', icon: <FaLaptopCode /> },
  { label: 'Projects', icon: <FaFolderOpen /> },
  { label: 'Services', icon: <FaTools /> },
  { label: 'Contact', icon: <FaEnvelope /> },
  { label: 'For Hire?', icon: <FaBriefcase /> },
  
]

export default function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Johanna. Ask me anything about myself!", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const getTime = () => {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()

    if (msg.includes('hire') || msg.includes('job') || msg.includes('available') || msg.includes('opportunity')) {
      return "I'm a fresh IT graduate open to full-time, part-time, or freelance opportunities. Feel free to reach out via the Contact page. 📬"

    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good afternoon')) {
      return "Hello! Nice to meet you. What would you like to know about me? 👋"

    } else if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech stack') || msg.includes('what can you do')) {
      return "I'm skilled in Vue, React, Next.js, Node.js, Laravel, PHP, MySQL, MongoDB, and more — covering both frontend and backend development. 💻"

    } else if (msg.includes('service') || msg.includes('offer') || msg.includes('help') || msg.includes('what do you do')) {
      return "Here's what I can help you with:\n\n• Full-Stack Web Development (React, Next.js, Vue, Node.js, Laravel)\n• Frontend Development (JavaScript, TypeScript, CSS, Tailwind)\n• Backend Development (Node.js, Express.js, PHP, Laravel)\n• Database Design (MySQL, MongoDB)\n• UI/UX Design (Figma, Wireframing, Prototyping)\n• Responsive Web Design\n\nVisit the Services page for more details. 🛠️"
    
    } else if (msg.includes('project') || msg.includes('portfolio') || msg.includes('built') || msg.includes('made')) {
      return "Here are some of my projects:\n\n• Mimi\'s Pet Grooming Management System\n• CPC SSG Voting System\n• Task Tracker\n• CPC Library Management System\n\nVisit the Projects page to see the full details. 🚀"

    } else if (msg.includes('build') || msg.includes('create') || msg.includes('develop') || msg.includes('website') || msg.includes('app') || msg.includes('system')) {
      return "I'd love to help build something for you. Whether it's a website, web app, or a custom system — reach out via the Contact page and let's talk. 🤝"

    } else if (msg.includes('education') || msg.includes('school') || msg.includes('college') || msg.includes('degree')) {
      return "I graduated with a Bachelor of Science in Information Technology from Cordova Public College (2022–2026), with TESDA certifications in Creative Web Design and Computer Systems Servicing (NC II). 🎓"

    } else if (msg.includes('experience') || msg.includes('ojt') || msg.includes('internship')) {
      return "I completed my OJT at DSWD - Pantawid Pamilyang Pilipino Program (4Ps) in Cordova, Cebu as a Data Encoder from January to April 2026."

    } else if (msg.includes('award') || msg.includes('achievement') || msg.includes('hackathon')) {
      return "I won 3rd Place and Best Technical Implementation at the Mini Hackathon (Figma) during IT Day at Cordova Public College in March 2026. 🏆"

    } else if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('phone')) {
      return "You can reach me at johannapanganuron@gmail.com or call 0949 1280 100.\n\n🔗 Find me online:\n• Facebook: facebook.com/juwanaxz\n• LinkedIn: linkedin.com/in/johanna-panganuron"

    } else if (msg.includes('about') || msg.includes('who are you') || msg.includes('tell me about')) {
      return "I'm Johanna, a fresh IT graduate and Junior Full-Stack Web Developer passionate about building functional and user-friendly web applications. Check my About page to learn more. 😊"

    } else if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else. 😊"

    } else if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you')) {
      return "Goodbye! Have a great day. Feel free to come back anytime. 👋"

    } else {
      return "I'm here to help! You can ask me about:\n\n• My skills & tech stack\n• Projects I've built\n• My education & certifications\n• Work experience\n• How to contact me\n• Awards & achievements\n\nWhat would you like to know? 😊"
    }
  }

  const handleSend = (customMessage) => {
    const messageText = customMessage || input
    if (!messageText.trim()) return

    const userMessage = { text: messageText, sender: 'user', time: getTime() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const messagesContainer = document.querySelector('.chatbot-messages')
      if (messagesContainer) messagesContainer.scrollTop = messagesContainer.scrollHeight
    }, 100)

    setTimeout(() => {
      setIsTyping(false)
      const botMessage = { text: getBotResponse(messageText), sender: 'bot', time: getTime() }
      setMessages(prev => [...prev, botMessage])

      setTimeout(() => {
        const messagesContainer = document.querySelector('.chatbot-messages')
        if (messagesContainer) messagesContainer.scrollTop = messagesContainer.scrollHeight
      }, 100)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  const renderMessageText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+|(?:facebook|linkedin)\.com\/[^\s]+)/g
    return text.split('\n').map((line, i) => {
      const parts = line.split(urlRegex)
      return (
        <span key={i}>
          {parts.map((part, j) => {
            const isUrl = /^(https?:\/\/[^\s]+|(?:facebook|linkedin)\.com\/[^\s]+)$/.test(part)
            if (isUrl) {
              const href = part.startsWith('http') ? part : `https://${part}`
              return (
                <a key={j} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'underline', wordBreak: 'break-all' }}>
                  {part}
                </a>
              )
            }
            return <span key={j}>{part}</span>
          })}
          <br />
        </span>
      )
    })
  }

  return (
    <div className={`chatbot-container ${showChatbot ? 'open' : ''}`}>
      {!showChatbot && (
        <div className="chatbot-bubble" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          Ask me anything!👋
          <span
            onClick={(e) => { e.stopPropagation(); document.querySelector('.chatbot-bubble').style.display = 'none'; }}
            style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem', lineHeight: 1 }}
          >
            ✕
          </span>
        </div>
      )}

      <button
        className="chatbot-toggle"
        onClick={() => setShowChatbot(!showChatbot)}
        aria-label="Toggle chatbot"
      >
        {showChatbot ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <>
            <Image
              src="/images/profile.png"
              alt="Chat with Johanna"
              width={60}
              height={60}
              className="chatbot-avatar profile-light"
              quality={100}
            />
            <Image
              src="/images/profile-dark.png"
              alt="Chat with Johanna"
              width={60}
              height={60}
              className="chatbot-avatar profile-dark"
              quality={100}
            />
          </>
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
                className="chatbot-header-avatar profile-light"
                quality={100}
              />
              <Image
                src="/images/profile-dark.png"
                alt="Johanna"
                width={40}
                height={40}
                className="chatbot-header-avatar profile-dark"
                quality={100}
              />
              <div>
                <h3>Johanna B. Panganuron</h3>
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
                  <>
                    <Image src="/images/profile.png" alt="Johanna" width={30} height={30} className="message-avatar profile-light" />
                    <Image src="/images/profile-dark.png" alt="Johanna" width={30} height={30} className="message-avatar profile-dark" />
                  </>
                )}
                <div className="message-wrapper">
                  <div className="message-text">
                    {renderMessageText(msg.text)}
                  </div>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot">
                <>
                  <Image src="/images/profile.png" alt="Johanna" width={30} height={30} className="message-avatar profile-light" />
                  <Image src="/images/profile-dark.png" alt="Johanna" width={30} height={30} className="message-avatar profile-dark" />
                </>
                <div className="message-wrapper">
                  <div className="message-text typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-quick-replies">
            {quickReplies.map((reply, index) => (
              <button key={index} className="quick-reply-btn" onClick={() => handleSend(reply.label)}>
                {reply.icon} {reply.label}
              </button>
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
            <button onClick={() => handleSend()}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}