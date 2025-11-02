import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <section>
      <Container>
        <div className="my-10">
          <title>Smart Deals | Register</title>

          <div className="flex flex-col items-center gap-8">
            <h2 className="text-5xl font-bold">Sign<span className="text-accent">Up</span></h2>

            <form>
              <fieldset className="fieldset p-6 w-[335px] bg-white rounded-lg md:w-[500px]">
                {/* User Name */}
                <label className="label text-primary">Name</label>
                <input
                  type="text"
                  name="userName"
                  className="input py-6 w-full bg-base-300 rounded-lg"
                  placeholder="Your name"
                  required
                />

                {/* User Photo URL */}
                <label className="label text-primary mt-3">Photo URL</label>
                <input
                  type="text"
                  name="userPhoto"
                  className="input mb-3 py-6 w-full bg-base-300 rounded-lg"
                  placeholder="Photo URL" // https://i.ibb.com/gF673z54/Budget-Buddy.webp
                  required
                />

                {/* Email */}
                <label className="label text-primary">Email</label>
                <input
                  // onChange={handleEmailChange}
                  type="email"
                  name="email"
                  // value={emailValue}
                  className="input py-6 w-full bg-base-300 rounded-lg"
                  placeholder="Email"
                  required
                />

                {/* Password */}
                <label className="label text-primary mt-4">Password</label>
                <div className="relative">
                  <input
                    // type={showPassword ? "text" : "password"}
                    name="password"
                    className="input py-6 w-full bg-base-300 rounded-lg"
                    placeholder="Password"
                    required
                  />
                  <button
                    // onClick={handleShowPassword}
                    className="absolute right-6 bottom-3 text-xl hover:cursor-pointer"
                  >
                    {/* {showPassword ? <FaEye /> : <FaEyeSlash />} */}
                  </button>
                </div>

                {/* Forget Password */}
                <div className="mt-2">
                  <Link
                    to={"/forgot-password"}
                    // state={{ email: emailValue }}
                    className="link-hover text-base text-primary"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* {error && (
                  <p className="mt-2 font-semibold textarea-md text-red-700! text-center">
                    {error}
                  </p>
                )} */}

                {/* SignUp Button */}
                <button
                  type="submit"
                  className="btn btn-neutral gradAccentClr gradAccentClrHover mt-4 py-6 w-full"
                >
                  Register
                </button>

                {/* SignUp With Google Button */}
                <button
                  type="submit"
                  className="btn mt-4 py-6 bg-white text-[#122B45] border-[#e5e5e5] w-full transition-colors duration-200 ease-linear hover:bg-primary hover:text-accent"
                >
                  <FaGoogle></FaGoogle>
                  SignUp With Google
                </button>

                <div className="mt-3 text-center">
                  <p className="textarea-md">
                    Already have an account? Please
                    <Link
                      to={"/login"}
                      className="link-hover ml-1 text-primary"
                    >
                      LogIn
                    </Link>
                  </p>
                </div>
              </fieldset>
            </form>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
