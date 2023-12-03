import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/cars'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const create = async (carData) => {
    const result = await request.post(baseUrl, carData);

    return result;
};

export const edit = async (gameId, carData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, carData);

    return result;
};

export const remove = async (gameId) => request.remove(`${baseUrl}/${gameId}`);
