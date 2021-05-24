function selectedUserTable(data){

    let htmlUser = '<option>Имя пользователя</option><option value="all">Все пользователи</option>';
    let users = {};
    for (var i = data.length-1; i > 0; i=i-1) {
        userId = data[i]['user_id'];
        userFullName = data[i]['user_fullname'];

        if(users[userId] === undefined){
            users[userId] = userFullName
            };
        };

    for (let user in users) {
        htmlUser += '<option value='+ user + '>' + users[user] +'</option>'
        };

    return htmlUser
    }
