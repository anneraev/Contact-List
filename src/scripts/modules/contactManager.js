//controlls contacts feature. Responsible for calling other functions and passing the necessary data to them.

import contactCollection from "../components/contacts/contactCollection";
import contactList from "../components/contacts/contactList";
import domManager from "../global modules/domManager";
import contactForm from "../components/contacts/contactForm";

export default {
    //called on page load.
    initialize: function () {
        let assembledContacts
        contactCollection.getContacts().then(contacts => {
            assembledContacts = contactList.assemble(contacts)
        }).then(() => {
            domManager.postToDom(assembledContacts);
        })
        const formArray = contactForm.buildForm();
        console.log(formArray);
    }
}