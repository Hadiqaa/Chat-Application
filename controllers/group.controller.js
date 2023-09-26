const GroupService = require ('../services/group.service')


//fix this one 
const createGroup = async (req, res)  => {
try {
    const {group_Name} = req.body;
    const group = await GroupService.createGroup(group_Name);

    res.status(200).json({ message: 'Group chat created successfully', data: group });
} catch(error) {
    console.error('Error creating group chat:', error);
    res.status(500).json({ message: 'Internal Server Error' });
}

};




const getUsersGroup = async (req, res)  => {
    try {

        const { user_id } = req.params;
        const userGroups = await GroupService.getUsersGroups(user_id);
        res.status(200).json({ message: 'Yayy !! Successfull!!', data: userGroups });
    } catch(error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Ughhh!! Internal Server Error' });
    }
    
    };
    
    
const deleteGroupwithMessages = async (req, res)  => {
    try {
        const { group_id } = req.params;
        await GroupService.deleteGroupWithMessages(groupId);
        res.status(200).json({ message: 'Group and associated messages deleted successfully', data: GroupService });
    } catch(error) {
        console.error('Error deleting group chat and messages:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
    };


module.exports={ 
    createGroup,
    getUsersGroup,
    deleteGroupwithMessages
}