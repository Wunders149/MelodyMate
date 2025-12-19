// Enhanced search functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lyricsForm');
    const searchBtn = document.getElementById('searchBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const lyricsContainer = document.getElementById('lyricsContainer');
    const lyricsDiv = document.getElementById('lyrics');
    const songTitle = document.getElementById('songTitle');
    const copyBtn = document.getElementById('copyBtn');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const artistInput = document.getElementById('artist');
    const titleInput = document.getElementById('title');
    // Popular search buttons
    document.querySelectorAll('.popular-search').forEach((btn)=>{
        btn.addEventListener('click', function() {
            artistInput.value = this.dataset.artist;
            titleInput.value = this.dataset.title;
            form.dispatchEvent(new Event('submit'));
        });
    });
    // Enhanced form submission with loading state
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const artist = artistInput.value.trim();
        const title = titleInput.value.trim();
        if (artist === '' || title === '') {
            showNotification('Please fill in both artist and song title', 'error');
            return;
        }
        // Show loading state
        searchBtn.disabled = true;
        searchBtn.classList.add('opacity-75', 'cursor-not-allowed');
        loadingSpinner.classList.remove('hidden');
        // Update song title
        songTitle.textContent = `${title} by ${artist}`;
        fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`).then((response)=>response.json()).then((data)=>{
            if (data.lyrics) {
                lyricsDiv.textContent = data.lyrics;
                lyricsContainer.classList.remove('hidden');
                lyricsContainer.classList.add('animate-fade-in-up');
                showNotification('Lyrics found successfully!', 'success');
                // Scroll to lyrics
                setTimeout(()=>{
                    lyricsContainer.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            } else throw new Error('Lyrics not found');
        }).catch((error)=>{
            lyricsDiv.textContent = 'Lyrics not found. Please check the artist and song title, or try a different variation.';
            lyricsContainer.classList.remove('hidden');
            showNotification('Lyrics not found. Please try again.', 'error');
            console.error('Error:', error);
        }).finally(()=>{
            // Hide loading state
            searchBtn.disabled = false;
            searchBtn.classList.remove('opacity-75', 'cursor-not-allowed');
            loadingSpinner.classList.add('hidden');
        });
    });
    // Copy lyrics functionality
    copyBtn.addEventListener('click', function() {
        const lyricsText = lyricsDiv.textContent;
        navigator.clipboard.writeText(lyricsText).then(()=>{
            showNotification('Lyrics copied to clipboard!', 'success');
        }).catch(()=>{
            showNotification('Failed to copy lyrics', 'error');
        });
    });
    // Scroll to top functionality
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach((notification)=>notification.remove());
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${type === 'success' ? 'bg-green-500 text-white' : type === 'error' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-2"></i>
                ${message}
            </div>
        `;
        document.body.appendChild(notification);
        // Animate in
        setTimeout(()=>{
            notification.classList.remove('translate-x-full');
        }, 100);
        // Auto remove
        setTimeout(()=>{
            notification.classList.add('translate-x-full');
            setTimeout(()=>{
                if (notification.parentNode) notification.parentNode.removeChild(notification);
            }, 300);
        }, 3000);
    }
    // Add input animations
    [
        artistInput,
        titleInput
    ].forEach((input)=>{
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('ring-2', 'ring-purple-200');
        });
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('ring-2', 'ring-purple-200');
        });
    });
});

//# sourceMappingURL=search.b070d9fb.js.map
