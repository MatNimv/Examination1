"use strict";

function randomInteger(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}
function getColor(scheme, index) {
    // scheme: must be an integer between 1 and 4
    // index: must be an integer between 1 and 5
    // This function returns the color with the specified
    // index from the specified scheme.
    // Example:
    // getColor(1, 2); // returns "orange"

    // Control of parameters
    if (scheme < 1 || scheme > 4 || index < 1 || index > 5) {
        alert("Wrong parameters in function getColor");
        return null;
    }

    const colors = [
        ["gold", "orange", "yellow", "wheat", "indianred"],             // scheme 1
        ["aquamarine", "turquoise", "powderblue", "skyblue", "navy"],   // scheme 2
        ["peru", "chocolate", "saddlebrown", "brown", "maroon"],        // scheme 3
        ["springgreen", "green", "lime", "teal", "gold"]          // scheme 4
    ];
    return colors[scheme-1][index-1];
}
function removeClassFromElement(element, className) {
    element && element.classList.remove(className);
}



