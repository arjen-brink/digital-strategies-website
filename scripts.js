// JavaScript functionality for AI Agency website

document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Animation trigger on scroll
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});
