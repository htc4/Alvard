// JavaScript (script.js)

// Menu items data
const menuItems = [
    { id: 'shop', text: 'SHOP', link: 'shop.html' },
    { id: 'events', text: 'EVENTS', link: '#' },
    { id: 'wine-club', text: 'WINE CLUB', link: '#' },
    { id: 'contact', text: 'CONTACT', link: '#' },
    { id: 'cart', text: 'CART', link: '#' },
    { id: 'log-in', text: 'LOG IN', link: '#' },
    { id: 'about-us', text: 'ABOUT US', link: '#' },
    { id: 'visit', text: 'VISIT', link: '#' }
];

// Function to create menu items
function createMenu() {
    const menuContainer = document.getElementById('menuContainer');

    // Create logo link and image
    const logoLink = document.createElement('a');
    logoLink.classList.add('logo-link');
    logoLink.href = '../index.html';
    const logoImg = document.createElement('img');
    logoImg.src = '../images/logo.png';
    logoImg.alt = 'Logo';
    logoImg.classList.add('logo');
    logoLink.appendChild(logoImg);
    menuContainer.appendChild(logoLink);

    // Create menu toggle button
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;';
    menuContainer.appendChild(menuToggle);

    // Create menu items container
    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items');

    menuItems.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.classList.add('menu-item');
        menuItem.textContent = item.text;
        menuItem.href = item.link;

        // Add click event listener to each menu item
        menuItem.addEventListener('click', () => {
            setActiveMenuItem(item.id);
        });

        menuItemsContainer.appendChild(menuItem);
    });

    menuContainer.appendChild(menuItemsContainer);

    // Toggle menu items on mobile
    menuToggle.addEventListener('click', function() {
        menuItemsContainer.classList.toggle('active');
    });
}

// Function to set active menu item
function setActiveMenuItem(itemId) {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.toUpperCase() === itemId.toUpperCase()) {
            item.classList.add('active');
        }
    });
}

// Call createMenu() function to initialize the menu
if (document.getElementById("menuContainer")) {
    createMenu();
}
