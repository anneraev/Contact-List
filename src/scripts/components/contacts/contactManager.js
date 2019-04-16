//controlls contacts feature. Responsible for calling other functions and passing the necessary data to them.

import contactCollection from "./contactCollection";
import contactList from "./contactList";
import domManager from "../../global modules/domManager";

export default {
    //called on page load.
    initialize: function () {
        let assembledContacts
        contactCollection.getContacts().then(contacts => {
            assembledContacts = contactList.assemble(contacts)
        }).then(() => {
            domManager.postToDom(assembledContacts);
        })
    }
}