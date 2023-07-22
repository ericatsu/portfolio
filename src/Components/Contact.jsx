import React, { useState } from 'react';
import Axios from 'axios';
import {
  ContactSection,
  ContactContainer,
  ContactInfo,
  ContactTitle,
  ContactItem,
  ContactLink,
  ContactForm,
  FormTitle,
  FormInput,
  FormTextarea,
  FormButton,
} from '../elements/ContactElements';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the backend API endpoint
    Axios.post('/send-email', {
      title,
      message,
      email: 'ericatsu29@gmail.com', // Replace with the recipient's email address
    })
      .then((response) => {
        console.log(response.data);
        // Handle the success response if needed
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle the error if needed
      });

    setTitle('');
    setMessage('');
  };

  return (
    <ContactSection>
      <ContactContainer>
        <ContactInfo>
          <ContactTitle>Contact Information</ContactTitle>
          <ContactItem>
  <FaPhone />
  Phone: <ContactLink href="tel:+233500889627">+233500889627</ContactLink>
</ContactItem>
<ContactItem>
  <FaEnvelope />
  Email:  <ContactLink href="mailto:ericatsu29@gmail.com"> ericatsu29@gmail.com</ContactLink>
</ContactItem>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Contact Me</FormTitle>
          <FormInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <FormTextarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <FormButton type="submit">Send Message</FormButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
