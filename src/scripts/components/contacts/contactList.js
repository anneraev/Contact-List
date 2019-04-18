import HTML from "../../global modules/htmlBuilder"
import contact from "./contact";
import domManager from "../../global modules/domManager";

let contactSection

export default {
    assemble: function (contacts) {
        //create header
        contactSection = HTML.elementBuilder("section", "display--contacts");
        const header = HTML.elementBuilder("H1", "contacts--header", "Contacts")
        const contactsContainer = HTML.elementBuilder("div", "contacts--cards");
        contactSection.appendChild(header);
        contacts.forEach(item => {
            const contactItem = contact.build(item);
            contactsContainer.appendChild(contactItem);
        })
        const classesToAdd = ["container", "contacts__container", "row"]
        contactsContainer.classList.add(...classesToAdd);
        contactSection.appendChild(contactsContainer);
        return contactSection;
    },
    remove: function (){
        domManager.removeElement(contactSection);
    }
}