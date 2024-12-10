import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [type, setType] = useState<string>(""); // Add state for type
  const { addRecord } = useFinancialRecords();
  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Ensure all inputs are valid
    if (!type) {
      alert("Please select a type (Income or Expense).");
      return;
    }
    if (!amount || isNaN(parseFloat(amount))) {
      alert("Please enter a valid amount.");
      return;
    }

    // Create a new record object
    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(date).toISOString(),
      description: description.trim(),
      amount: parseFloat(amount), // Parse amount as a float
      category: category.trim(),
      paymentMethod: paymentMethod.trim(),
      type: type, // Include type
    };

    // Add the record using the context method
    addRecord(newRecord);

    // Reset form fields
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("");
    setPaymentMethod("");
    setType("");
  };

  return (
    <div className="overflow-x-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Add Financial Record
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>
          <select
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="number"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Transportation">Transportation</option>
            <option value="Health and Insurance">Health and Insurance</option>
            <option value="Education">Education</option>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <select
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
            <option value="Cheque">Cheque</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        >
          Add Record
        </button>
      </form>
    </div>
  );
};
