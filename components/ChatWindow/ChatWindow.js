import { useEffect, useState } from "react";

const ChatWindow = () => {
  const [modelResponse, setResponse] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  function getAnswer(e) {
    e.preventDefault();
    fetch(`/api/bot?input=${input}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        
        setResponse(oldValue => response.responseFromBot.answer)
        return response;
      });
  }

  return (
    <div>
      <h2>Chatbot coso</h2>
      <p>{modelResponse}</p>
      <form onSubmit={getAnswer}>
        <label for="input">input</label>
        <input
          type="text"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ChatWindow;
