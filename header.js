// Ensure script runs after DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create main container div
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main_contr');

    // Create inner elements
    const innerDiv1 = document.createElement('div');
    innerDiv1.classList.add('item1');

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('hd');
    titleSpan.textContent = 'INE';

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

    const buttons = ['SHOP', 'EVENTS', 'WINE CLUB', 'CONTACT', 'CART', 'LOG IN', 'ABOUT US', 'VISIT'];
    const buttonSpans = buttons.map(label => {
        const button = document.createElement('span');
        button.classList.add('bs');
        button.textContent = label;
        // console.log(' 1  button:', button);
            document.addEventListener('click', () => {
                //  console.log('Button clicked:', label);
                // for() 
            switch (label) {
                case 'SHOP':
                    // window.location.href = './shop.html';
                    console.log('SHOP Button clicked:', label); 
                    break;
                case 'EVENTS':
                    // window.location.href = './events.html'; 
                    console.log('EVENTS Button clicked:', label); 
                    break;
                case 'CONTACT':
                    // window.location.href = './contact.html'; 
                    console.log('CONTACT Button clicked:', label); 
                    break;
                case 'WINE CLUB':
                    // window.location.href = './wineclub.html'; 
                    console.log('WINE CLUB Button clicked:', label); 
                    break;
                case 'CART':
                    // window.location.href = './cart.html';
                    console.log('CART Button clicked:', label); 
                    break;
                default:
                    break;
            }
        });
        return button;
    });

    // Append the button spans to the main container
    buttonSpans.forEach(buttonSpan => {
        document.body.appendChild(buttonSpan);
    });



    // Apply CSS styles
    mainContainer.style.fontFamily = 'Inika, sans-serif'; // Apply font-family to the main container

    // Append inner elements to their respective parent elements
    innerDiv4.appendChild(subInnerDiv1);
    innerDiv4.appendChild(subInnerDiv2);
    innerDiv4.appendChild(subInnerDiv3);

    // Append sub-inner elements to their respective parent elements
    mainContainer.appendChild(innerDiv1);
    buttonSpans.forEach(buttonSpan => mainContainer.appendChild(buttonSpan)); // Append button spans

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
