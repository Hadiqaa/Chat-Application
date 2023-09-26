const Message = require('../models/').Message;


const sendMessage = async (senderId, receiverId, text,) => {
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



const getGroupMessages = async (group_id) => {
    try {

        const groupMessage = await Message.findAll ({
            where: { group_id },
            order: [['createdAt', 'DESC']],
        });
      
    return groupMessage;    
    } catch {

        console.error('Error getting group messages', error);
        throw new Error('Error getting group messages');
    }
};


module.exports = {
    sendMessage,
    getGroupMessages
 };