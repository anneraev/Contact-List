import HTML from "../../global modules/htmlBuilder"
import contact from "./contact";

export default {
    assemble: function (contacts) {
        const contactFrag = document.createDocumentFragment()
        //create header
        const header = HTML.elementBuilder("H1", "contacts--header", "Contacts")
        contactFrag.appendChild(header);
        contacts.forEach(item => {
            const contactItem = contact.build(item);
            contactFrag.appendChild(contactItem);
        })
        return contactFrag;
    }
}