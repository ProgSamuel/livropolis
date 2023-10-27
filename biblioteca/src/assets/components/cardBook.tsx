import styled from 'styled-components';


export const CardBook = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    li {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      padding: .5em;
      border-right: 1px solid black;
      gap: 5px;
 

    }
    
    button{
      width: fit-content;
      height: fit-content;
    }
    ul {
      border: 1px solid gray;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  `;