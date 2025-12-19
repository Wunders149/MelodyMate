import { chargerPage } from './utils.js';

document.addEventListener('DOMContentLoaded', async function() {
    try {
        await chargerPage('./src/pages/navbar.html', 'navBar');
    } catch (error) {
        console.error('Failed to load navbar:', error);
    }
});