import styled from 'styled-components';


export const CardBook = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      border-right: 1px solid gray;
    }
    
    button{
      width: fit-content;
      height: fit-content;
    }
    ul {
      border: 1px solid gray;
    }
  `;