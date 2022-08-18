import axios from "axios";
import React, { useState } from "react";
import "./Modal.scss";

interface ModalProps {
  setOpen: any;
  pic: any;
}
interface Comment {
  id: number;
  text: string;
  date: number;
}

function Modal(props: ModalProps) {
  const comments = props.pic.comments;
  const [value, setValue] = useState("");
  const changeHandler = (event: any) => {
    setValue(event.target.value);
  };
  const newComment: Comment = { id: Date.now(), text: value, date: Date.now() };

  const submitHandler = (event: React.FormEvent, newComment: Comment) => {
    event.preventDefault();
    const newComments: Comment[] = comments.push(newComment);
    // axios.post('https://boiling-refuge-66454.herokuapp.com/images/'+ props.pic.id +'/comments', value)
    setValue('')
    return newComments;
  };

  return (
    <>
      <div
        onClick={() => props.setOpen(false)}
        className="modal-background"
      ></div>

      <div className="modal">
        <img src={props.pic.url} alt="IMG" />
        <div className="comment-section">
          {comments.map((com: Comment) => (
            <p key={com.id}>{com.text}</p>
          ))}
          <h3>Comment</h3>
          <form onSubmit={(e) => submitHandler(e, newComment)}>
            <input type="text" value={value} onChange={changeHandler} />
            <h3 className="tip">Write a few sentences about the photo.</h3>
            <div className="button-wrap">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
