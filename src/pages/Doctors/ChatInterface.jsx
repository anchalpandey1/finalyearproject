import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const ChatInterface = () => {
    // State for the messages and the current input message
    const [messages, setMessages] = useState([
        { sender: 'receiver', text: 'Hi there! Welcome to my portfolio chat. Feel free to explore my work at abhirajk.vercel.app', time: '11:42 AM' },
        { sender: 'sender', text: "Amazing work! I'm impressed with your projects and technical skills.", time: '11:43 AM' },
        { sender: 'receiver', text: 'Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?', time: '11:44 AM' },
    ]);
    
    const [newMessage, setNewMessage] = useState('');

    // Function to handle input changes
    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    // Function to handle sending the message
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: 'sender', text: newMessage, time: new Date().toLocaleTimeString() }]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 h-screen flex flex-col">
                {/* Chat Header */}
               
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 chat-container">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex items-start ${message.sender === 'receiver' ? 'space-x-2' : 'justify-end space-x-2'}`}>
                                {message.sender === 'receiver' && (
                                    <img 
                                        src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp" 
                                        alt="Abhiraj" 
                                        className="w-8 h-8 rounded-full object-cover" />
                                )}
                                <div className={`${message.sender === 'receiver' ? 'bg-white rounded-lg rounded-tl-none' : 'bg-blue-600 text-white rounded-lg rounded-tr-none'} p-3 shadow-md max-w-md`}>
                                    <p>{message.text}</p>
                                </div>
                                <span className="text-gray-500 text-xs message-time">{message.time}</span>
                                {message.sender === 'sender' && (
                                    <img 
                                        src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp" 
                                        alt="User" 
                                        className="w-8 h-8 rounded-full object-cover" />
                                )}
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        <div className="flex items-start space-x-2">
                            <img 
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp" 
                                alt="Abhiraj" 
                                className="w-8 h-8 rounded-full object-cover" />
                            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md">
                                <div className="typing-indicator">
                                    <span>•</span>
                                    <span>•</span>
                                    <span>•</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Input */}
                <div className="bg-white border-t p-4">
                    <div className="max-w-4xl mx-auto flex items-center space-x-4">
                        <button className="p-2 text-gray-500 hover:text-gray-700 transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                        </button>
                        <input 
                            type="text" 
                            placeholder="Type your message..." 
                            className="flex-1 p-2 border rounded-full focus:outline-none focus:border-blue-500"
                            value={newMessage}
                            onChange={handleInputChange} />
                        <button className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition" onClick={handleSendMessage}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
