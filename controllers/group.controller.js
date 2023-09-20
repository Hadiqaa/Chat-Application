const GroupService = require ('../services/group.service')

const createGroup = async (req, res)  => {
try {
    const {group_Name, members} = req.body;
    const group = await GroupService.createGroup(group_Name);

    res.status(200).json({ message: 'Group chat created successfully', data: group });
} catch(error) {
    console.error('Error creating group chat:', error);
    res.status(500).json({ message: 'Internal Server Error' });
}

};


module.exports={ 
    createGroup
}