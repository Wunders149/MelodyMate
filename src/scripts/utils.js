// Shared utility functions for MelodyMate

/**
 * Load content from a URL and insert it into an element
 * @param {string} url - The URL to load content from
 * @param {string} containerId - The ID of the element to insert content into
 */
export function chargerPage(url, containerId) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const element = document.getElementById(containerId);
                    if (element) {
                        element.innerHTML = xhr.responseText;
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(`Element with ID '${containerId}' not found`));
                    }
                } else {
                    reject(new Error(`HTTP ${xhr.status}: Failed to load ${url}`));
                }
            }
        };

        xhr.onerror = function() {
            reject(new Error(`Network error occurred while loading ${url}`));
        };

        xhr.send();
    });
}

/**
 * Show a notification to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('info', 'success', 'error')
 */
export function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' :
                type === 'error' ? 'fa-exclamation-circle' :
                'fa-info-circle'
            } mr-2"></i>
            ${message}
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);

    // Auto remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}