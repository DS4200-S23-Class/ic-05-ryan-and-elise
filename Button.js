let count = 0;

function inc() {
    let text = document.getElementByID("content");
    count = count + 1;
    text.innerHTML = "Number of Times Button Clicked: ";
}