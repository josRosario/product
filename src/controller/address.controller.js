import * as address from "../service/address.service.js"

export const createAddress  = async (data) => {
  const newData = JSON.parse(data);

  const obj = {
    city:newData.city,
    street: newData.street,
    sector: newData.sector,
    street_number:newData.street_number,
    person_id: newData.person_id

  }
    try {
        await address.createAddress(obj);
    } catch (error) {
      console.log(error);
    }
}
