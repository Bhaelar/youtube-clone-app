import axios from 'axios';

const KEY = 'AIzaSyCQBTzFelFog0c3Nmeq1V8RbTt-csAMo1Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});