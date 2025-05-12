import React from "react";
import s from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader color="#cccccc" size={65} speedMultiplier={2} />
      <p className={s.text}>loading...</p>
    </div>
  );
};

export default Loader;
