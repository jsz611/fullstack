import React from "react";
import styled from "styled-components";

export default function ContactForm() {
  return (
    <Form id="contact-form" method="post">
      <Input>
        <label>Name:</label>
        <input type="text" />
      </Input>
      <Input>
        <label> Email:</label>
        <input type="email" />
      </Input>
      <Input>
        <label>Message:</label>
        <textarea rows="5" />
      </Input>

      <button type="submit">Submit</button>
    </Form>
  );
}

const Input = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60vh;
  label {
    color: white;

    padding-top: 1rem;
  }
  input {
    border: 2px solid yellow;
    padding: 12px 20px;
    border-radius: 11px;
    width: 100%;
    height: 100%;
  }
  input:focus {
    background-color: blue;
    color: yellow;
  }
  textarea {
    border: 2px solid yellow;
    padding: 12px 20px;
    border-radius: 11px;
    width: 100%;
    height: 150%;
    box-align: border-box;
    background-color: white;
    resize: none;
  }
  textarea:focus {
    background-color: blue;
    color: yellow;
  }
`;

const Form = styled.form`
  button {
    margin: 1rem;
  }
`;
