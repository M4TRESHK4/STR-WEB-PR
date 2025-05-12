export function createElement({ elementName, className, inner, id }) {
    const element = document.createElement(elementName);
    //element.innerHTML = inner ?? "";
    element.textContent = inner ?? "";
    element.className = className ?? "";
    element.id = id ?? "";
    return element;
}