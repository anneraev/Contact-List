//controlls contacts feature. Responsible for calling other functions and passing the necessary data to them.

import contactCollection from "../components/contacts/contactCollection";
import domManager from "../global modules/domManager";
import contactForm from "../components/contacts/contactForm";
import contactEventManager from "../components/contacts/contactEventManager";

export default {
    //called on page load.
    initialize: function () {
        const formArray = contactForm.buildForm();
        //the actual HTML form from formArray.
        const form = formArray[0];
        //the object from formArray containing attributes for easy access to elements, as well as methods for adding new ones.
        const formObject = formArray[1];
        //send formObject to event manager to add event listener.
        contactEventManager.addSubmitListener(formObject);
        //post form to dom.
        domManager.postToDom(form);
        //gets contacts from API and writes them to the DOM.
        contactCollection.assembleContacts()
    },
    submitContact: function (name, phone, address) {
        if (name !== "" && phone !== "" && address !== ""){
            //creates new contact object from the values of elements in formObject.
            const newContactObject = contactObject.createNewContactFromForm(name, phone, address);
            //sends new contact object to contactCollection so that it can be added to the API, then calls contact assembly.
            contactCollection.sendContactToApi(newContactObject);
        } else {
            alert("Please enter a name, a phone number and an address.")
        }
    }
}