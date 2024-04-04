// ChatWindow.js
import React, { useEffect, useState } from "react";
import axios from "axios";
function ChatWindow(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading,setLoading]=useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    //3.)zubair bhai iqbal bhai nabell bhai add message ko phle normal message dikhane k liye call krna he normal message hi likha to phle dikahenge na
    addMessage("User: "+newMessage);//user 
    serverSeDataLaneWala(newMessage)
      .then((successResponse) => {
        setLoading(false);
        addMessage("Server: "+successResponse.data.content)//server
      })
      .catch((errorResponse) => {
        console.log(errorResponse)
      });
  };

  // 1.)zubair bhai iqbal bhai nabell bhai const add message ek function bnaya he jo sare messages ko array me add krega

  const addMessage = (msg) => {
    if (msg.trim() !== "") {
      // setMessages([...messages, msg]);
      setMessages((prevState)=>{
        return [...prevState,msg]
      });
      setNewMessage("");
    }
  };

  //2.)zubair bhai iqbal bhai nabell bhai ab me server se response fetch krugna
  const serverSeDataLaneWala = async (message) => {
    const responseIsmeAyega = await axios.post(
      "http://localhost:4000/openAi/textGenerator",
      { prompt: message }
    );
    return responseIsmeAyega.data;
  };

  useEffect(() => {
    if (props.state) {
      setMessages([]);
    }
  }, [props.state]);

  return (
    <div className="chat-window">
      {/* Message Display Area */}
      {
        loading ? <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>:null
      }
      <div
        className="messages p-3"
        style={{ height: "80vh", overflowY: "auto" }}
      >
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            
            <div className={`p-2 rounded ${msg.includes("User:")? 'bg-light w-50 me-auto':'bg-dark text-white w-50 ms-auto'}`}>{msg}</div>
          </div>
        ))}
      </div>

      {/* Message Input Area */}
      <div className="message-input p-3 border-top">
        <form onSubmit={handleSendMessage}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
