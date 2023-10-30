import styled from 'styled-components';

export const CardBook = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  background-color: rgba(224, 224, 224, 0.7) !important;
  position: relative;
  backdrop-filter: blur(109px);

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
    padding: 0.5em 1em;
    flex-wrap: wrap;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #a9a9a9;
    background-color:transparent;
    
  }
`;
