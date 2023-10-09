function toggleCategories() {
    document.getElementById('app').innerHTML += /*HTML*/`
    <div class="toggle-panel">
        <div class="toggle-header">Click me to toggle</div>
        <div class="toggle-content">
            <!-- Your content goes here -->
            <p>This is the content that will be revealed and hidden.</p>
        </div>
    </div>`;

}