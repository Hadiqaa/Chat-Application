const MessageService = require('../services/message.service');
const protect = require('../middleware/authentication');
const sendMessage = async (req, res) => {
  try {
    console.log('request.body here...');
    console.log(req.body);
    const { receiverId, text, group_id } = req.body;
    const user = req.user;

    const message = await MessageService.sendMessage(user.id, receiverId, text, group_id);

    res.status(200).json({ message: 'Message sent successfully', data: message });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getGroupMessages = async (req, res) => {
  try {
    const { group_id } = req.body;
    const groupMessages = await MessageService.getMessagesForGroup(group_id);

    res.status(200).json({ message: 'Messages retrieved successfully', data: groupMessages });
  } catch (error) {
    console.error('Error', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getMessagesOfUsers = async (req, res) => {
  try {
    const { receiverId } = req.body;
    const user = req.user;
    const getmessages = await MessageService.getMessagesBetweenUsers(user.id, receiverId);

    res.status(200).json({ message: 'Messages retrieved successfully', data: getmessages });
  } catch (error) {
    console.error('Error getting messages:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { sendMessage, getGroupMessages, getMessagesOfUsers };
