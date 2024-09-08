import { useDispatch, useSelector } from "react-redux";
import {
  selectEmail,
  selectPassword,
  setEmail,
  setPassword,
} from "../features/users/loginSlice";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

export default function ForgotPassword() {
  const email = useSelector(selectEmail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // perform the login
    userServices
      .forgotPassword({ username: email })
      .then((response) => {
        alert(response.data.message);

        // clear the form
        dispatch(setEmail(""));

        setTimeout(() => {
          navigate("/reset-password");
        }, 500);
        // navigate("/dashboard");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h4>Forgot Password</h4>
            </div>
            <div className="card-body">
              {/* <form onSubmit={handleLogin}> */}
              <form onSubmit={handleForgotPassword}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send verification link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
