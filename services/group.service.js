const Group = require('../models/').Group;
const Group_Participant = require('../models/').Group_participants;

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






module.exports = {
    createGroup,
  };