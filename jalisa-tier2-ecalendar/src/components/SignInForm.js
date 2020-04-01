import React from 'react';
import styled from 'styled-components';

const SignInForm = () => {
  return (
    <SignInFormContainer>
      <form>
        <ul>
          <li>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
          </li>
          <li>
            <SignInButton>Sign In</SignInButton>
          </li>
        </ul>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;

const SignInFormContainer = styled.div`
  display: flex;
  border-radius: 10px;

  form {
    width: 100%;

    ul {
      list-style-type: none;
      li {
        padding-top: 10px;
        label {
          padding-right: 10px;
        }
        input {
          height: 30px;
          width: 65%;
          border: none;
          border-radius: 5px;
        }
      }
      li:last-child {
        text-align: center;
        padding-top: 30px;
      }
    }
  }
`;

const SignInButton = styled.button`
  height: 40px;
  width: 180px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #188665;
  font-size: 1.1em;
  font-weight: 600;
`;
