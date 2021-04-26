import React from "react";
import { useState } from 'react'

export const AddTodo = (props) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const submit = (e) => {
    e.preventDefault()
    if (!title || !desc) {
      alert("title or desc can not be blank");
    }
    else {
      props.addTodo(title, desc)
      setTitle("")
      setDesc("")
    }

  }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo Item
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Todo Discription
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3" value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
