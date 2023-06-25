import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import "./App.css";
import { Input, InputLabel } from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// Deployed Link https://marshmallow02.web.app

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    async function fetchMessages() {
      getDocs(
        query(collection(db, "messages"), orderBy("timestamp", "desc"))
      ).then((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
    }
    fetchMessages();
  }, [input, setMessages]);

  const sendMessage = (event) => {
    event.preventDefault();
    addDoc(collection(db, "messages"), {
      message: input,
      username: username,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        className="App-logo"
        src="https://c4.wallpaperflare.com/wallpaper/290/639/706/couple-heart-panda-love-animals-bears-hd-art-wallpaper-preview.jpg"
      />
      <h1>Hello {username}</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="outlined"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
