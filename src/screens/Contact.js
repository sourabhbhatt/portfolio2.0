import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const ContactSection = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6);
`;

const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6);

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 1200px;
    height: 1200px;
    background: white;
    opacity: 0.1;
    border-radius: 50%;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  color: white;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: white;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: black;
  outline: none;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    border: 2px solid #3b82f6;
    transform: scale(1.02);
    transition: transform 0.3s;
  }
`;

const Textarea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: black;
  outline: none;
  background: rgba(255, 255, 255, 0.8);
  resize: none;

  &:focus {
    border: 2px solid #3b82f6;
    transform: scale(1.02);
    transition: transform 0.3s;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: white;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(to right, #2563eb, #7c3aed);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        "service_zflkx0e",
        "template_m9qta6f",
        templateParams,
        "user_yGaKatld0Plmj67MT1uAr"
      )
      .then((response) => {
        console.log("SUCCESS!", response.text);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setSending(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  return (
    <ContactSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Animation */}
      <BackgroundAnimation
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="circle"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </BackgroundAnimation>

      {/* Content Section */}
      <ContentWrapper
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let’s build something amazing together. Send me a message!
        </Subtitle>

        {/* Contact Form */}
        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Name Field */}
          <Input
            type="text"
            aria-label="Your name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />

          {/* Email Field */}
          <Input
            type="email"
            aria-label="Your email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />

          {/* Message Field */}
          <Textarea
            aria-label="Your message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            whileFocus={{ scale: 1.02 }}
          ></Textarea>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={sending}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </Form>
      </ContentWrapper>
    </ContactSection>
  );
}

export default Contact;
