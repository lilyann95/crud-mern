import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/user.js";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!form.email || !form.password) return;
      const formData = {
        email: form.email,
        password: form.password,
      };

      const res = await loginUser(formData);
      const { accessToken } = res.data;

      localStorage.setItem("token", accessToken);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.error("Login failed:", err.response.data);
      } else {
        console.error("Error logging in:", err.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto border border-gray-400 rounded-4xl w-full sm:w-1/2 mt-20 overflow-hidden">
      <div className="text-center bg-gray-400 py-4 mb-4 w-full rounded-t-4xl">
        <h1 className="font-bold text-2xl">Book Management Login Form</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        id="registration-form"
        className="w-full px-5 pt-5 pb-2"
      >
        <div className="flex flex-col mb-5 px-2">
          <p className="font-bold text-medium text-gray-500 ml-2">
            Email Address:
          </p>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border border-gray-400 px-3 py-2 rounded-full w-full"
          />
        </div>
        <div className="flex flex-col px-2">
          <p className="font-bold text-medium text-gray-500 ml-2">Password:</p>
          <input
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border border-gray-400 px-3 py-2 rounded-full w-full"
          />
        </div>
        <div className="flex items-center justify-between px-2">
          <Link to="/forgot-password">
            <p className="text-blue-500">Forgot password?</p>
          </Link>
          <Link to="/register">
            <p className="text-blue-500">Create account</p>
          </Link>
        </div>
        <div className="flex items-center justify-center my-5">
          <button
            type="submit"
            className="font-bold text-md border border-gray-500 px-7 py-3 rounded-xl hover:bg-black hover:text-white transition duration-500 cursor-pointer"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
