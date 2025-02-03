import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false); // Success state
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      setSuccess(false); // Reset success state before submitting
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        dispatch(signInFailure(data.message || "Sign-in failed"));
        return;
      }

      dispatch(signInSuccess(data)); // Pass full response data
      setSuccess(true); // Set success to true
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-center font-semibold my-7 space-x-2">
        <span className="text-green-400">Sign</span>
        <span className="text-blue-950">In</span>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          required
        />
        <button
          disabled={loading}
          className="bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80"
        >
          {loading ? <ClipLoader size={20} color="#ffffff" /> : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 justify-center text-base">
        <p>Haven't an Account?</p>
        <Link to="/signup">
          <span className="text-green-600 underline">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      {success && (
        <p className="text-green-500 mt-5 text-xl font-bold">
          Successfully signed in!
        </p>
      )}
    </div>
  );
}
