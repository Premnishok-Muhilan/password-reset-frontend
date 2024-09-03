import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectPassword, setEmail, setPassword } from "../features/users/loginSlice";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";


const Login = () => {

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // perform the login
        userServices.login({ username: email, password })
            .then(response => {
                alert(response.data.message);
                
                // clear the form
                dispatch(setEmail(''));
                dispatch(setPassword(''));

                setTimeout(() => {
                    navigate('/dashboard');
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }

  return (
      <div className="container mt-5">
            <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="email" 
                                      value={email}
                                        onChange={(e) => dispatch(setEmail(e.target.value))}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="password" 
                                      value={password}
                                        onChange={(e) => dispatch(setPassword(e.target.value))}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
  )
}

export default Login;