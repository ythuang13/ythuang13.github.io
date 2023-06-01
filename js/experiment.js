window.addEventListener('DOMContentLoaded', event => {
    // When page loaded
    crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"]
    ).then((key) => {
        console.log(key);
    });
});

//Experiment 1
// Function to hash a string using SHA-256
async function hashString(string) {
    // Convert the string to a Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(string);

    // Hash the data using SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convert the hash buffer to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedString = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    // Return the hashed string
    return hashedString;
}

document.getElementById('discord-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the value from the password and message
    const password = document.getElementById('discord-password').value;
    const message = document.getElementById('discord-message').value;

    // Store the password value in a variable or perform further actions
    console.log('Password:', password);
    console.log('Message:', message);

    // Clear the password field
    document.getElementById('discord-password').value = '';
    document.getElementById('discord-message').value = '';

    // Perform any other actions or submit the form if needed
    hashString(password)
    .then(hashedPassword => {
        console.log('Original string:', password);
        console.log('Hashed string:', hashedPassword);
        
        const encryptDiscordHook = "http://bruh";
        const decryptDiscordHook = crypto.subtle.encrypt("AES-GCM", hashedPassword, encryptDiscordHook);
        console.log(encryptDiscordHook);
        console.log(decryptDiscordHook);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
