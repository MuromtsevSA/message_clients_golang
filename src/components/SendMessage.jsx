import React, { useState } from 'react';
import axios from 'axios';

function SendMessage() {
  const [text, setText] = useState('');
  const [order, setOrder] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/CreateMessage', { text, order });
      setText('');
      setOrder(order + 1); 
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>Send Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
