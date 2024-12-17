import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, } from "recharts";
import { TrendingUpIcon, TrendingDownIcon, WalletIcon, CreditCardIcon, BarChartIcon, PlusIcon, ListIcon, } from "lucide-react";
// Assuming these components exist from your previous implementation
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-record-context";
export const Dashboard = () => {
    const { user } = useUser();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { records, addRecord } = useFinancialRecords();
    const [chartType, setChartType] = useState("income");
    const [isFormOpen, setIsFormOpen] = useState(false);
    // Advanced financial calculations
    const { monthlyIncome, monthlyExpenses, netCashFlow, chartData,
    // incomeBreakdown,
    // expenseBreakdown,
     } = useMemo(() => {
        const now = new Date();
        const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 6, 1);
        // Group records by month
        const monthlyData = {};
        records
            .filter((record) => new Date(record.date) >= sixMonthsAgo)
            .forEach((record) => {
            const date = new Date(record.date);
            const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = {
                    month: monthKey,
                    income: 0,
                    expenses: 0,
                };
            }
            if (record.type === "Income") {
                monthlyData[monthKey].income += record.amount;
            }
            else {
                monthlyData[monthKey].expenses += record.amount;
            }
        });
        // Convert to chart-friendly format
        const chartData = Object.values(monthlyData)
            .sort((a, b) => {
            const [aYear, aMonth] = a.month.split("-").map(Number);
            const [bYear, bMonth] = b.month.split("-").map(Number);
            return aYear - bYear || aMonth - bMonth;
        })
            .map((data) => ({
            ...data,
            monthName: new Date(Date.parse(`${data.month}-01`)).toLocaleString("default", { month: "short" }),
        }));
        // Calculate totals
        const monthlyIncome = chartData.reduce((sum, item) => sum + item.income, 0);
        const monthlyExpenses = chartData.reduce((sum, item) => sum + item.expenses, 0);
        const netCashFlow = monthlyIncome - monthlyExpenses;
        // Income and Expense Breakdowns
        const incomeBreakdown = records
            .filter((r) => r.type === "Income")
            .reduce((acc, record) => {
            acc[record.category] = (acc[record.category] || 0) + record.amount;
            return acc;
        }, {});
        const expenseBreakdown = records
            .filter((r) => r.type === "Expense")
            .reduce((acc, record) => {
            acc[record.category] = (acc[record.category] || 0) + record.amount;
            return acc;
        }, {});
        return {
            monthlyIncome,
            monthlyExpenses,
            netCashFlow,
            chartData,
            incomeBreakdown,
            expenseBreakdown,
        };
    }, [records]);
    return (_jsx("div", { className: 'min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16 px-4', children: _jsxs("div", { className: 'max-w-7xl mx-auto space-y-8', children: [_jsxs("div", { className: 'text-center space-y-4', children: [_jsxs("h1", { className: 'text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 animate-gradient-x tracking-tight', children: ["Welcome, ", user?.firstName] }), _jsx("p", { className: 'text-xl md:text-2xl text-slate-600 font-medium tracking-wide', children: "Let's take control of your financial journey today" })] }), _jsxs("div", { className: 'grid md:grid-cols-3 gap-6', children: [_jsxs("div", { className: 'md:col-span-2 bg-white border-2 border-emerald-100 rounded-3xl p-6 shadow-2xl hover:shadow-emerald-200/50 transition-all duration-300 transform hover:-translate-y-2', children: [_jsxs("div", { className: 'flex justify-between items-center mb-6', children: [_jsxs("h2", { className: 'text-2xl font-bold text-emerald-800 flex items-center', children: [_jsx(BarChartIcon, { className: 'mr-3 text-emerald-600' }), "Financial Trajectory"] }), _jsxs("div", { className: 'flex space-x-2 bg-emerald-50 rounded-full p-1', children: [_jsx("button", { onClick: () => setChartType("income"), className: `px-4 py-2 rounded-full text-sm font-medium transition ${chartType === "income"
                                                        ? "bg-emerald-600 text-white shadow-lg"
                                                        : "text-emerald-800 hover:bg-emerald-100"}`, children: "Income" }), _jsx("button", { onClick: () => setChartType("expenses"), className: `px-4 py-2 rounded-full text-sm font-medium transition ${chartType === "expenses"
                                                        ? "bg-emerald-600 text-white shadow-lg"
                                                        : "text-emerald-800 hover:bg-emerald-100"}`, children: "Expenses" })] })] }), _jsx("div", { className: 'w-full h-80', children: _jsx(ResponsiveContainer, { width: '100%', height: '100%', children: _jsxs(LineChart, { data: chartData, children: [_jsx(CartesianGrid, { strokeDasharray: '3 3', stroke: '#99f6e4', strokeOpacity: 0.5 }), _jsx(XAxis, { dataKey: 'monthName', stroke: '#0d9488', strokeOpacity: 0.7 }), _jsx(YAxis, { stroke: '#0d9488', strokeOpacity: 0.7 }), _jsx(Tooltip, { contentStyle: {
                                                        backgroundColor: "#f0fdf4",
                                                        border: "none",
                                                        borderRadius: "12px",
                                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                                    } }), _jsx(Line, { type: 'monotone', dataKey: chartType === "income" ? "income" : "expenses", stroke: '#10b981', strokeWidth: 3, dot: {
                                                        r: 6,
                                                        fill: "#059669",
                                                        stroke: "white",
                                                        strokeWidth: 2,
                                                    }, activeDot: {
                                                        r: 8,
                                                        fill: "#047857",
                                                        stroke: "white",
                                                        strokeWidth: 3,
                                                    } })] }) }) })] }), _jsxs("div", { className: 'bg-white border-2 border-cyan-100 rounded-3xl p-6 shadow-2xl hover:shadow-cyan-200/50 transition-all duration-300 transform hover:-translate-y-2', children: [_jsxs("div", { className: 'flex justify-between items-center mb-4', children: [_jsxs("h2", { className: 'text-2xl font-bold text-cyan-800 flex items-center', children: [_jsx(WalletIcon, { className: 'mr-3 text-cyan-600' }), "Financial Pulse"] }), _jsx("button", { onClick: () => setIsFormOpen(!isFormOpen), className: 'bg-cyan-50 text-cyan-800 hover:bg-cyan-100 rounded-full p-2 transition', children: isFormOpen ? _jsx(ListIcon, {}) : _jsx(PlusIcon, {}) })] }), isFormOpen ? (_jsx("div", { className: 'space-y-4', children: _jsx(FinancialRecordForm, {}) })) : (_jsxs("div", { className: 'space-y-4', children: [_jsx("div", { className: 'bg-emerald-50 rounded-xl p-4 border border-emerald-100 hover:shadow-lg transition', children: _jsxs("div", { className: 'flex justify-between items-center', children: [_jsxs("div", { className: 'flex items-center', children: [_jsx(TrendingUpIcon, { className: 'text-emerald-600 mr-2' }), _jsx("h3", { className: 'text-lg font-semibold text-emerald-800', children: "Total Income" })] }), _jsxs("p", { className: 'text-2xl font-black text-emerald-700', children: ["\u20B9", monthlyIncome.toLocaleString()] })] }) }), _jsx("div", { className: 'bg-rose-50 rounded-xl p-4 border border-rose-100 hover:shadow-lg transition', children: _jsxs("div", { className: 'flex justify-between items-center', children: [_jsxs("div", { className: 'flex items-center', children: [_jsx(TrendingDownIcon, { className: 'text-rose-600 mr-2' }), _jsx("h3", { className: 'text-lg font-semibold text-rose-800', children: "Total Expenses" })] }), _jsxs("p", { className: 'text-2xl font-black text-rose-700', children: ["\u20B9", monthlyExpenses.toLocaleString()] })] }) }), _jsx("div", { className: `${netCashFlow >= 0
                                                ? "bg-cyan-50 border-cyan-100 text-cyan-800"
                                                : "bg-rose-50 border-rose-100 text-rose-800"} rounded-xl p-4 border hover:shadow-lg transition`, children: _jsxs("div", { className: 'flex justify-between items-center', children: [_jsxs("div", { className: 'flex items-center', children: [_jsx(CreditCardIcon, { className: `${netCashFlow >= 0 ? "text-cyan-600" : "text-rose-600"} mr-2` }), _jsx("h3", { className: 'text-lg font-semibold', children: "Net Cash Flow" })] }), _jsxs("p", { className: `text-2xl font-black ${netCashFlow >= 0 ? "text-cyan-700" : "text-rose-700"}`, children: ["\u20B9", Math.abs(netCashFlow).toLocaleString()] })] }) })] }))] })] }), _jsxs("div", { className: 'bg-white border-2 border-cyan-100 rounded-3xl p-6 shadow-2xl hover:shadow-cyan-200/50 transition-all duration-300 transform hover:-translate-y-2', children: [_jsxs("h2", { className: 'text-2xl font-bold text-cyan-800 mb-6 flex items-center', children: [_jsx(ListIcon, { className: 'mr-3 text-cyan-600' }), "Recent Transactions"] }), _jsx(FinancialRecordList, {})] })] }) }));
};
export default Dashboard;
