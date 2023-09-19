const fullName = prompt("Enter your full name:");
const address = prompt("Enter your address:");

const nameParts = fullName.split(" ");
const firstName = nameParts[0];
const lastName = nameParts.slice(1).join(" ");

console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);
console.log(`Address: ${address}`);

