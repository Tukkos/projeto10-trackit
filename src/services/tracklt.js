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

function deleteHabits(iDHabit, habitsAuth) {
    const promise = axios.delete(`${BASE_URL}/habits/${iDHabit}`, habitsAuth);
    return promise;
}

function getTodayHabits(habitsAuth) {
    const promise = axios.get(`${BASE_URL}/habits/today`, habitsAuth);
    return promise;
}

function postHabitsAsDone(iDHabit, habitsAuth) {
    const promise = axios.post(`${BASE_URL}/habits/${iDHabit}/check`, [], habitsAuth);
    return promise;
}

function postHabitsAsUndone(iDHabit, habitsAuth) {
    const promise = axios.post(`${BASE_URL}/habits/${iDHabit}/uncheck`, [], habitsAuth);
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