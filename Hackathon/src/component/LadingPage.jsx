import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

// Sample categories data
const categories = [
  { id: 1, name: "Personal Loans", subcategories: ["Medical", "Education", "Travel"] },
  { id: 2, name: "Business Loans", subcategories: ["Startup", "Expansion", "Equipment"] },
  { id: 3, name: "Home Loans", subcategories: ["Construction", "Renovation", "Purchase"] },
];

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleNavigate = () => {
    navigate("/loancalculation");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      // Show a loading state
      setMessage("Registering...");
  
      // Post request to backend
      const response = await axios.post("/api/register", formData);
  
      // Check response and set success message
      if (response.data.success) {
        setMessage("Registration Successful!");
        closeModal(); // Close the modal after success
      } else {
        setMessage(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
  
      // Display error message
      setMessage(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };
  
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saylani Micro Finance App</h1>
        </div>
      </header>

      {/* Button below Header */}
      <div className="container mx-auto text-center mt-6">
        <button
          onClick={openModal}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Open Registration
        </button>
      </div>

      {/* Main Section */}
      <main className="flex-grow">
        <section className="container mx-auto grid grid-cols-1 mt-15 md:grid-cols-3 gap-6 py-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold text-green-600 mb-3">{category.name}</h2>
              <ul className="mb-4">
                {category.subcategories.map((sub, idx) => (
                  <li key={idx} className="text-gray-700 mb-1">
                    - {sub}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleNavigate}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Go to Loan Calculation
              </button>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Loan Calculator. All Rights Reserved.</p>
          <p>
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a> |{" "}
            <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
          </p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Register
              </button>
            </form>
            {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
            <button
              onClick={closeModal}
              className="mt-4 w-full p-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
