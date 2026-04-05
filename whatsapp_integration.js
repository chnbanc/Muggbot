// whatsapp_integration.js

const twilio = require('twilio');

// Twilio configuration
const accountSid = 'your_account_sid';  // Your Account SID from www.twilio.com/console
const authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

/**
 * Send message to a WhatsApp user
 * @param {string} to - The WhatsApp number of the recipient
 * @param {string} message - The message to send
 */
function sendMessage(to, message) {
    client.messages.create({
        to: `whatsapp:${to}`,
        from: 'whatsapp:+your_twilio_number', // Your Twilio number
        body: message
    })
    .then((message) => console.log(`Message sent: ${message.sid}`))
    .catch((error) => console.error(`Error: ${error}`));
}

/**
 * Send product catalog to a WhatsApp user
 * @param {string} to - The WhatsApp number of the recipient
 * @param {Array} products - An array of product objects with name and price
 */
function sendProductCatalog(to, products) {
    let catalogMessage = 'Check out our products:\n';
    products.forEach(product => {
        catalogMessage += `- ${product.name}: $${product.price}\n`;
    });
    sendMessage(to, catalogMessage);
}

/**
 * Send order notification to a WhatsApp user
 * @param {string} to - The WhatsApp number of the recipient
 * @param {Object} orderDetails - The order details
 */
function sendOrderNotification(to, orderDetails) {
    const message = `Your order #${orderDetails.id} has been placed successfully! Total: $${orderDetails.amount}`;
    sendMessage(to, message);
}

module.exports = {
    sendMessage,
    sendProductCatalog,
    sendOrderNotification
};