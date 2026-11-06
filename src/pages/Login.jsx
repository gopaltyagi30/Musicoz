import React from "react";
import { Music2, Mail, Lock, Eye, ArrowRight, BarChart3 } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const {navigate,register,loginForm,handleSubmit} = useAuth();
  return (
    <div className="min-h-screen bg-[#101010] text-white flex items-center justify-center px-6 relative overflow-hidden">

      <Music2 className="absolute top-2 left-[38%] text-purple-400/40 w-9 h-9 rotate-12" />
      <BarChart3 className="absolute bottom-10 left-5 text-purple-400/30 w-7 h-7" />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* Left Section */}
        <div className="flex flex-col items-center text-center">

          <div className="w-full max-w-md mb-8">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900"
              alt="Music headphones"
              className="w-full h-48 object-cover rounded-lg opacity-80"
            />
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            MUSICOZ
          </h1>

          <p className="text-gray-300 text-base leading-relaxed">
            Experience high-fidelity sound
            <br />
            tailored to your soul.
          </p>

        </div>

        {/* Right Section */}
        <div className="w-full max-w-md mx-auto bg-[#1b1b1b] border border-[#292929] rounded-xl p-8 md:p-9 shadow-2xl">

          <h2 className="text-2xl font-bold mb-1">
            Welcome Back
          </h2>

          <p className="text-gray-400 text-sm mb-10">
            Sign in to continue your journey.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(loginForm)}>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold tracking-wider text-gray-400 mb-3">
                EMAIL ADDRESS
              </label>

              <div className="flex items-center gap-3 border border-[#303030] rounded-lg px-3 py-3 focus-within:border-purple-500">
                <Mail size={19} className="text-gray-400" />

                <input
                {...register("email")}
                  type="email"
                  placeholder="name@example.com"
                  className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold tracking-wider text-gray-400">
                  PASSWORD
                </label>

              </div>

              <div className="flex items-center gap-3 border border-[#303030] rounded-lg px-3 py-3 focus-within:border-purple-500">
                <Lock size={19} className="text-gray-400" />

                <input
                {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-500"
                />

                <Eye size={19} className="text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-purple-500 cursor-pointer"
              />

              <label htmlFor="remember" className="text-sm text-gray-300 cursor-pointer">
                Remember Me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 py-3.5 rounded-lg font-bold text-sm shadow-lg shadow-purple-500/20 transition duration-300"
            >
              Login <ArrowRight size={18} />
            </button>


          </form>

          {/* Register */}
          <div className="border-t border-[#303030] mt-8 pt-6 text-center text-sm text-gray-400">
            Don't have an account?
           <button onClick={()=>navigate("/register")} className="text-purple-400 font-semibold ml-2 hover:text-purple-300">
              Register
           </button>
          </div>

        </div>
      </div>

      <span className="absolute -bottom-10 right-4 text-[100px] font-black text-white/[0.025] pointer-events-none">
        VIBE
      </span>

    </div>
  );
};

export default Login;