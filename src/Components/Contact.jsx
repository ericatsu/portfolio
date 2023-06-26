import React, { useState } from 'react';
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
import { FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email with the title and message data
    // Add your email sending logic here

    // Reset the form fields
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
  Phone: <ContactLink href="tel:+123456789">+123456789</ContactLink>
</ContactItem>
<ContactItem>
  <FaEnvelope />
  Email: <ContactLink href="mailto:example@example.com">example@example.com</ContactLink>
</ContactItem>
<ContactItem>
  <FaLinkedin />
  LinkedIn: <ContactLink href="https://linkedin.com/">linkedin.com</ContactLink>
</ContactItem>
<ContactItem>
  <FaTwitter />
  Twitter: <ContactLink href="https://twitter.com/">twitter.com</ContactLink>
</ContactItem>
<ContactItem>
  <FaInstagram />
  Instagram: <ContactLink href="https://instagram.com/">instagram.com</ContactLink>
</ContactItem>
<ContactItem>
  <FaDiscord />
  Discord: <ContactLink href="https://discord.com/">username#1234</ContactLink>
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
