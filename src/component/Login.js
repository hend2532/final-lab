import React, { useRef, useState, useEffect } from "react";
import SignUp from "./SignUp";

import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.focus();
  }, []);
  const handelForm = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const switching = () => {
    setClose(!close);
  };
  if (show) {
    return (
      
      <div className=" welcome flex flex-col  bg-slate-50   p-4 justify-center gap-3 rounded-md shadow-md ">
        <h2 className="text-center text-blue-500">Login</h2>
        <p>
          Welcome : <span>{form.email}</span>
        </p>
        <p>
          You are Logged in to the Account at{" "}
          <span>{new Date().toLocaleString()}</span>
        </p>
        <Link to="/home" >
        <button>Go to Home</button>
        </Link>
      </div>
    
    );
  }
  return !close ? (
    <form className="flex flex-col  bg-blue-300    justify-center gap-3 rounded-md ">
      <h2 className="text-center text-blue-500">Login Page </h2>
      <label>Name : </label>
      <input
        className="p-3 rounded-md outline-none "
        ref={myRef}
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="name..."
      />
      <label>E-mail : </label>
      <input
        className="p-3 rounded-md"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="example@gmail.com"
      />
      <div className="flex flex-row justify-between  ">
        
        <button
          onClick={(e) => handelForm(e)}
          // className="p-3 rounded-md w-40 m-auto min-w-48   bg-slate-500 hover:bg-slate-400 text-slate-50"
        >
          Login
        </button>
        <button
          onClick={switching}
          // className="p-3 rounded-md w-40 m-auto  bg-slate-500 hover:bg-slate-400 text-slate-50"
        >
          Sign Up
        </button>
      </div>
    </form>
  ) : (
    <SignUp />
  );
}

export default Login;
