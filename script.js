// import "./header.js"
// Ensure script runs after DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create main container div
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main_contr');


    const innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('item2');

    const innerDiv3 = document.createElement('div');
    innerDiv3.classList.add('item3');

    const innerDiv4 = document.createElement('div');
    innerDiv4.classList.add('i4');

    const subInnerDiv1 = document.createElement('div');
    subInnerDiv1.classList.add('sitem1');

    const subInnerDiv2 = document.createElement('div');
    subInnerDiv2.classList.add('sitem2');

    const subInnerDiv3 = document.createElement('div');
    subInnerDiv3.classList.add('sitem3');

    const infoSpan1 = document.createElement('span');
    infoSpan1.classList.add('is1');
    infoSpan1.textContent = 'Since 1910, Robert Royce Wines have been a favorite throughout Italy';

    const infoSpan2 = document.createElement('span');
    infoSpan2.classList.add('is2');
    infoSpan2.textContent = 'The taste of real wine';

    const infoSpan3 = document.createElement('span');
    infoSpan3.classList.add('is3');
    infoSpan3.textContent = 'We invent our winery for you';

    const readMoreSpan1 = document.createElement('span');
    readMoreSpan1.classList.add('rms1');
    readMoreSpan1.textContent = 'read more';

    const readMoreSpan2 = document.createElement('span');
    readMoreSpan2.classList.add('rms2');
    readMoreSpan2.textContent = 'read more';

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('ds');
    dateSpan.textContent = 'May 22 2024';

    const visitSpan = document.createElement('span');
    visitSpan.classList.add('vs');
    visitSpan.textContent = 'Visit our winery and celebrate this day with us';


    // Apply CSS styles
    mainContainer.style.fontFamily = 'Inika, sans-serif'; // Apply font-family to the main container

    // Append inner elements to their respective parent elements
    innerDiv4.appendChild(subInnerDiv1);
    innerDiv4.appendChild(subInnerDiv2);
    innerDiv4.appendChild(subInnerDiv3);

    // Append sub-inner elements to their respective parent elements
    mainContainer.appendChild(innerDiv2);
    mainContainer.appendChild(innerDiv3);
    mainContainer.appendChild(innerDiv4);
    mainContainer.appendChild(infoSpan1);
    mainContainer.appendChild(infoSpan2);
    mainContainer.appendChild(infoSpan3);
    mainContainer.appendChild(readMoreSpan1);
    mainContainer.appendChild(readMoreSpan2);
    mainContainer.appendChild(dateSpan);
    mainContainer.appendChild(visitSpan);

    // Append the main container to the body of the document
    document.body.appendChild(mainContainer);

    // Function to replace class names
    function replaceClassNames() {
        const elements = document.querySelectorAll('[class]');
        elements.forEach(element => {
            const classNames = element.classList.value.split(' ');
            classNames.forEach(className => {
                const newClassName = className.replace(/[^a-zA-Z0-9-_]/g, '_'); // Replace all non-alphanumeric characters with underscores
                element.classList.remove(className);
                element.classList.add(newClassName);
            });
        });
    }

    // Replace class names after DOM content is loaded
    replaceClassNames();
});
