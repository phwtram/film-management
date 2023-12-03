import { useEffect, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import '../LoginGoogle/LoginGoogle.css'


function LoginGoogle() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleCredentialResponse = useCallback((response) => {
    console.log("Encoded JWT ID token: " + response.credential);

    var decoded = jwtDecode(response.credential);
    console.log("check decode", decoded);
    setUser(decoded);
    document.getElementById("buttonDiv").hidden = true;
    navigate("/home");
}, [setUser, navigate]);

  const handleLogOut = (e) => {
    setUser({});
    document.getElementById("buttonDiv").hidden = false;
    navigate("/");
  };


  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "307756154871-pd41pj61rt7bu6ehulg34l1iooolnogn.apps.googleusercontent.com",
        //cliend_id này đang là của t, m vô google cloud tạo 1 cái mới đi
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    };
  }, [handleCredentialResponse]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="/submit-login" method="post">
        </form>
        <div id="buttonDiv"></div>
        {Object.keys(user).length !== 0 && (
          <button onClick={handleLogOut}>logout</button>
        )}
        {user && (
          <div>
            <h5>{user.name}</h5>
            <h5>{user.picture}</h5>
          </div>
        )}
      </div>
    </div>


  );
}

export default LoginGoogle;
