import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/bg_video.mp4";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isLogin]);

  const handleAuthAction = (e) => {
    e.preventDefault();

    if (isLogin) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const existingUser = users.find((u) => u.email === email);

      if (existingUser) {
        alert("Email already exists");
        return;
      }

      users.push({
        email,
        password,
      });

      localStorage.setItem("users", JSON.stringify(users));

      alert("Account created successfully!");
      setIsLogin(true);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <form
        onSubmit={handleAuthAction}
        className="relative z-10 w-full max-w-sm p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col gap-4"
      >
        <h2 className="text-white text-3xl font-bold text-center">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/20 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/20 outline-none"
        />

        {isLogin && (
          <p className="text-xs text-white text-right cursor-pointer hover:underline">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-white cursor-pointer hover:underline"
        >
          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Log In"}
        </p>
      </form>
    </div>
  );
};

export default Auth;