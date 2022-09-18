const toggleButton = document.querySelector('.switch');
const bodyElement = document.body;

toggleButton.addEventListener("change", () => {
    if (bodyElement.classList.contains('dark')) {
        bodyElement.classList.remove('dark')
        bodyElement.classList.add('light')
    } else {

        bodyElement.classList.remove('light')
        bodyElement.classList.add('dark')
    }
});