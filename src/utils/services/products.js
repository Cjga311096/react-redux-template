import config from '../config';
import { get } from '../http';

export async function getProductsByIdCompany(id, token) {
  const headers = {
    'Content-Type': 'application/json',
    "authorization": `Bearer ${token}`
  };

  return await get(`${config.urlApi}/product/getProductByIdCompany?id=${id}`, headers);
}