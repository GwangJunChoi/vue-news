//node_moduels 아래 설치된 라이브러리 호출
import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

function fetchNewsList() {
  //return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  //return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  //return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList };
