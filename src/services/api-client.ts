import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '5f368b8ee66f4967908cddbf5a5ac811'
    }
})