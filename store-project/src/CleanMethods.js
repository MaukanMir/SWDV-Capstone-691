import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODJmOTZjMmJlNDMyNWVkZmY5MzU5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzI4OTc4OCwiZXhwIjoxNjM3NTQ4OTg4fQ._HEN89nLQmK9syeB8EdTE2bMyeKUydQXIUOMicqLewA"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const infoRequests = axios.create({
     baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

