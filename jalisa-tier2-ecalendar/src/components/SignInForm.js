import React from 'react';
import styled from 'styled-components';

const SignInForm = () => {
  return (
    <SignInFormContainer>
      <form>
        <h1>Sign In</h1>
        <ul>
          <li>
            <input type="text" name="username" placeholder="Username" />
          </li>
          <li>
            <input type="password" name="password" placeholder="Password" />
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
  justify-content: center;
  border-radius: 10px;

  form {
    text-align: center;
    width: 100%;

    h1 {
      font-size: 1.5rem;
    }

    ul {
      margin: 0;
      padding: 10px;
      list-style-type: none;

      li {
        padding-top: 10px;

        label {
          padding-right: 10px;
        }

        input {
          height: 40px;
          width: 65%;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          padding-left: 1rem;

          @media (max-width: 500px) {
            width: 100%;
          }
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

  @media (max-width: 500px) {
    width: 100%;
  }
`;
