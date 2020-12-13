import axios from 'axios';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResult : 12,
        key: 'AIzaSyCEdtFcGKYEHWBy_JCUJrzCAsMY3R_xm1o',  //This is a sample api, please dont  try this api this wouldnt work
    }
});
