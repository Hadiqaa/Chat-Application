const Group = require('../models/').Group;
const Group_Participant = require('../models/').Group_participants;

//to find a group by it's id

// const getGroupById = async (id) => {
// 	return Group.findByPk(id);
// }

//to create a new group //fix it
const createGroup = async (req,res) => {
  try {
      const group= await Group.create ({
        group_Name,
      });
      return group;

  } catch (error){
    
      console.error('Error in Creating a group', error);  
      throw new Error('Error in creating a group');

  }

};

// to get all the groups user is part of , including the private chats.
const getUsersGroups =async (user_id) => {

  try {
      const userGroups = await Group_Participant.findAll({
        where : {user_id},
        include : [{model : Group}],
      });
      return userGroups.map ((entry)=> entry.Group);

} catch (error) {

  console.error('Error in getting groups of the user', error);
  throw new Error('Error in getting groups of the user');

}

};



const deleteGroupwithMessages =async (group_id) => {

  try {

      const deleteGroup = await Group.destroy({
        where: { id: group_id }
      });


      if (!deleteGroup) {
        throw new Error('Group not found');
      }

     return { message: 'Group and associated messages deleted successfully' };

} catch (error) {

      console.error('Error in deleting group and group messages', error);
      throw new Error('Error in deleting group and group messages');

}

};









module.exports = {
    createGroup,
    getUsersGroups,
    deleteGroupwithMessages
  };