import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  // Calculate totals for income and expenses
  const { monthlyIncome, monthlyExpenses } = useMemo(() => {
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate(),
    );
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const monthlyIncome = records
      .filter(
        (record) =>
          new Date(record.date) > oneMonthAgo && record.type === "Income",
      )
      .reduce((sum, record) => sum + record.amount, 0);

    const monthlyExpenses = records
      .filter(
        (record) =>
          new Date(record.date) > oneMonthAgo && record.type === "Expense",
      )
      .reduce((sum, record) => sum + record.amount, 0);

    const weeklyIncome = records
      .filter(
        (record) =>
          new Date(record.date) > oneWeekAgo && record.type === "Income",
      )
      .reduce((sum, record) => sum + record.amount, 0);

    const weeklyExpenses = records
      .filter(
        (record) =>
          new Date(record.date) > oneWeekAgo && record.type === "Expense",
      )
      .reduce((sum, record) => sum + record.amount, 0);

    return { monthlyIncome, monthlyExpenses };
  }, [records]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Mindful About Money
          </h1>
          <p className="text-2xl text-gray-600 font-medium">
            Welcome, {user?.firstName}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="rounded-2xl transform transition-all hover:scale-[1.02] hover:shadow-3xl">
            <FinancialRecordForm />
          </div>

          {/* Totals Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Monthly Income */}
            <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Monthly Income
                </h3>
                <p className="text-2xl font-bold text-green-600">
                  +${monthlyIncome.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Monthly Expenses */}
            <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Monthly Expenses
                </h3>
                <p className="text-2xl font-bold text-red-600">
                  -${Math.abs(monthlyExpenses).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl rounded-2xl transform transition-all hover:scale-[1.02] hover:shadow-3xl">
            <FinancialRecordList />
          </div>
        </div>
      </div>
    </div>
  );
};
