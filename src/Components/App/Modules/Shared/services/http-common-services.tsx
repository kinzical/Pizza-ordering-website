import http from '../http-common'
import { User } from '../Models/interfaces/User'

const getAll = () => {
    return http.get("/users");
};

const get = (id: string) => {
    return http.get(`/users/${id}`);
};

const create = (data: User) => {
    return http.post("/users", data);
};

const update = (id: string, data: User) => {
    return http.put(`/users/${id}`, data);
};

const remove = (id: string) => {
    return http.delete(`/users/${id}`);
};

const removeAll = () => {
    return http.delete(`/users`);
};

const findByTitle = (title: string) => {
    return http.get(`/users?title=${title}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};