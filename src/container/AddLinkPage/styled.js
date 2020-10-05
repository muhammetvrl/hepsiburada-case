import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;

    input {
      width: 400px;
      height: 30px;
      border-radius: 10px;
      border: 1px solid #ccc;
      :focus {
        outline: 0;
      }
    }
    button {
      background-color: #000;
      color: #fff;
      height: 30px;
      border-radius: 20px;
      :focus {
        outline: 0;
        cursor: pointer;
      }
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;

  label {
    margin-bottom: 5px;
  }
`;
