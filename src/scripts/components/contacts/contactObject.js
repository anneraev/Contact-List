//receives objects and builds new objects for storage from their values. Then sends those objects to be stored by the API.

export default {
    createNewContactFromForm: function(newName, newPhone, newAddress) {
        const newContact = {
            name: newName,
            phone: newPhone,
            address: newAddress
        }
        return newContact;
    }
}