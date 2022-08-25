import React, { useState,useCallback } from "react";
import Comment from "./Comment";


export default function UseCallBackDemo() {

    const [like, setLike] = useState(1);
    const [number, setNumber] = useState(1);
    const renderLike = () => {
        return <p>Ban da tha {like}</p>
    }

    const renderLikeCallBack = useCallback(renderLike,[like]);
  return (
    <div className="m-5">
      Like: {like} ♥ - member: {number} <button onClick={() => {
        setNumber(number + 1);
      }}>+</button>
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderLike={renderLikeCallBack}/>
    </div>
  );
}
