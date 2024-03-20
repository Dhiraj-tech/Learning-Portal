import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import http from "../http";
import { setInState } from "../lib";

export const Contact = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    http
      .post("contacts", form)
      .then(() => {
        navigate("/contacts");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact">
      <div className="row">
        <div className="image">
          <img src="contact-img.svg" alt="" />
        </div>

        <form action="" method="post">
          <h3>get in touch</h3>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            required
            maxlength="50"
            className="box"
          />
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            required
            maxlength="50"
            className="box"
          />
          <input
            type="number"
            placeholder="enter your number"
            name="number"
            required
            maxlength="50"
            className="box"
          />
          <textarea
            name="msg"
            className="box"
            placeholder="enter your message"
            required
            maxlength="1000"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="send message"
            className="inline-btn"
            name="submit"
          />
        </form>
      </div>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-phone"></i>
          <h3>phone number</h3>
          <a href="#">+977-1254224</a>
        </div>

        <div className="box">
          <i className="fas fa-envelope"></i>
          <h3>email address</h3>
          <a href="#">learningportal@gmail.com</a>
        </div>

        <div className="box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>office address</h3>
          <a href="#">
          New Baneshwor, kathmandu, Nepal
          </a>
        </div>
      </div>
    </section>
  );
};
