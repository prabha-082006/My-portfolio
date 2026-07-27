/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {


    let currentSection = "";


    sections.forEach(section => {


        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.clientHeight;


        if (

            window.scrollY >= sectionTop &&

            window.scrollY < sectionTop + sectionHeight

        ) {

            currentSection =
                section.getAttribute("id");

        }


    });


    navLinks.forEach(link => {


        link.classList.remove("active");


        if (

            link.getAttribute("href") ===
            "#" + currentSection

        ) {

            link.classList.add("active");

        }


    });


});


/* =========================================
   3D CUBE MOUSE PARALLAX
========================================= */

const cubes =
    document.querySelectorAll(".cube");


document.addEventListener("mousemove", (event) => {


    const mouseX =

        (event.clientX /
        window.innerWidth - 0.5);


    const mouseY =

        (event.clientY /
        window.innerHeight - 0.5);


    cubes.forEach((cube, index) => {


        const speed =
            (index + 1) * 8;


        cube.style.marginLeft =

            `${mouseX * speed}px`;


        cube.style.marginTop =

            `${mouseY * speed}px`;


    });


});