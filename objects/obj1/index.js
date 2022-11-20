const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];
const onlineUsers = users.filter(item => item.status === 'online').map(item => item.username);
const usersOnlineNames = onlineUsers.join(', ');
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
