import { useState } from "react";
import "./styles.scss";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("FormData:");
    console.log("Username:", userName);
    console.log("Password:", userPassword);

    setTimeout(() => {
      setLoading(false);
      setUserName("");
      setUserPassword("");
    }, 2000);
  };

  const handleBackBtn = () => {
    window.history.back();
  };
  return (
    <>
      <button onClick={handleBackBtn} className="back-btn">
        Back
      </button>
      <div className="user-form-main-container">
        <h1>User Form</h1>
        <form onSubmit={handleFormSubmit} className="form-container">
          <input
            name="username"
            value={userName}
            onChange={handleUserNameChange}
            placeholder="name"
          />
          <input
            name="password"
            type="password"
            value={userPassword}
            onChange={handlePasswordChange}
            placeholder="password"
          />
          <button type="submit">
            {loading === true ? "Submiting..." : "submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
