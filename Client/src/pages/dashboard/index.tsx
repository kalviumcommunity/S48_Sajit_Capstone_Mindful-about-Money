import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
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

          <div className="bg-white shadow-2xl rounded-2xl transform transition-all hover:scale-[1.02] hover:shadow-3xl">
            <FinancialRecordList />
          </div>
        </div>
      </div>
    </div>
  );
};
