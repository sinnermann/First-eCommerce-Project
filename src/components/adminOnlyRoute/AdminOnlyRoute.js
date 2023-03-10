import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "cap@avengers.com") {
    return children;
  }
  return (
    <section style={{ height: "80vh" }}>
      <div className="container">
        <h2>Access Denied</h2>
        <p>This pages is to be seen by ADMIN only!!!</p>
        <br />
        <Link to="/">
          <button className="--btn">&larr; Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "cap@avengers.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
