import styled from "styled-components";

export const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 400px;
  background-color: #eee;
  border-radius: 10px;
  font-size: 18px;

  :focus {
    outline: 0;
  }
  .header {
    background-color: #000;
    color: #fff;
    padding: 10px;
  }
`;

export const Content = styled.div`
  padding: 10px;

  span {
    font-weight: 700;
  }

  button {
    background-color: #000;
    color: #fff;
    border-radius: 20px;
    margin: 0 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;
