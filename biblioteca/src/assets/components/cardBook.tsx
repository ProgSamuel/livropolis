import styled from 'styled-components';


export const CardBook = styled.div`
    display: flex;
    flex-direction: row;
    li {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      border-right: 1px solid gray;
    }
    ul {
      border: 1px solid gray;
    }
  `;