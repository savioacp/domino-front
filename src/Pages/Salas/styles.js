import styled from "styled-components";

export const Container = styled.div`
  max-width: 75%;
  margin: 15px auto;

  .search-container {
    display: flex;
    align-items: center;
    input {
      padding: 10px;
      flex-grow: 1;
    }

    button {
        padding: 10px;
        font-size: 16px;
        border: none;
        border: 1px solid #aaa;
        border-left: 0px;
        background: transparent;
    }
  }

  .results-container {
      display: flex;
      justify-content: space-between;
      align-content: space-around;
      flex-wrap: wrap;
      margin-top: 15px;
  }
`;
