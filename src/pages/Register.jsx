import React from "react";
import {
  Music2,
  Mic2,
  User,
  AtSign,
  Mail,
  Lock,
  ArrowRight,
  Speaker,
  Headphones,
  Radio,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const {
    register,
    errors,
    handleSubmit,
    registerForm,
    setIsListener,
    isListener,
    setValue,
    navigate
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#0d0c10] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/10 blur-[150px] rounded-full top-10 left-10" />
      <div className="absolute w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full bottom-0 right-0" />

      <div className="w-full max-w-[500px] relative z-10">
        {/* Header */}
        <div className="text-center mb-9">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
            MUSICOZ
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Join the sound revolution.
          </p>
        </div>

        {/* Register Card */}

        {/* Register Card */}
        <div className="bg-[#1c1b20] border border-white/5 rounded-2xl p-7 sm:p-9 shadow-2xl shadow-purple-950/20">
          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => {
                setIsListener(true);
                setValue("role", "listener");
              }}
              type="button"
              className={
                isListener
                  ? `flex flex-col items-center justify-center gap-2 py-5 rounded-xl border border-purple-500 bg-[#292337] text-purple-300`
                  : `flex flex-col items-center justify-center gap-2 py-5 rounded-xl border border-white/10 bg-[#1b1a1d] text-gray-400 hover:border-purple-500/50 transition`
              }
            >
              <Music2 size={24} />
              <span className="text-xs font-bold tracking-[2px]">LISTENER</span>
            </button>

            <button
              onClick={() => {
                setIsListener(false);
                setValue("role", "artist");
              }}
              type="button"
              className={
                !isListener
                  ? `flex flex-col items-center justify-center gap-2 py-5 rounded-xl border border-purple-500 bg-[#292337] text-purple-300`
                  : `flex flex-col items-center justify-center gap-2 py-5 rounded-xl border border-white/10 bg-[#1b1a1d] text-gray-400 hover:border-purple-500/50 transition`
              }
            >
              <Mic2 size={24} />
              <span className="text-xs font-bold tracking-[2px]">ARTIST</span>
            </button>
          </div>

          {/* Registration Form */}
          <form className="space-y-3" onSubmit={handleSubmit(registerForm)}>
            <input type="hidden"
            {...register("role")}
            />
            {/* Full Name */}
            <div className="flex items-center gap-3 bg-[#101012] border border-[#39363f] rounded-full px-4 py-3 focus-within:border-purple-500 transition">
              <User size={19} className="text-gray-400 shrink-0" />
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            {/* Username */}
            <div className="flex items-center gap-3 bg-[#101012] border border-[#39363f] rounded-full px-4 py-3 focus-within:border-purple-500 transition">
              <AtSign size={19} className="text-gray-400 shrink-0" />
              <input
                {...register("username", {
                  required: "Username is required",
                })}
                type="text"
                placeholder="Username"
                className="w-full bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-[#101012] border border-[#39363f] rounded-full px-4 py-3 focus-within:border-purple-500 transition">
              <Mail size={19} className="text-gray-400 shrink-0" />
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 bg-[#101012] border border-[#39363f] rounded-full px-4 py-3 focus-within:border-purple-500 transition">
              <Lock size={19} className="text-gray-400 shrink-0" />
              <input
                {...register("password", {
                  required: "Name is required",
                })}
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-full bg-gradient-to-r from-purple-300 to-violet-600 text-[#190d2b] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              Register
              <ArrowRight size={19} />
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <span onClick={()=>navigate("/")} className="text-purple-300 font-semibold cursor-pointer hover:text-purple-200">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
