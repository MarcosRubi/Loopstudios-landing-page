window.addEventListener("load", () => {
    // Obtener elementos de la página
    const btnMenu = document.querySelector(".btn-menu");
    const header = document.querySelector("header");
    const navItems = document.querySelectorAll(".menu a");
    const title = document.querySelector(".title");
    const vrImg = document.querySelector(".vr__img");
    const vrTitle = document.querySelector(".vr__content h2");
    const vrDescription = document.querySelector(".vr__content p");
    const creationsTitle = document.querySelector(".creations h2");
    const creationsBtn = document.querySelector(".creations .btn");
    const creationsItems = document.querySelectorAll(".creation__item");
    const footerLogo = document.querySelector("footer .logo");
    const footerNav = document.querySelectorAll("footer nav ul");
    const socialIcons = document.querySelectorAll(".social");
    const footerCopy = document.querySelector(".copy");
    const footerAttribution = document.querySelector(".attribution");

    // Función para mostrar y ocultar el menú
    function toggleMenu() {
        header.classList.toggle("show-menu");
    }

    // Mostrar y ocultar el menú al hacer clic en el botón
    btnMenu.addEventListener("click", toggleMenu);

    // Mostrar y ocultar el menú al hacer clic en un elemento del menú
    navItems.forEach((navItem) => {
        navItem.addEventListener("click", () => {
            window.innerWidth < 768 ? toggleMenu() : null;
        });
    });

    // Hacer que el menú se mantenga fijo en la parte superior de la pantalla al hacer scroll
    function toggleStickyHeader() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            header.classList.add("sticky");
            return;
        }
        header.classList.remove("sticky");
    }

    window.addEventListener("scroll", toggleStickyHeader);
    toggleStickyHeader() //Ejecutar al cargar el sitio

    // Función para mostrar animaciones al hacerse visibles los elementos del menú
    function startAnimation(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }

    // Array con todos los elementos a observar
    const elementsToObserve = [
        header,
        title,
        vrImg,
        vrTitle,
        vrDescription,
        creationsTitle,
        creationsBtn,
        ...creationsItems,
        footerLogo,
        ...footerNav,
        ...socialIcons,
        footerCopy,
        footerAttribution,
    ];

    // Crear el observador
    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    });

    // Observar todos los elementos
    elementsToObserve.forEach((element) => {
        observer.observe(element);
    });
});
