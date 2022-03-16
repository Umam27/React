
// state hook
import React, { useState } from 'react';

export const AddTodo = (props) => {

    const [title , setTitle] = useState(""); 
    const [desc , setDesc] = useState("");

    const submit = (e)=> {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be empty");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    } 
  return (
    <div className="container my-3">
        <form onSubmit = {submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">To-Do Title</label>
                <input type="text" className="form-control" value = {title} onChange={(e) => (setTitle(e.target.value))} id="title" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" className="form-control" value = {desc} onChange={(e) => (setDesc(e.target.value))} id="desc"/>
            </div>

            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}

            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}
// export default AddTodoa