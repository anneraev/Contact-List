import htmlBuilder from "../../global modules/htmlBuilder";

//assemble contact html.

export default {
    build: function (contact) {
        //container for this contact.
        const contactContainer = htmlBuilder.elementBuilder("section", `contact--section--${contact.id}`)
        //contact's name as a header.
        const nameHeader = htmlBuilder.elementBuilder("h2", `contact--name--${contact.id}`, `${contact.name}`)
        contactContainer.appendChild(nameHeader);
        //iterates over the keys and values of the contact object, appends a container containing a label and value written to HTML to the contactContainer.
        const contactValues = Object.entries(contact);
        for (let entry of contactValues){
            if (entry[0] === "name" || entry[0] === "id"){
                continue;
            }
            const itemDiv = htmlBuilder.elementBuilder("div", `contact--${entry[0]}--${contact.id}--container`)
            const itemLabel = htmlBuilder.elementBuilder("span", `contact--${entry[0]}--${contact.id}--label`, `${entry[0]}: `)
            const itemValue = htmlBuilder.elementBuilder("span", `contact--${entry[0]}--${contact.id}--value`, `${entry[1]}`)
            itemDiv.appendChild(itemLabel)
            itemDiv.appendChild(itemValue)
            contactContainer.appendChild(itemDiv);
        }
        return contactContainer
    }
}