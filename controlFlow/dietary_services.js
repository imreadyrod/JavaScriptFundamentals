let personRole = "Employee";
let accessDietary;

switch (personRole) {
    case "Employee":
        accessDietary = "Authorized to have access to 'Dietary Services'";
        break;
    case "Enrolled Member":
        accessDietary = "'Dietary Services' and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        accessDietary = "Authorized to have partial access to facilitate 'Dietary Services' only.";
        break;
    case "Non-Subscriber":
        accessDietary = "Enroll or at least subscribe first to avail this facility.";
}

console.log("Dietary Services Level:", accessDietary);