import axios from 'axios';

class GoogleRequest {
    static getMe(accesToken) {
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/userinfo/v2/me?access_token=' + accesToken
        }).then(function(response){
          console.log(response);  
        }).catch(function (error) {
            console.log(error);
        });
    }
}

export default GoogleRequest;