//global DOM manager.

//reference to the HTML element all elements will be posted to.
const container = document.getElementById("display-container");

export default {
    //posts HTML to the DOM.
    postToDom: function(item) {
        container.appendChild(item);
    }
}