import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0;
`;

export const SubmitLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background-color: #fbf3f3;
  padding: 10px 40px 10px 10px;
  border-radius: 10px;

  .MuiSvgIcon-root {
    padding: 20px;
    border: 1px solid #c5a1a1;
    background-color: #ddd;
    border-radius: 10px;
  }
  p {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 20px;
  }
`;

export const Line = styled.div`
  height: 5px;
  background-color: #ddd;
  width: 100%;
  margin-top: 20px;
`;
