import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

export interface FinancialRecord {
	id: string,
	userId: string,
	date: Date,
	description: string,
	amount: number,
	category: string,
	paymentMethod: string,
}

interface FinancialRecordsContextType {
	records: FinancialRecord[],
	addRecord: (record: FinancialRecord) => void,
	// updateRecord: (id: string, newRecord: Partial<FinancialRecord>) => void,
	// deleteRecord: (id: string) => void,
	error?: string | null,
}

export const FinancialRecordsContext = createContext<FinancialRecordsContextType | undefined>(undefined);

export const FinancialRecordsProvider = ({
	children
} : {
	children: React.ReactNode
}) => {

	const [records, setRecords] = useState<FinancialRecord[]>([]);

	const{ user } = useUser();

	const fetchRecords = async () => {
		// If user is not logged in, return
		if (!user) return;

		// Fetch records by user ID
		const response = await fetch(`http://localhost:3001/financial-records/getAllByUserID/${user.id}`);

		// If response is OK, set records
		if (response.ok) {
			const records = await response.json();
			console.log('Fetched user records:', records);
			setRecords(records);
		}
	}

	// Fetch records when user changes
	useEffect(() => {
		fetchRecords();
	}, [user]);

	// Add record
	const addRecord = async (record: FinancialRecord) => {
		// Add record to database
		const response = await fetch ("http://localhost:3001/financial-records", {
			method: "POST",
			body: JSON.stringify(record),
			headers: {
				"Content-Type": "application/json",
			}
		})
		// If response is OK, add record to state
		try {
			if (response.ok) {
				const newRecord = await response.json();
				setRecords((prev) => [...prev, newRecord]);
			}
		} catch (error) {
			console.error("Error adding record:", error);
		}
	}

	return (
		<FinancialRecordsContext.Provider value={{records, addRecord}}>
			{" "}
			{children}
		</FinancialRecordsContext.Provider>
	);
}

export const useFinancialRecords = () => {
	const context = useContext<FinancialRecordsContextType | undefined>(
		FinancialRecordsContext
	);
	if (!context) {
		throw new Error(
			'useFinancialRecords must be used within a FinancialRecordsProvider'
		);
	}
	return context;
}