import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  position: relative;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(10px); 
    z-index: -1;
  }

  form {
    background-color: rgba(224, 224, 224, 0.7); 
    width: 50%;
    height: fit-content;
    padding: 3em 1.5em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: .6em;

    label {
      font-weight: 500;
    }

    ::placeholder {
      color: #ff6f61;
    }

    input,
    select {
      background-color: white;
      padding: 0.5em 1em;
      border: none;
      border-radius: 3px;
    }
  }

  div {
    background-color: rgba(224, 224, 224, 0.7);  
    width: fit-content;
    padding: 0.5em 1.5em;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Edit,
  .view {
    display: none;
    height: 100vh;
  }
`;
