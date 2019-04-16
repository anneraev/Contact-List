import formBuilder from "./formBuilder";
import htmlBuilder from "./htmlBuilder";

const formObject = function (wholeForm, elementArray, submitButton) {
    //dynamically builds a key for the input element, its container, and its label to store a reference to those elements for easy retrieval.
    this.createKeys = function(element, key, container) {
        const containerKey = `${key}Container`;
        const labelKey = `${key}Label`;
        this[key] = element;
        this[containerKey] = container
        this[labelKey] = this[containerKey].firstChild
    };
    this.form = wholeForm;
    this.elements = elementArray;
    this.button = submitButton;
    this.referenceFormElements = function () {
        //array of just the inputs for easy access by the script.
        const inputsArray = [];
        //all the various form inputs are indentified by their key value (the same as the key value that was originall passed to them when the formBuilder function called--they keys stored in the keysArray variable) The keys are also used to identify their label and container. Calling them in this way allows easy access to manipulate the attributes of these elements.
        this.elements.forEach(element => {
            const id = element.id;
            const idArray = id.split("--");
            const key = idArray[3];
            const container = element.parentNode;
            this.createKeys(element, key, container);
            if (element.tagName.match(/^(INPUT|SELECT|TEXTAREA)$/)) {
                console.log("element", element.tagName);
                inputsArray.push(element);
            }
        })
        this.inputs = inputsArray
    };
    //these methods allow the user to easily add new elements to the form object, as well as the DOM.
    this. newHeader = function (tag, id, key, target) {
        const header = formBuilder.buildHeader(tag, id, key);
        target.appendChild(header);
        this.createKeys(newHeader, key, target);

    }
    this.newTextArea = function (key, id, target) {
        const textArea = formBuilder.buildTextArea(type, key, id);
        target.appendChild(textArea);
        this.createKeys(textarea, key, target);
    };
    this.newdropDown = function (key, id, value, optionsArray, target) {
        const dropDown = formBuilder.buildDropdown(key, id, value, optionsArray)
        target.appendChild(dropDown);
        this.createKeys(dropDown, key, target);

    };
    this.newSelectOption = function (key, id, value, target) {
        if (target.tagName && target.tagName === "select"){
        const optionIndex = target.children.length + 1
        const select = htmlBuilder.elementBuilder("option", `field--${id}--select--${key}--${optionIndex}`, value, optionIndex)
        } else {
            throw new Error(`Target ${target} is not a "select" element. Select options can only be appended to select elements.`)
        }
    }
    this.newRadio = function (option, optionIndex, id, key, target) {
        const radio = formBuilder.buildOption(option, optionIndex, "radio", id, key)
        target.appendChild(radio);
        this.createKeys(newRadio, key, target);

    };
    this.newCheckbox = function (option, optionIndex, id, key, target) {
        const checkbox = formBuilder.buildOption(option, optionIndex, "checkbox", id, key)
        target.appendChild(checkbox);
        this.createKeys(checkbox, key, target);

    };
    this.newInput = function (type, key, id, value, target) {
        const input = formBuilder.buildInput(type, key, id, value)
        target.appendChild(input);
        this.createKeys(newInput, key, target);

    };
    this.newButton = function (id, name, targetElement) {
        const button = formBuilder.buildButton(id, name)
        targetElement.appendChild(button);
        this.createKeys(button, key, target);
    };
    //remove element and everything inside it.
    this.clearElement = function (element) {
        htmlBuilder.removeElement(element);
    }
}

export default {
    createFormObject: function (form, elementArray, submitButton) {
        const newFormObject = new formObject(form, elementArray, submitButton);
        return newFormObject;
    }
}