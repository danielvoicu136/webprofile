import { useEffect, useState } from "react";
import "./MyChat.css";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const fetchMessages = () => {
    fetch("https://daniel.daeva.ro/webprofile/backend/backend.php")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  };

  useEffect(() => {
    fetchMessages();

    
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (!name || !message) return;

    try {
      const response = await fetch("https://daniel.daeva.ro/webprofile/backend/backend.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (response.ok) {
       
        fetchMessages(); 
        setMessage(""); 
      } else {
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.name}</strong>: {msg.message} 
            <span className="chat-timestamp">({new Date(msg.date).toLocaleString()})</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="chat-name"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="chat-message-box"
        ></textarea>
        <button onClick={sendMessage} className="chat-send">Send</button>
      </div>
    </div>
  );
}
