let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
	accessLevel = "Full access granted";
} else if (userRole === "manager") {
	accessLevel = "Limited access granted";
} else {
	accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
	if (userRole === "admin") {
		userMessage = "Welcome, Admin!";
	} else {
		userMessage = "Welcome, User!";
	}
} else {
	userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
	case "admin":
		userCategory = "Administrator";
		break;
	case "manager":
		userCategory = "Manager";
		break;
	case "subscriber":
		userCategory = "Subscriber";
		break;
	default:
		userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let enrolleStatus = true;
let userLooged = "Enrolled Member"
let enrollMessage;

if (enrolleStatus) {
	if (userLooged === "Employee") {
		userMessage = `Welcome ${userLooged}, You are authorized to have access to (Dietary Services).`;
	}
	else if (userLooged === "Enrolled Member") {
		userMessage = `Welcome ${userLooged}, You are authorized to have access to (Dietary Services) and one-on-one interaction with a dietician.`;
	}
	else if (userLooged === "Subscriber") {
		userMessage = `Welcome ${userLooged}, You have partial access to facilitate (Dietary Services) only.`;
	}
	else {
		userMessage = `Welcome ${userLooged}, You need to enroll or at least subscribe first to avail this facility.`;
	}
}
console.log(userMessage);

for (let i = 1; i <= 5; i++) {
	console.log(i);
}