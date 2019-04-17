import HTML from "../../global modules/htmlBuilder"
import contact from "./contact";
import domManager from "../../global modules/domManager";

let contactSection

export default {
    assemble: function (contacts) {
        //create header
        contactSection = HTML.elementBuilder("section", "display--contacts");
        const header = HTML.elementBuilder("H1", "contacts--header", "Contacts")
        contactSection.appendChild(header);
        contacts.forEach(item => {
            const contactItem = contact.build(item);
            contactSection.appendChild(contactItem);
        })
        return contactSection;
    },
    remove: function (){
        domManager.removeElement(contactSection);
    }
}