// ====================================
// JavaScript Date Object - Complete Guide
// ====================================

/*
TOPICS COVERED:
1. Date Creation Methods
2. Getting Date Components
3. Setting Date Components
4. Date Formatting
5. Date Calculations
6. Timezone Handling
*/

// 1. DATE CREATION METHODS
// ----------------------

// 1.1 Different Ways to Create Dates
console.log("\n1. Creating Dates:");

const currentDate = new Date();
const fromTimestamp = new Date(1672531200000); // Jan 1, 2023
const fromString = new Date("2023-12-25T12:00:00");
const fromComponents = new Date(2023, 11, 25, 12, 0, 0); // Dec 25, 2023, 12:00:00

console.table({
    "Current Date": currentDate.toString(),
    "From Timestamp": fromTimestamp.toString(),
    "From String": fromString.toString(),
    "From Components": fromComponents.toString()
});

// 2. GETTING DATE COMPONENTS
// -----------------------
console.log("\n2. Date Components:");

function getDateComponents(date) {
    return {
        "Year": date.getFullYear(),
        "Month (0-11)": date.getMonth(),
        "Month Name": new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date),
        "Date": date.getDate(),
        "Day of Week": date.getDay(),
        "Day Name": new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date),
        "Hours": date.getHours(),
        "Minutes": date.getMinutes(),
        "Seconds": date.getSeconds(),
        "Milliseconds": date.getMilliseconds()
    };
}

console.table(getDateComponents(currentDate));

// 3. DATE FORMATTING
// ---------------
console.log("\n3. Date Formatting Options:");

const formatOptions = {
    "Default toString()": currentDate.toString(),
    "toLocaleDateString()": currentDate.toLocaleDateString(),
    "toLocaleTimeString()": currentDate.toLocaleTimeString(),
    "toISOString()": currentDate.toISOString(),
    "toUTCString()": currentDate.toUTCString(),
    "getTime() (timestamp)": currentDate.getTime()
};

console.table(formatOptions);

// 4. CUSTOM DATE FORMATTING
// ----------------------
console.log("\n4. Custom Date Formatting:");

const dateFormatters = {
    "Full Date": new Intl.DateTimeFormat('en-US', { 
        dateStyle: 'full', 
        timeStyle: 'long' 
    }).format(currentDate),
    
    "Short Date": new Intl.DateTimeFormat('en-US', { 
        dateStyle: 'short', 
        timeStyle: 'short' 
    }).format(currentDate),
    
    "Custom Format": new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    }).format(currentDate)
};

console.table(dateFormatters);

// 5. DATE CALCULATIONS
// -----------------
console.log("\n5. Date Calculations:");

function dateDemonstrations() {
    const today = new Date();
    
    // Add 7 days
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    
    // Subtract 1 month
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);
    
    return {
        "Current Date": today.toDateString(),
        "Next Week": nextWeek.toDateString(),
        "Last Month": lastMonth.toDateString(),
        "Days Between": Math.floor((nextWeek - today) / (1000 * 60 * 60 * 24))
    };
}

console.table(dateDemonstrations());

// 6. TIMEZONE HANDLING
// -----------------
console.log("\n6. Timezone Information:");

const timezoneInfo = {
    "Local Timezone Offset (minutes)": currentDate.getTimezoneOffset(),
    "UTC Hours": currentDate.getUTCHours(),
    "Local Hours": currentDate.getHours(),
    "UTC Full Date": currentDate.toUTCString()
};

console.table(timezoneInfo);

/* 
BEST PRACTICES:
--------------
1. Always use the Date object for date manipulation
2. Be careful with months (0-11 indexing)
3. Use appropriate date formatting for user display
4. Consider timezone differences in calculations
5. Use timestamps for date comparisons
6. Use Intl.DateTimeFormat for locale-specific formatting
*/

// End of Dates Lecture