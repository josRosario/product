import Address from "../model/address.js";

export const createAddress = async (address_data) => {
    try {
        return await Address.create(address_data)
    } catch (error) {
        throw new Error(error, error.message)
    }
}



export const updateAddress = async (id, address_data) => {
    try {
        const address = await Address.findByPk(id);

        if (!address){
            throw Error('Direccion no encontrada');
        }
        return await Address.update(address_data);
    } catch (error) {
        throw Error("Hubo un error al actualizar los datos u obtener la direccion", error);

    }
}