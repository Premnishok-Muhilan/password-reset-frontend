import { useDispatch, useSelector } from "react-redux";
import {
  selectPasswordResetToken,
  selectPassword,
  selectConfirmPassword,
  setPasswordResetToken,
  setPassword,
  setConfirmPassword,
} from "../features/users/loginSlice";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

export default function ResetPassword() {
  const passwordResetToken = useSelector(selectPasswordResetToken);
  const password = useSelector(selectPassword);
  const confirmPassword = useSelector(selectConfirmPassword);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResetPassword = (e) => {
    e.preventDefault();

    // perform the login
    userServices
      .resetPassword({ password: password, confirmPassword: confirmPassword, passwordResetToken:passwordResetToken})
      .then((response) => {
        alert(response.data.message);

        // clear the form
        dispatch(setPasswordResetToken(""));
        dispatch(setPassword(""));
        dispatch(setConfirmPassword(""));

        setTimeout(() => {
          navigate("/login");
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
              <h4>Reset Password</h4>
            </div>
            <div className="card-body">
              {/* <form onSubmit={handleLogin}> */}
              <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Password reset token
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={passwordResetToken}
                    onChange={(e) =>
                      dispatch(setPasswordResetToken(e.target.value))
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="email"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="email"
                    value={confirmPassword}
                    onChange={(e) =>
                      dispatch(setConfirmPassword(e.target.value))
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Reset password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
