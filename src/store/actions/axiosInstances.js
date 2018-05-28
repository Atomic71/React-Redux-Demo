import axios from 'axios';

export const authenticationHandler = (userConfig) => axios.post(
    'https://radiant-escarpment-95925.herokuapp.com/api/login/',
    userConfig
);

const axiosInst = axios.create({ baseURL: 'https://radiant-escarpment-95925.herokuapp.com/api/todos' });

export const createItemService = (name, listId, userToken) => axiosInst.post(
    `/${listId}/entries`,
    {description: name},
    {headers: {"Authorization": `Token ${userToken}`}}
);

export const deleteItemService = (item, userToken) => axiosInst.delete(
    `/${item.todo_list}/entries/${item.id}`,
    {headers: {Authorization: `Token ${userToken}`}}
);

export const toggleItemService = (item, userToken) => axiosInst.patch(
    `/${item.todo_list}/entries/${item.id}`,
    {"completed": !item.completed},
    {headers: {Authorization: `Token ${userToken}`}}
)

export const renameItemService = (item, newName, userToken) => axiosInst.patch(
    `/${item.todo_list}/entries/${item.id}`,
    {"description": newName},
    {headers: {Authorization: `Token ${userToken}`}}
)