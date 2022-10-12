import axios from "axios";

const KEY = "AIzaSyB-zl7GHHSJvNLAOPDESjYWCYJLjXgh0so";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
    pageToken: "nextPageToken, prevPageToken",
  },
});
