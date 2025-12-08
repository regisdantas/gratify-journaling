import styled from "styled-components";

export const EntryList = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 60px;
`;

export const DateContainer = styled.div`
position: relative;
bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: 0px;
  height: 35px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  svg {
    cursor: pointer;
    margin: 0 10px 0 10px;
    width: 30px;
  }
  input {
    background: transparent;
    height: auto;
    border: none;
      outline: none;
    }

    input:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
`;

export const MenuBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
`;
