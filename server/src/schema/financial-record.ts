import mongoose from "mongoose";

// Define the structure of a financial record
interface FinancialRecord {
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

// Define mongoose schema for financial records
const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

// Create mongoose model for financial records
const FinancialRecordModel = mongoose.model<FinancialRecord>(
  "FinancialRecord",
  financialRecordSchema
);

export default FinancialRecordModel;
