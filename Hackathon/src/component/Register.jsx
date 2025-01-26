import React, { useState } from "react";


const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", cnic: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = Register(formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message || "Something went wrong!");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full p-2 border"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full p-2 border"
        />
        <input
          type="text"
          placeholder="CNIC"
          value={formData.cnic}
          onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
          className="block w-full p-2 border"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
