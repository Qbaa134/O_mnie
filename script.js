document.addEventListener('DOMContentLoaded', function() {
    // Na początku ukryj wszystkie sekcje
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Pokazujemy sekcję "About Me" domyślnie
    document.querySelector('#aboutMe').style.display = 'block';

    // Dodajemy animację do zakładek
    const navLinks = document.querySelectorAll('#tabs a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Ukrywamy wszystkie sekcje
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Pokazujemy odpowiednią sekcję
            const targetId = link.getAttribute('href').substring(1);
            document.querySelector(`#${targetId}`).style.display = 'block';
        });
    });

    // Zwiększenie interakcji z przyciskiem kontaktowym
    const contactButton = document.querySelector('#contactButton');
    contactButton.addEventListener('mouseover', () => {
        contactButton.style.transform = 'scale(1.1)';
    });

    contactButton.addEventListener('mouseout', () => {
        contactButton.style.transform = 'scale(1)';
    });

    // Dodajemy tła i kształty do strony
    addDynamicShapes();
});

// Funkcja dodająca dynamiczne kształty
function addDynamicShapes() {
    const body = document.querySelector('body');
    const shapes = ['shape1', 'shape2', 'shape3'];
    shapes.forEach((shape, index) => {
        const shapeDiv = document.createElement('div');
        shapeDiv.classList.add('shape', shape);
        body.appendChild(shapeDiv);
    });
}
