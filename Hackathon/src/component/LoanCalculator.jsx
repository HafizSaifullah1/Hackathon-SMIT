import React, { useState } from "react";

const categories = {
  "Personal Loans": ["Medical", "Education", "Travel"],
  "Business Loans": ["Startup", "Expansion", "Equipment"],
  "Home Loans": ["Construction", "Renovation", "Purchase"],
};

const LoanCalculator = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const rate = 0.05; // Example interest rate
    const total = parseFloat(initialDeposit) + parseFloat(initialDeposit) * rate * parseInt(loanPeriod);
    setResult(total);
  };

  return (
    <section className="bg-gradient-to-r from-green-700 to-blue-400 p-8 rounded-lg shadow-xl max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-semibold text-white text-center mb-6">Loan Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-white border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Subcategory</label>
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="w-full bg-white border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!selectedCategory}
          >
            <option value="">Select Subcategory</option>
            {selectedCategory &&
              categories[selectedCategory].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Initial Deposit</label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            className="w-full bg-white border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Loan Period (Years)</label>
          <select
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            className="w-full bg-white border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Period</option>
            {[1, 2, 3, 4, 5].map((year) => (
              <option key={year} value={year}>
                {year} Year{year > 1 && "s"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculateLoan}
        className="mt-6 w-full bg-green-800 text-white py-3 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
      >
        Calculate Loan
      </button>

      {result && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-md">
          <p className="text-lg font-semibold">Total Loan Amount: ${result.toFixed(2)}</p>
        </div>
      )}
    </section>
  );
};
export default LoanCalculator