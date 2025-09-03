const User = require("../models/User");
const Income = require("../models/Income");
const xlsx = require("xlsx"); 

//Add income source
exports.addIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, source, amount, date } = req.body;
        
        //Validation: Check for missing fields
        if (!source || !amount || !date){
            return res.status(400).json({ message: "All fields are required" });
        }

        const newIncome = new Income ({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();
        res.status(200).json(newIncome);
    } catch (error) {
        res.status(500).json({ message: "Server Error" }); // Fixed capitalization
    }
};

//Get all income sources // Fixed comment
exports.getAllIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const income = await Income.find({ userId }).sort({ date: -1 });
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Delete income source // Fixed "Delet" to "Delete"
exports.deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        res.json({ message: "Income deleted successfully" }); // Removed extra space
    } catch (error) {
        res.status(500).json({ message: "Server Error" }); // Fixed capitalization and removed extra space
    }
};

//Download Income Excel
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const income = await Income.find({ userId }).sort({ date: -1 }); // Fixed "userid" to "userId"

        //Prepare data for Excel
        const data = income.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = xlsx.utils.book_new(); // Fixed "writeXLSX" to "xlsx"
        const ws = xlsx.utils.json_to_sheet(data); // Fixed "xlsx.util" to "xlsx.utils"
        xlsx.utils.book_append_sheet(wb, ws, "Income");
        xlsx.writeFile(wb, 'income_details.xlsx');
        res.download('income_details.xlsx');
    } catch (error) {
        res.status(500).json({ message: "Server Error" }); // Removed extra space
    }
};