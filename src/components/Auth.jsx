import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "firebase/auth";

import { auth } from "../firebase";
import { assets } from "../assets/assets";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [resetMessage, setResetMessage] = useState("");

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setResetMessage("");

    // Signup validation
    if (!isLogin && password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!isLogin && !agreeToTerms) {
      return setError("You must agree to Terms & Conditions");
    }

    setLoading(true);

    try {
      // LOGIN
      if (isLogin) {
        await setPersistence(
          auth,
          rememberMe ? browserLocalPersistence : browserSessionPersistence
        );

        await signInWithEmailAndPassword(auth, email, password);
      } 
      // SIGNUP
      else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      navigate("/home");
    } catch (err) {
      let message = "Something went wrong";

      switch (err.code) {
        case "auth/invalid-credential":
          message = "Incorrect email or password";
          break;
        case "auth/user-not-found":
          message = "No account found with this email";
          break;
        case "auth/wrong-password":
          message = "Incorrect password";
          break;
        case "auth/invalid-email":
          message = "Invalid email address";
          break;
        default:
          message = "Login failed. Try again";
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // Forgot password
  const handleResetPassword = async () => {
    setError("");
    setResetMessage("");

    if (!email) {
      return setError("Enter your email first");
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError("Failed to send reset email");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">

      <div className="w-[380px] bg-[#121212] p-8 rounded-xl shadow-lg">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src={assets.audiom_logo}
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Welcome back" : "Sign up to start listening"}
        </h1>

        {/* FORM */}
        <form onSubmit={handleAuth} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#1f1f1f] outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#1f1f1f] outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* CONFIRM PASSWORD */}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded bg-[#1f1f1f] outline-none"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          {/* REMEMBER ME */}
          {isLogin && (
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
          )}

          {/* FORGOT PASSWORD */}
          {isLogin && (
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-sm text-blue-400 hover:underline self-start"
            >
              Forgot password?
            </button>
          )}

          {/* TERMS */}
          {!isLogin && (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <p>I agree to Terms & Conditions</p>
            </div>
          )}

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* RESET MESSAGE */}
          {resetMessage && (
            <p className="text-green-500 text-sm">{resetMessage}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="cursor-pointer bg-blue-700 hover:bg-blue-600 py-3 rounded-full font-bold transition"
          >
            {loading ? "Processing..." : isLogin ? "Log In" : "Sign Up"}
          </button>

        </form>

        {/* SWITCH */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}

          <span
            className="text-white underline cursor-pointer hover:text-green-400"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Auth;