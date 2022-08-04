import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postRegister(userInfo) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, userInfo);
    return promise;
}

function postLogin(login) {
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;
}

function postCreateHabit(habit, habitsAuth) {
    const promise = axios.post(`${BASE_URL}/habits`, habit, habitsAuth);
    return promise;
}

function getHabits(habitsAuth) {
    const promise = axios.get(`${BASE_URL}/habits`, habitsAuth);
    return promise;
}

function deleteHabits(iDHabit) {
    const promise = axios.delete(`${BASE_URL}/habits/${iDHabit}`);
    return promise;
}

function getTodayHabits() {
    const promise = axios.get(`${BASE_URL}/habits/today`);
    return promise;
}

function postHabitsAsDone(iDHabit) {
    const promise = axios.post(`${BASE_URL}/habits/${iDHabit}/check`);
    return promise;
}

function postHabitsAsUndone(iDHabit) {
    const promise = axios.post(`${BASE_URL}/habits/${iDHabit}/uncheck`);
    return promise;
}

function getHabitsHistory() {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`);
    return promise;
}

export {
    postRegister,
    postLogin,
    postCreateHabit,
    getHabits,
    deleteHabits,
    getTodayHabits,
    postHabitsAsDone,
    postHabitsAsUndone,
    getHabitsHistory
};