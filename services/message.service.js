const Message = require('../models/').Message;


const sendMessage = async (req , res) => {
    try {

        const message = await Message.create ({
            senderId,
            receiverId,
            text,
        });
      
    return message;    
    } catch {
        console.error('Error sending message:', error);
        throw new Error('Error sending message');
    }
};


module.exports = {
    sendMessage
 };