function table(data, rex){
    let html = '';

    for (var i = data.length-1; i > 0; i=i-1) {
        userIdSelected = '/' + data[i]['user_id'] + '/';

        if(rex == "/all/"){
            html += '<tr class="content"><td>' + data[i]['time'] + '</td><td>' + '/'+data[i]['f_name']
                        + '</td><td>' + data[i]['user_id'] + '</td><td>' + data[i]['user_fullname']
                        + '(@' + data[i]['user_name'] + ')' + '</td></tr>';
            }

            else{
                if(rex == userIdSelected){
                    html += '<tr class="content"><td>' + data[i]['time'] + '</td><td>' + '/'+data[i]['f_name']
                            + '</td><td>' + data[i]['user_id'] + '</td><td>' + data[i]['user_fullname']
                            + '(@' + data[i]['user_name'] + ')' + '</td></tr>';

                    };
                };
            };

    return html;
    }