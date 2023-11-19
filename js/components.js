// components.js
async function includeHTML(targetElement, filePath) {
    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Failed to fetch HTML: ${response.statusText}`);
        }

        const html = await response.text();
        targetElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Include the navigation bar
includeHTML(document.getElementById("navbar-container"), "./components/navbar.html");

  