import { jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
export const FinancialRecordsContext = createContext(undefined);
export const FinancialRecordsProvider = ({ children, }) => {
    const [records, setRecords] = useState([]);
    const { user } = useUser();
    const fetchRecords = async () => {
        // If user is not logged in, return
        if (!user)
            return;
        // Fetch records by user ID
        const response = await fetch(`http://localhost:3001/financial-records/getAllByUserID/${user.id}`);
        // If response is OK, set records
        if (response.ok) {
            const records = await response.json();
            console.log("Fetched user records:", records);
            setRecords(records);
        }
    };
    // Fetch records when user changes
    useEffect(() => {
        fetchRecords();
    }, [user]);
    // Add record
    const addRecord = async (record) => {
        // Add record to database
        const response = await fetch("http://localhost:3001/financial-records", {
            method: "POST",
            body: JSON.stringify(record),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // If response is OK, add record to state
        try {
            if (response.ok) {
                const newRecord = await response.json();
                setRecords((prev) => [...prev, newRecord]);
            }
        }
        catch (error) {
            console.error("Error adding record:", error);
        }
    };
    // Update record
    const updateRecord = async (id, newRecord) => {
        try {
            const response = await fetch(`http://localhost:3001/financial-records/${id}`, {
                method: "PUT",
                body: JSON.stringify(newRecord),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const updatedRecord = await response.json();
                setRecords((prev) => prev.map((record) => record._id === id ? { ...record, ...updatedRecord } : record));
            }
            else {
                console.error("Failed to update record");
            }
        }
        catch (error) {
            console.error("Error updating record:", error);
        }
    };
    // Delete record
    const deleteRecord = async (id) => {
        // Delete record from database
        const response = await fetch(`http://localhost:3001/financial-records/${id}`, {
            method: "DELETE",
        });
        // If response is OK, add record to state
        try {
            if (response.ok) {
                const deletedRecord = await response.json();
                setRecords((prev) => prev.filter((record) => record._id !== deletedRecord._id));
            }
        }
        catch (error) {
            console.error("Error deleting record:", error);
        }
    };
    return (_jsxs(FinancialRecordsContext.Provider, { value: { records, addRecord, updateRecord, deleteRecord }, children: [" ", children] }));
};
export const useFinancialRecords = () => {
    const context = useContext(FinancialRecordsContext);
    if (!context) {
        throw new Error("useFinancialRecords must be used within a FinancialRecordsProvider");
    }
    return context;
};
