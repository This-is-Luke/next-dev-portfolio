// this is the contact page it is a functional component that returns a div element with a header and form element.

import Header from '../components/header';

const Contact = () => (
  <div>
    <Header />
    <h1>Contact Me</h1>
    <form>
      <label htmlFor='name'>Name:</label><br />
      <input type='text' id='name' name='name' /><br />
      <label htmlFor='email'>Email:</label><br />
      <input type='email' id='email' name='email' /><br />
      <label htmlFor='message'>Message:</label><br />
      <textarea id='message' name='message' /><br />
      <input type='submit' value='Submit' />
    </form>
    <style jsx>{`
      form {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
      }
      label {
        font-weight: bold;
        margin-top: 1em;
      }
      input, textarea {
        padding: 0.5em;
        font-size: 1em;
        margin-top: 0.5em;
      }
      input[type='submit'] {
        margin-top: 1em;
        background-color: #333;
        color: #fff;
        border: none;
        padding: 0.5em 1em;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default Contact;
