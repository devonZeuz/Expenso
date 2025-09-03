import moment from "moment";

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }

    return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "0";

    // Cap extremely large numbers to prevent display issues
    if (Math.abs(num) >= 1e12) {
        return "999.99T+";
    }

    // Handle scientific notation for large but reasonable numbers
    if (Math.abs(num) >= 1e9) {
        return (num / 1e9).toFixed(1) + "B";
    }

    if (Math.abs(num) >= 1e6) {
        return (num / 1e6).toFixed(1) + "M";
    }

    if (Math.abs(num) >= 1e3) {
        return (num / 1e3).toFixed(1) + "K";
    }

    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
    const chartData = data.map((item) => ({
        category: item.category,
        amount: item.amount,
        date: moment(item.date).format("DD MMM"),
    }));

    return chartData;
};

export const prepareIncomeBarChartData = (data = []) => {
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format('Do MMM'),
        amount: item?.amount,
        source: item?.source,
    }));

    return chartData;
};


export const prepareExpenseLineChartData = (data = []) => {
    if (!data || !data.length) return [];

    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format('Do MMM'),
        amount: item?.amount,
        category: item?.category,
    }));

    return chartData;
};

