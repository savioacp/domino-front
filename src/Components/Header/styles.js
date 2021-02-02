import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${props => props.theme.headerBackground};
  color: ${props => props.theme.foreground};
  align-items: center;
  justify-content: center;
  .header-container {
    display: flex;
    align-self: center;
    width: 80%;
    padding: 25px;
    justify-content: left;
    align-content: center;

    .buttons-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
    }
    p {
      font-size: 24px;
      border-right: 1px solid #aaa;
      padding: 5px;
      cursor: pointer;

      ::selection {
        background: transparent;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
      align-self: center;
      margin: 5px 18px;
      font-size: 20px;
      transition: padding-bottom 0.2s, margin-bottom 0.2s, color 0.2s, border-bottom 0.2s;
      border-bottom: 3px solid ${props => props.theme.headerBackground};
    }

    a.current-route {
      border-bottom: 3px solid ${props => props.theme.foregroundAccent};
      color: ${props => props.theme.foregroundAccent};
    }

    a:hover {
        border-bottom: 3px solid ${props => props.theme.foregroundAccent};
        color: ${props => props.theme.foregroundAccent};
        padding-bottom: 5px;
        margin-bottom: 0;
    }
  }
`;
