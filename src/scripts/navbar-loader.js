import { chargerPage } from './utils.js';

export async function loadNavBar() {
    try {
        await chargerPage('./src/pages/navbar.html', 'navBar');
    } catch (error) {
        console.error('Failed to load navbar:', error);
    }
}
