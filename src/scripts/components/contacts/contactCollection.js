//Control module for interracting between API Manager and DOM.

let assembledContacts

import apiManager from "../../global modules/apiManager"
import domManager from "../../global modules/domManager";
import contactList from "../contacts/contactList";

export default {
    //get contacts from API.
    getContacts: function () {
        return apiManager.getAll("contacts")
    },
    assembleContacts: function () {
        this.getContacts().then(contacts => {
            //gets contacts from API, then assembles HTML and posts them to DOM.
            assembledContacts = contactList.assemble(contacts)
        }).then(() => {
            domManager.postToDom(assembledContacts);
        })
    },
    //sends contact to API.
    sendContactToApi: function (contactObject){
        return apiManager.post("contacts", contactObject);
    }
}