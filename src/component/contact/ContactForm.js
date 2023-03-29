import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getDatabase,
  ref,
  onValue,
  push,
  remove,
  set,
} from "firebase/database";

const ContactForm = () => {
  const db = getDatabase();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  let handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  let handleNumber = (e) => {
    setNumber(e.target.value);
    setNameError("");
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  let handleSubject = (e) => {
    setSubject(e.target.value);
    setSubjectError("");
  };

  let handleMessage = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Name is required");
    } else {
      if (name.length <= 2) {
        setNameError("Name must be 2 character");
      }
    }
    if (!number) {
      setNumberError("Email is required");
    } else {
      if (!/^(?=.*[0-9])/.test(number)) {
        setNumberError("valid number is required");
      }
    }
    if (!email) {
      setEmailError("Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError("valid email is required");
      }
    }
    if (!subject) {
      setSubjectError("Subject is required");
    }
    if (!message) {
      setMessageError("Message is required");
    }
    if (
      name &&
      number &&
      email &&
      subject &&
      message &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /^(?=.*[0-9])/.test(number)
    ) {
      set(push(ref(db, "contact/")), {
        name: name,
        number: number,
        email: email,
        subject: subject,
        message: message,
      })
        .then(() => {
          toast("Message Send SuccessFull");
        })
        .then(() => {
          setName("");
          setNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        });
    }
  };

  return (
    <div
      data-aos="fade-up-right"
      data-aos-duration="1500"
      className="contact-card p-5 lg:p-10 w-full lg:w-3/5 aos-init aos-animate"
    >
      <form className="" onSubmit={handleSubmit}>
        <ToastContainer position="top-center" autoClose={2000} />
        <div className="mb-8 flex flex-col lg:flex-row gap-10">
          <div className="form-control w-full">
            <label className="label">Full Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full focus:border-secondary"
              onChange={handleName}
              value={name}
            />
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          </div>
          <div className="form-control w-full">
            <label className="label">Contact Number</label>
            <input
              name="phone"
              type="number"
              className="input input-bordered w-full focus:border-secondary"
              onChange={handleNumber}
              value={number}
            />
            <p className="text-red-500 text-sm mt-1">{numberError}</p>
          </div>
        </div>
        <div className="mb-8 form-control w-full">
          <label className="label">Email</label>
          <input
            name="email"
            type="text"
            className="input input-bordered w-full focus:border-secondary"
            onChange={handleEmail}
            value={email}
          />
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        </div>
        <div className="mb-8 form-control w-full">
          <label className="label">Subject</label>
          <input
            name="subject"
            type="text"
            className="input input-bordered w-full focus:border-secondary"
            onChange={handleSubject}
            value={subject}
          />
          <p className="text-red-500 text-sm mt-1">{subjectError}</p>
        </div>
        <div className="mb-8 form-control">
          <label className="label">Your Message</label>
          <textarea
            name="message"
            className="textarea textarea-bordered focus:border-secondary h-36"
            onChange={handleMessage}
            value={message}
          ></textarea>
          <p className="text-red-500 text-sm mt-1">{messageError}</p>
        </div>
        <button className="send-mail-button w-full" type="submit">
          <span> Send Mail</span> <i className="fa-solid fa-chevron-right"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
