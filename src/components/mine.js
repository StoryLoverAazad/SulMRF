import React from 'react'
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mine = () => {
   const { logOut, user } = useUserAuth();
   const navigate = useNavigate();

   const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="p-4 box mt-3 text-center">
        <h2>Hello Welcome </h2><br />
        {/* let user = firebase.auth().currentUser; */}
        {user && user.phoneNumber}
        <div style={{display: user.phoneNumber===+919120496634 ? 'block': 'none'}}>
          <div className="d-grid gap-2 mt-3">
            <Link to="/admin"><Button variant="success" type="Submit">
              Admin Login
            </Button></Link>
          </div>
          </div>
          <div style={{display: (user.phoneNumber===+919120496634)? "block": "none"}}>Hello</div>
      </div>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Mine;