import { useEffect, useState } from "react";
import "./FeedbackBox.css";

export default function FeedbackBox() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const element = document.querySelector('.refresh');
    if (element) {
        element.scrollTop = element.scrollHeight;
    }
}, [messages]);

  const fetchMessages = () => {
    fetch("https://daniel.daeva.ro/webprofile/backend/backend.php?action=getMessages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (!name.trim() || !message.trim()) return;

    try {
      const response = await fetch("https://daniel.daeva.ro/webprofile/backend/backend.php?action=addMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, translated: "N/A" }),
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
    <div className="chat-container box_style">
      <div className="chat-header">
        <p>Want to add Feedback? <span className="chat-status">AI OFF</span></p>
      </div>
      <div className="chat-history refresh">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="chat-message">
              <div className="chat-message-header">
                <span className="chat-name">{msg.name}</span>
                <span className="chat-timestamp">{new Date(msg.date).toLocaleString()}</span>
              </div>
              <hr className="chat-separator" />
              <div className="chat-text">Message: {msg.message}</div>
              <hr className="chat-separator" />
              <div className="chat-translation">AI Translate: {msg.translated}</div>
            </div>
          ))
        ) : (
          <p className="no-messages">No messages yet. Be the first to leave feedback!</p>
        )}
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
          placeholder="Your message, question, feedback, idea etc."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="chat-message-box"
        ></textarea>
        <button onClick={sendMessage} className="chat-send">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
