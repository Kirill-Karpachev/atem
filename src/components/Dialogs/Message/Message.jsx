import React from 'react';
import s from "./Message.module.css"

const Message = (props) => {
  return (
    <div className={s.message__item}>{props.message}</div>
  )
};

export default Message;