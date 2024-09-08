const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h4>Homepage of the password reset application</h4>
              </div>
              <div className="card-body">
                <p>Welcome to the password reset app</p>
                <p className="text-muted">
                  This is a password reset app built with the MERN stack! It
                  allows users to register, login, and reset their passwords by 
                  sending an email to the registered user's email address.
                </p>
                <p className="text-muted">
                  Please register with valid user credentials to use the forgot password feature!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
