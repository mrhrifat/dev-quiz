import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import CheckBox from "./CheckBox";
import TextInput from "./TextInput";

const Form = ({ children, className, ...rest }) => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [agree, setAgree] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password doesn't match");
    }
  };

  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      <TextInput
        placeholder="Enter name"
        type="text"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <TextInput
        placeholder="Enter email"
        type="email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        placeholder="Enter password"
        type="password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextInput
        placeholder="Confirm password"
        type="password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <CheckBox
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      />
      <Button>
        <span>Submit now</span>
      </Button>

      {error & <span className="error">{error}</span>}

      <div className={classes.info}>
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default Form;
