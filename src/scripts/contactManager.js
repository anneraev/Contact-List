//controlls contacts feature. Responsible for calling other functions and passing the necessary data to them.

import contactCollection from "./contactCollection";

export default {
    //called on page load.
    initialize: function (){
        contactCollection.getContacts().then(contacts => {
            console.log(contacts);
        })
    }
}