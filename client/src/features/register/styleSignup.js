import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: gray;
    text-decoration: none;
    font-size: 14px;
  }
`;

export const FormLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 70vh;
`;

export const Card = styled.div`
  flex: 3;
`;

export const FormWrapper = styled.form`
  width: 90%;
  margin: 0 auto;
  position: relative;

  .input-container {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  input {
    width: 95%;
    padding: 12px 0px;
    border: none; /* Remove all borders */
    border-bottom: 1px solid gray; /* Only show the bottom border */
    background-color: transparent;
    outline: none;
    font-size: 14px;
    transition: border-color 0.5s, padding 0.5s;

    &:focus {
      outline: none; /* Remove the black outline */
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-97%);
      font-size: 12px;
      color: gray;
    }
  }

  label {
    position: absolute;
    left: 10px;
    top: 13px;
    padding: 0 5px;
    background-color: transparent;
    color: gray;
    transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
    pointer-events: none;
    transform-origin: left top;
    z-index: 1; /* Ensure label stays above the input */
  }

  button {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 100%;
  }
`;


export const Divider = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: grey;
`;

export const Button = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  padding: 10px;
  background-color: red;
  color: white;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }
`;

