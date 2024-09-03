import instance from "./instance";

const userServices = {
    register: async (data) => {
        return await instance.post('/users/register', data);
    },
    login: async (data) => {
        return await instance.post('/users/login', data);
    },
    me: async () => {
        return await instance.get('/users/me');
    },
    logout: async () => {
        return await instance.post('/users/logout');
    },
}

export default userServices;