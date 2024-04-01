// JavaScript (script.js)

// Define the image URL
let imageUrl = '../images/logo.png';

// Menu items data
const menuItems = [
    { id: 'shop', text: 'SHOP', link: '../shop/shop.html' },
    { id: 'events', text: 'EVENTS', link: '../events/events.html' },
    { id: 'wine-club', text: 'WINE CLUB', link: '../wineclub/wineclub.html' },
    { id: 'contact', text: 'CONTACT', link: '#' },
    { id: 'cart', text: 'CART', link: '#' },
    { id: 'log-in', text: 'LOG IN', link: '../login/login.html' },
    { id: 'about-us', text: 'ABOUT US', link: '../aboutus/about.html' },
    { id: 'visit', text: 'VISIT', link: '../index.html' }
];
const menuItems2 = [
    { id: 'shop', text: 'SHOP', link: './shop/shop.html' },
    { id: 'events', text: 'EVENTS', link: './events/events.html' },
    { id: 'wine-club', text: 'WINE CLUB', link: './wineclub/wineclub.html' },
    { id: 'contact', text: 'CONTACT', link: '#' },
    { id: 'cart', text: 'CART', link: '#' },
    { id: 'log-in', text: 'LOG IN', link: './login/login.html' },
    { id: 'about-us', text: 'ABOUT US', link: './aboutus/about.html' },
    { id: 'visit', text: 'VISIT', link: './index.html' }
];

// Function to create menu items
function createMenu() {
    if (!window.location.href.endsWith('index.html') && !window.location.href.endsWith('index.html#')) {
        const menuContainer = document.getElementById('menuContainer');

        // Create logo link and image
        const logoLink = document.createElement('a');
        logoLink.classList.add('logo-link');
        const logoImg = document.createElement('img');
        logoImg.src = imageUrl; // Use the imageUrl variable
        logoImg.alt = 'Logo';
        logoImg.classList.add('logo');
        logoLink.appendChild(logoImg);
        menuContainer.appendChild(logoLink);

        // Create menu toggle button
        menuicon = '&#9776;'
        const menuToggle = document.createElement('div');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = menuicon;
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
        menuToggle.addEventListener('click', function () {
            menuItemsContainer.classList.toggle('active');
        });
    }
    else {
        const menuContainer = document.getElementById('menuContainer');

        // Create logo link and image
        const logoLink = document.createElement('a');
        logoLink.classList.add('logo-link');
        const logoImg = document.createElement('img');
        logoImg.src = "./images/logo.png"; // Use the imageUrl variable
        logoImg.alt = 'Logo';
        logoImg.classList.add('logo');
        logoLink.appendChild(logoImg);
        menuContainer.appendChild(logoLink);

        // Create menu toggle button
        menuicon = '&#9776;'
        const menuToggle = document.createElement('div');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = menuicon;
        menuContainer.appendChild(menuToggle);

        // Create menu items container
        const menuItemsContainer = document.createElement('div');
        menuItemsContainer.classList.add('menu-items');

        menuItems2.forEach(item => {
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
        menuToggle.addEventListener('click', function () {
            menuItemsContainer.classList.toggle('active');
        });
    }
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
