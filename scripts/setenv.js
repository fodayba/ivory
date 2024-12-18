const fs = require('fs');
const path = require('path');

// Read environment variables
const publicKey = process.env.publicKey || '';
const serviceId = process.env.serviceId || '';
const templateId = process.env.templateId || '';
const toEmail = process.env.toEmail || '';

// Construct the content of env.js
const envJsContent = `
(function(window) {
    window.env = window.env || {};
    window.env.publicKey = '${publicKey}';
    window.env.serviceId = '${serviceId}';
    window.env.templateId = '${templateId}';
    window.env.toEmail = '${toEmail}';
})(this);
`;

// Ensure the assets directory exists
const assetsDir = path.join(__dirname, '..', 'dist', 'ivory-wed', 'browser', 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Write the env.js file
const envJsPath = path.join(assetsDir, 'env.js');
fs.writeFileSync(envJsPath, envJsContent);

console.log('Environment variables have been written to env.js'); 