const MessageService = require("../services/message.service");
console.log("checking message controllers", Message); 

const sendMessage = async (req, res) => {
    try {
        const { senderId, receiverId, text } = req.body;
        

        const message = await MessageService.sendMessage(senderId, receiverId, text);
        
        res.status(200).json({ message: 'Message sent successfully', data: message });
      } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
};



module.exports = {
sendMessage
  };