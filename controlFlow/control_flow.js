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
let userLooged = "Enrolled Member";
let partOne = "Welcome";

const dialog = document.querySelector("dialog");
const dialogText = document.getElementById("dialogText");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

if (enrolleStatus) {
	if (userLooged === "Employee") {
		userMessage = `You are authorized to have access to (Dietary Services).`;
	} else if (userLooged === "Enrolled Member") {
		userMessage = `You are authorized to have access to (Dietary Services) and one-on-one interaction with a dietician.`;
	} else if (userLooged === "Subscriber") {
		userMessage = `You have partial access to facilitate (Dietary Services) only.`;
	} else {
		userMessage = `You need to enroll or at least subscribe first to avail this facility. You will be redirected.`;
		// window.location.href = 'https://google.com/';
	}
}

// Set the message inside the dialog
dialogText.textContent = `${partOne} ${userLooged}, ${userMessage}`;

// Show the dialog on button click
showButton.addEventListener("click", () => {
	dialog.showModal();
});

// Close the dialog on button click
closeButton.addEventListener("click", () => {
	dialog.close();
});

function greet(a, b) {
	return a * b;
}
const result = greet(4, 4);
console.log(result);

