import contactManager from "../../modules/contactManager";

//handles events by going between the creation of the item the event runs on, and the modules that do the work.

export default {
    //receives the form object for easy reference to elements within the form.
    addSubmitListener: function (formObject) {
        const button = formObject.submitButton;
        button.addEventListener("click", event => {
            //input elements are easily accessed using the key set whent the form was created with formBuilder.
            const newName = formObject.Name.value;
            const newPhone = formObject.Phone.value;
            const newAddress = formObject.Address.value;
            event.preventDefault();
            //sends relevant contact info back to contact manager for submission to API.
            contactManager.submitContact(newName, newPhone, newAddress);
        })
    }
}