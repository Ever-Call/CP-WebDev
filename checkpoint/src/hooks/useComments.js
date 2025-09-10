// src/hooks/useComments.js
import { useState } from "react";

export function useComments() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !comment) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newComment = {
      id: Math.floor(Math.random() * 10000), 
      email,
      comment,
    };

    setComments([...comments, newComment]);
    setEmail("");
    setComment("");
  };

  return {
    email,
    setEmail,
    comment,
    setComment,
    comments,
    handleSubmit,
  };
}
