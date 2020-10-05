import React, { useEffect } from "react";
import { Container } from "./styled";

const Toast = ({ toastList, removeNotf }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        removeNotf();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Container>
        {toastList.map((toast, i) => (
          <div key={i} className="notification toast">
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.desc}</p>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};
export default Toast;
