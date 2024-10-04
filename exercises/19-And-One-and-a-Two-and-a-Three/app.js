let contact = {
    fullName: "John Doe",
    phone: "123-123-2134",
    email: "test@nowhere.com"
};

// Loop through the properties of the contact object
for (let key in contact) {
    console.log(`${key} : ${contact[key]}`); // Print the key and its corresponding value
}