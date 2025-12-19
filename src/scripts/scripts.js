import '../styles/tailwind.css';
import { chargerPage } from './utils.js';

document.addEventListener('DOMContentLoaded', async function() {
    try {
        await chargerPage('../pages/navbar.html', 'navBar');
    } catch (error) {
        console.error('Failed to load navbar:', error);
    }
});