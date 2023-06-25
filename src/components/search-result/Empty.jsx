import React from "react";
import "../../styles/search_result.css";
import empty_icon from "../../styles/images/illustration_empty.png";

function Empty() {
  return (
    <div className="container_empty">
      <img className="icon_empty" src={empty_icon} alt="Icon Empty" />
      <p className="text_empty">
        Maaf Pencarian anda tidak ditemukan ...
        <p className="text_empty2">Coba cari perjalanan lainnya!</p>
      </p>
    </div>
  );
}

export default Empty;
