const MessageService = require("../services/message.service");

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



const getGroupMessages = async (req, res) => {
    try {

      const { group_id } = req.params;
      const groupMessages = await MessageService.getGroupMessages(group_id);  
        
        res.status(200).json({ message: 'yayy  successss', data: groupMessages });
      } catch (error) {
        console.error('Ughhh !! Error', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
};


module.exports = {
sendMessage,
getGroupMessages
  };