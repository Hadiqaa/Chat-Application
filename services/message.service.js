const Message = require('../models/message.model');
console.log("checking model", Message);
const sendMessage = async (senderId, receiverId, text, groupId) => {
  try {
    const messageData = {
      sender_id: senderId,
      text,
    };

    if (groupId) {
      messageData.group_id = groupId;
    } 
    if (receiverId) {
      messageData.reciever_id = receiverId;
    }

    console.log('creating with these values: \n', messageData);

    const message = await Message.create(messageData);
    return message;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

const getMessagesForGroup = async (group_id) => {
  try {
    const messages = await Message.find({ group_id }).sort({ createdAt: 'desc' });
    return messages;
  } catch (error) {
    console.error('Error retrieving messages for the group', error);
    throw error;
  }
};

const getMessagesBetweenUsers = async (senderId, receiverId) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender_id: senderId, receiver_id: receiverId },
        { sender_id: receiverId, receiver_id: senderId },
      ],
    }).sort({ createdAt: 'desc' });

    return messages;
  } catch (error) {
    console.error('Error retrieving messages between users', error);
    throw error;
  }
};

module.exports = { sendMessage, getMessagesForGroup, getMessagesBetweenUsers };
