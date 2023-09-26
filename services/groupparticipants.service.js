 const Group_Participant = require ('../models').Group_participants;



 const addUsertoGroup = async (user_id, group_id) => {

    try {
         
        const groupParticipant = await Group_Participant.create({
            user_id,
            group_id
        });
    } catch(error) {

        console.error('Error! could not add user to the group', error);
        throw new Error('Error! could not add user to the group');
    }
 };


 const removeUserFromGroup = async (user_id, group_id) => {

    try {

        await Group_Participant.destroy({
            where:{user_id, group_id},
        })

    } catch (error) {

        console.error('Error! could not remove user from the group', error);
        throw new Error('Error! could not remove user from the group');
    }
 };


module.exports ={
    addUsertoGroup,
    removeUserFromGroup
}





