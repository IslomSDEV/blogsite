import React, { useContext, useState } from "react";
import { json } from "react-router-dom";
import { Context } from "../Context/Context";
import "./Modal.css";

function Modal() {
  const [postValue, setPostValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [imgVlaue, setImgValue] = useState();

  const { setHandleModal, handleModal, setTalks, talks } = useContext(Context);
  localStorage.setItem("talks", JSON.stringify(talks));

  let inputObj = {
    id: new Date().getTime(),
    title: postValue,
    date: dateValue,
    image:
      "https://azimjon.com/media/2021/12/18/programmable-google-assistant.png",
  };

  function handleSubmite(e) {
    e.preventDefault();
    setPostValue("");
    setDateValue("");
    setImgValue("");
    setTalks([...talks, inputObj]);
    cancelHandle();
  }

  function cancelHandle() {
    setHandleModal(false);
    setPostValue("");
    setDateValue("");
    setImgValue("");
  }

  return (
    <div
      className={`${
        handleModal ? "transparentScreen show" : "transparentScreen hide"
      }`}
    >
      <div className="modalScreen">
        <form className="modalForm" onSubmit={handleSubmite}>
          <input
            className="postName"
            required
            value={postValue}
            onChange={(e) => setPostValue(e.target.value)}
            type="text"
            name="text"
            placeholder="Enter post name...."
          />
          <input
            className="postDate"
            required
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            type="date"
            min="1990-01-01"
          />
          <div className="modalBtns">
            <button className="done btn">Done</button>
          </div>
        </form>
        <button onClick={cancelHandle} className="cancel btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
