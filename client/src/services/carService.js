import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/cars";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (carId) => {
  const result = await request.get(`${baseUrl}/${carId}`);

  return result;
};

export const getOwnedCars = async (id) => {
  const result = await request.get(
    `${baseUrl}/cars?where=_ownerId%3D%22${id}%22`
  );

  return result;
};

export const search = async (carData) => {
    const name = Object.keys(carData);
    // console.log("NAME",name);
    const value = Object.values(carData).map(val => {return val.charAt(0).toUpperCase() + val.slice(1)});
    // console.log("VALUE",value);
    const result = await request.get(`${baseUrl}/cars?where=${name[0]}%3D%22${value[0]}%22 
            OR ${name[1]}%3D%22${value[1]}%22
            OR ${name[2]}%3D%22${value[2]}%22
            OR ${name[3]}%3D%22${value[3]}%22`
    );
    // console.log("RESULT",result);

  return result;
};

export const create = async (carData) => {
  const result = await request.post(baseUrl, carData);

  return result;
};

export const edit = async (carId, carData) => {
  const result = await request.put(`${baseUrl}/${carId}`, carData);

  return result;
};

export const remove = async (carId) => request.remove(`${baseUrl}/${carId}`);
