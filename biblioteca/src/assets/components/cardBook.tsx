import styled from 'styled-components';

export const CardBook = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;

  li {
    list-style: none;
    display: flex;
    padding: 0em 1em;
    justify-content: space-around;
    gap: 5px;
    width: 8em;
  }

  button {
    width: 8em;
    border-radius: 8px;
    padding: 0.5em 1em;
    flex-wrap: wrap;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1.5em;
    border-radius: 5px;
    gap: 5px;

    background-color: #a9a9a9;
  }
`;
