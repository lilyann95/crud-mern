import React, { useState } from "react";
import { registerUser } from "../../api/user.js";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    preferredName: "",
    email: "",
    password: "",
    addressLine: "",
    zipCode: "",
    city: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handlePassword = (e) => {
    let passwrdString = e.target.value;

    if (error.password && passwrdString.length >= 8) {
      setError({ ...error, password: "" });
    }
  };

  const handleEmail = (e) => {
    let emailString = e.target.value;

    if (error.email && emailString.length >= 8) {
      setError({ ...error, email: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.firstName ||
      !form.lastName ||
      !form.preferredName ||
      !form.email ||
      !form.password ||
      !form.addressLine ||
      !form.zipCode ||
      !form.city
    )
      return;

    let newErrors = {};
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (form.password.length < 8)
      newErrors.password = "Password should have atleast 8 characters";
    setError(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const formData = {
        firstName: form.firstName,
        lastName: form.lastName,
        userName: form.preferredName,
        email: form.email,
        password: form.password,
        addressLine: form.addressLine,
        zipCode: form.zipCode,
        city: form.city,
      };

      const registered = await registerUser(formData);

      if (!registered.data.success) {
        setError(registered.data.message || "Error registering user");
        return;
      }

      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log("Error response", err.response);
        setError({
          ...error,
          email: err.response.data.message || "Error registering the user.",
        });
        console.log(error);
      } else {
        console.log("Network error", err);
        setError(`Something went wrong. Please try again later.`);
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto border border-gray-400 rounded-4xl w-full sm:w-[60%] my-5 overflow-hidden">
      <div className="text-center bg-gray-400 py-4 mb-4 w-full rounded-t-4xl">
        <h1 className="font-bold text-2xl">
          Book Management Registration Form
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        id="registration-form"
        className="w-full px-5 pt-5 pb-2"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="w-full sm:w-1/2 px-2">
            <p className="font-bold text-medium text-gray-500 ml-2">
              First Name:
            </p>
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="border border-gray-400 px-3 py-2 rounded-full w-full"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <p className="font-bold text-medium text-gray-500 ml-2">
              Last Name:
            </p>
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="border border-gray-400 px-3 py-2 rounded-full w-full"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mb-3 px-2">
          <p className="font-bold text-medium text-gray-500 ml-2">
            Preferred Name:
          </p>
          <input
            type="text"
            placeholder="Preferred Name"
            value={form.preferredName}
            onChange={(e) =>
              setForm({ ...form, preferredName: e.target.value })
            }
            className="border border-gray-400 px-3 py-2 rounded-full w-full"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-full sm:w-1/2 px-2">
            <p className="font-bold text-medium text-gray-500 ml-2">
              Email Address:
            </p>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                handleEmail(e);
              }}
              className="border border-gray-400 px-3 py-2 rounded-full w-full"
              required
            />
            {error.email && (
              <p className="font-normal text-xs text-red-500 ml-2">
                {error.email}
              </p>
            )}
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <p className="font-bold text-medium text-gray-500 ml-2">
              Password:
            </p>
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                handlePassword(e);
              }}
              className="border border-gray-400 px-3 py-2 rounded-full w-full"
              required
            />
            {error.password && (
              <p className="font-normal text-xs text-red-500 ml-2">
                {error.password}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-3 px-2">
          <p className="font-bold text-medium text-gray-500 ml-2">
            AddressLine:
          </p>
          <input
            type="text"
            placeholder="Address Line"
            value={form.addressLine}
            onChange={(e) => setForm({ ...form, addressLine: e.target.value })}
            className="border border-gray-400 px-3 py-2 rounded-full w-full"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-full sm:w-1/2 px-2">
            <p className="font-bold text-medium text-gray-500 ml-2">
              Zip Code:
            </p>
            <input
              type="number"
              placeholder="Zip Code"
              value={form.zipCode}
              onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
              className="border border-gray-400 px-3 py-2 rounded-full w-full"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <p className="font-bold text-medium text-gray-500 ml-2">City:</p>
            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="border border-gray-400 px-3 py-2 rounded-full w-full"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-center mb-2">
          <button
            type="submit"
            className="font-bold text-md border border-gray-500 px-7 py-3 rounded-xl hover:bg-black hover:text-white transition duration-500 cursor-pointer"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
