import axios from "axios";

const KEY = "API_KEY";

//const SEARCHurl = "https://www.googleapis.com/youtube/v3/search?";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video"
    }
});
