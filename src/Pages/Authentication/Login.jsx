import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Dev || Login</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/r0RVK4R/loginImg.jpg)",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="w-[600px] text-center text-neutral-content">
          <div className="">
            <label className="text-4xl font-bold">Login Now!</label>
            <div className="flex-col w-full">
              <div className="w-full shadow-2xl">
                <form className="card-body w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-outline btn-primary">
                      Login
                    </button>
                    <h3 className="mt-10 text-black font-semibold">
                      New Here ?
                      <Link
                        to={"/register"}
                        className="font-bold text-blue-900 btn btn-ghost"
                      >
                        Register
                      </Link>
                    </h3>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
