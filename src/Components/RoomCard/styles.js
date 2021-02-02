import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  cursor: pointer;
  position: relative;

  margin: 10px;

  transition: all 0.1s ease-in-out;

  :before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -2;
  }

  :hover .roomcard-header svg {
    margin-right: 0;
    opacity: 1;
  }

  .roomcard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 18px;
      margin-right: 5px;
      opacity: 0;
      transition: all 0.2s ease-out;
      color: #222;
    }
  }

  :hover {
    transform: scale(1.025);
  }

  strong {
    font-size: 18px;
    font-weight: 400;
  }
  p.room-id {
    color: #ccc;
  }

  .players-container {
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
  }
`;
