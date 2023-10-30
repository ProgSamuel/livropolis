import styled from 'styled-components';
export const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;

  form {
    background-color: #e0e0e0;
    width: 50%;
    height: fit-content;
    padding: 3em 1.5em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1em;

    label {
      font-weight: 600;
    }
    ::placeholder {
      color: #ff6f61;
    }

    input,
    select {
      background-color: #a9a9a9;
      padding: 0.5em 1em;
      border: none;
      border-radius: 3px;
    }
  }

  div {
    background-color: #e0e0e0;
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
