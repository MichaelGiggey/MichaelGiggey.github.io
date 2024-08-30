import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './contact.module.css';

const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  const subject = 'Feedback from Website';
  const body = `Name: ${name}\r\nEmail: ${email}\r\nMessage: ${message}`;
  window.location.href = `mailto:michaeljcg2023@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div id={styles.nameForm}>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            name='Name'
            placeholder='Enter name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete='name'
            className={styles.input}
          />
        </div>
        <div id={styles.emailForm}>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            className={styles.input}
          />
        </div>
        <div id={styles.messageForm}>
          <label htmlFor="message"></label>
          <textarea
            id='message'
            className={styles.message}
            name="message"
            placeholder='Leave a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete='off'
            
          />
           
        </div>
        <input id={styles.submitButton} type="submit" value="Send Email" />
      </form>
      <div>
        <Link to="/" className={styles.link}>Back to home</Link>
      </div>
    </div>
  );
};

export default Contact;