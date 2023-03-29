import React from "react";
import login from "../images/Login.jpg";
import logUi from "../images/loginUI.png";

const Login = () => {
  return (
    <div style={{ backgroundImage: `url(${login})` }} className="App">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-full lg:flex-row gap-10 justify-around">
          <div className=" max-w-xl">
            <img src={logUi} alt="" />
          </div>
          <div className="">
            <h1 className="text-4xl font-bold  text-slate-200 pb-10">
              Login now!
            </h1>
            <div className="card flex-shrink-0 w-80 max-w-md  shadow-2xl bg-black bg-opacity-40 ">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-slate-200">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
