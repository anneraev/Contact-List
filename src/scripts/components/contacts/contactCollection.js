//Control module for the Contacts feature.

let assembledContacts

import API from "../../global modules/apiManager"
import domManager from "../../global modules/domManager";
import contactList from "../contacts/contactList";

export default {
    //get contacts from API.
    getContacts: function () {
        return API.getAll("contacts")
    },
    assembleContacts: function () {
        this.getContacts().then(contacts => {
            //gets contacts from API, then assembles HTML and posts them to DOM.
            assembledContacts = contactList.assemble(contacts)
        }).then(() => {
            domManager.postToDom(assembledContacts);
        })
    },
    //sends contact to API, then reloads DOM element.
    sendContactToApi: function (contactObject){
        return apiManager.post("contacts", contactObject);
    }
}