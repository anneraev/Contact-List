import formBuilder from "../../global modules/formBuilder/formBuilder";

formBuilder

export default {
    buildForm: function() {
        //set Title, set field section, set Id, add types, add keys, add values, add options.
        formBuilder.clearVariables();
        formBuilder.setTitle("Add Contact");
        formBuilder.setWrapper("fieldset");
        formBuilder.setId("0");
        formBuilder.addType("text");
        formBuilder.addType("text");
        formBuilder.addType("text");
        formBuilder.addKey("Name");
        formBuilder.addKey("Phone");
        formBuilder.addKey("Address");
        formBuilder.addValue(undefined);
        formBuilder.addValue(undefined);
        formBuilder.addValue(undefined);
        formBuilder.addOptions(undefined);
        formBuilder.addOptions(undefined);
        formBuilder.addOptions(undefined);
        const formArray = formBuilder.createForm();
        //returns an array with a reference to the HTML form [0], and an object containing reference to all the elements in that form [1]
        return formArray;
    }
}