import styled, { keyframes } from "styled-components";

const toastinright = keyframes`
{
	from {
	  transform: translateX(100%);
	  
	}
	to {
	  transform: translateX(0);
	}
}
`;

export const Container = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  bottom: 12px;
  right: 12px;
  transition: transform 0.6s ease-in-out;
  animation: ${toastinright} 0.7s;

  .notification {
    background: #fff;
    transition: 0.3s ease;
    position: relative;
    pointer-events: auto;
    overflow: hidden;
    margin: 0 0 6px;
    padding: 30px;
    margin-bottom: 15px;
    width: 300px;
    max-height: 100px;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 0 10px #999;
    color: #000;
    opacity: 0.9;
    background-position: 15px;
    background-repeat: no-repeat;
    background-color: #bfca54;
  }

  .notification-title {
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 6px;
    width: 300px;
    height: 18px;
    color: #000;
  }

  .notification-message {
    margin: 0;
    text-align: left;
    height: 18px;
    margin-left: -1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000;
  }

  .toast {
    height: 50px;
    width: 365px;
    color: #fff;
    padding: 20px 15px 10px 10px;
  }
`;
