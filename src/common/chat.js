import React from "react";

const Chat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=2347048942743"
      target="_blank"
      style={{
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#fff",
        textDecoration: "none",
        fontFamily: "sans-serif",
        fontSize: "16px",
        position: "fixed",
        right: "50px",
        bottom: "90px",
        height: "60px",
        width: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i
        className="bi bi-whatsapp"
        style={{
          fontSize: "30px",
        }}
      ></i>
    </a>
  );
};

export default Chat;
