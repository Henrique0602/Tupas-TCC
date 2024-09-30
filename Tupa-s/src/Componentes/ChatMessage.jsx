import React from 'react';

function ChatMessage({ isUser, text, avatar }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : ''}`}>
      {!isUser && <img className="w-20" src="/Logo.png" alt="" />}
      <div className={`p-8 rounded-lg shadow-md h-16 w-96 flex items-center ${isUser ? 'mr-10' : 'ml-10'} mb-4`}>
        <h1>{text}</h1>
      </div>
      {isUser && <img className="w-18 h-15" src={avatar || '/Pessoa.png'} alt="User" />}
    </div>
  );
}

export default ChatMessage;