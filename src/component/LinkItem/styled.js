import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 15px 0;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  width: 300px;
  .deleteLink {
    display: none;
    :focus {
      outline: none;
    }
  }

  :hover {
    background-color: #f5f4f4;
    .deleteLink {
      display: block;
      position: absolute;
      top: -10px;
      right: -10px;
      background: transparent;
      color: red;
      cursor: pointer;
    }
  }
`;

export const ScoreWrapper = styled.div`
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  background-color: #eee;
`;
export const Score = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export const LinkName = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Content = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  min-width: 200px;

  div {
    word-break: break-all;
  }
`;

export const LinkUrl = styled.a`
  font-size: 14px;
  color: #a7a2a2;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #000;
  }
`;

export const Voting = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UpVote = styled.button`
  color: #a7a2a2;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  :focus {
    outline: 0;
  }
`;

export const DownVote = styled(UpVote)``;
