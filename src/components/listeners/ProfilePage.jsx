
import React, { useState } from "react";
import {
  UserRound,
  Mail,
  AtSign,
  LockKeyhole,
  Eye,
  EyeOff,
  Pencil,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const ProfilePage = () => {
  // Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    password: user?.password || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Update logged-in user in localStorage
    const updatedUser = {
      ...user,
      ...formData,
    };

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    // Update registered users list too
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const updatedUsers = registeredUsers.map((item) =>
      item.email === user.email ? updatedUser : item
    );

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(updatedUsers)
    );

    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0C10] text-white px-5 md:px-10 py-10">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-purple-400 text-xs uppercase tracking-[3px]">
            Your personal space
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-3">
            My Profile<span className="text-purple-500">.</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account and personal information.
          </p>
        </div>

        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#211B2D] to-[#17151D] border border-[#393044] rounded-3xl p-7 md:p-10 mb-7">

          <div className="flex flex-col sm:flex-row items-center gap-6">

            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center">
              <UserRound size={42} className="text-purple-400" />
            </div>

            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-bold">
                {formData.name || "Listener"}
              </h2>

              <p className="text-gray-400 mt-1">
                @{formData.username || "username"}
              </p>

              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-3 py-1.5 rounded-full text-xs mt-4">
                <Headphones size={14} />
                Music Lover / Listener
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl text-sm font-medium transition"
            >
              <Pencil size={16} />
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>

          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-[#17151D] border border-[#292530] rounded-3xl p-7 md:p-9">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold">
                Personal Information
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Your account details
              </p>
            </div>

            <ShieldCheck className="text-purple-400" size={25} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Full Name
              </label>

              <div className="flex items-center gap-3 bg-[#211E29] border border-[#393044] rounded-xl px-4">
                <UserRound size={18} className="text-purple-400" />

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-transparent py-4 outline-none text-white disabled:opacity-80"
                  placeholder="Your name"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Username
              </label>

              <div className="flex items-center gap-3 bg-[#211E29] border border-[#393044] rounded-xl px-4">
                <AtSign size={18} className="text-purple-400" />

                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-transparent py-4 outline-none text-white disabled:opacity-80"
                  placeholder="Your username"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Email Address
              </label>

              <div className="flex items-center gap-3 bg-[#211E29] border border-[#393044] rounded-xl px-4">
                <Mail size={18} className="text-purple-400" />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-transparent py-4 outline-none text-white disabled:opacity-80"
                  placeholder="Your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Password
              </label>

              <div className="flex items-center gap-3 bg-[#211E29] border border-[#393044] rounded-xl px-4">
                <LockKeyhole size={18} className="text-purple-400" />

                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-transparent py-4 outline-none text-white disabled:opacity-80"
                  placeholder="Your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end mt-8">
              <button
                onClick={handleSave}
                className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-xl font-medium transition"
              >
                Save Changes
              </button>
            </div>
          )}

        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-600 text-xs mt-8">
          Your music journey, your personal space. Made for you by Musicoz.
        </p>

      </div>
    </div>
  );
};

export default ProfilePage;
