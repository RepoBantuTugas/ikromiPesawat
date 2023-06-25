import React from "react";

function Footer() {
  return (
    <>
      <div
        className="text-center p-4 footer"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        ©2023 Copyright &nbsp;
        <a className="text-reset text-decoration-none fw-bold" href="#">
          Tiketku
        </a>
      </div>
    </>
  );
}

export default Footer;
