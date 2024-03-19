import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { intoStorage, setInState } from "../lib";
import http from "../http";
import { useDispatch } from "react-redux";
import { setUser } from "../store";
import { toast } from "react-toastify";

export const Login = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    http
      .post("login", form)
      .then(({ data }) => {
        if (["Customer"].includes(data.user.type)) {
          intoStorage("user_token", data.token, remember);
          dispatch(setUser(data.user));
          navigate("/");
        } else {
          toast.error("Access denied");
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <section className="form-container">
      <form action="" method="post" enctype="multipart/form-data">
        <h3>login now</h3>
        <p>
          your email <span>*</span>
        </p>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          required
          maxlength="50"
          className="box"
        />
        <p>
          your password <span>*</span>
        </p>
        <input
          type="password"
          name="pass"
          placeholder="enter your password"
          required
          maxlength="20"
          className="box"
        />
        <input type="submit" value="login new" name="submit" className="btn" />
        <div className="mt-4 text-center">
          <p className="mb-0">
            Don't have an account ? <Link to="/register"> Sign Up </Link>
          </p>
        </div>
      </form>
    </section>
  );
};
