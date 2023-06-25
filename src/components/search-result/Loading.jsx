import React from "react";
import "../../styles/search_result.css";
import loading_icon from "../../styles/images/illustration _Loading_.png";

function Loading() {
  return (
    <div className="container_loading">
      <p className="text_loading">Mencari penerbangan terbaik ...</p>
      <img className="icon_loading" src={loading_icon} alt="Icon Loading" />
    </div>
  );
}

export default Loading;
