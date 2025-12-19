import { chargerPage } from './utils.js';

export async function loadFooter() {
    try {
        await chargerPage('../pages/footer.html', 'footer');
    } catch (error) {
        console.error('Failed to load footer:', error);
    }
}
