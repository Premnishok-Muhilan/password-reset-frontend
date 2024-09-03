const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h4>Home</h4>
              </div>
              <div className="card-body">
                <p>Welcome to the Todo App</p>
                <p className="text-muted">
                  This is a simple todo app built with React and NodeJS. It
                  allows users to register, login, and view their todos. The
                  application is built with React, NodeJS, Express, and MongoDB.
                </p>
                <p className="text-muted">
                  Please register or login to view your todos.
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
