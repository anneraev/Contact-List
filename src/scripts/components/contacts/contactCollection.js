//Control module for the Contacts feature.

import API from "../../global modules/apiManager"

export default {
    //get contacts from API.
    getContacts: function() {
        return API.getAll("contacts")
    }
}