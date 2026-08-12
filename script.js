// ================= MOBILE MENU =================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );

    }
);


// ================= CLOSE MOBILE MENU =================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    });


// ================= PROJECT LINKS =================

const projectLinks =
    document.querySelectorAll(
        ".project-link"
    );


projectLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();

            const project =
                link.dataset.project;

            alert(
                `${project}\n\nLive Demo link will be connected soon.`
            );

        }
    );

});


// ================= CONTACT NAVIGATION =================

document
    .querySelectorAll('a[href="#contact"]')
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    });


// ================= SCROLL ANIMATION =================

const sections =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


sections.forEach(section => {

    observer.observe(section);

});


// ================= CONSOLE =================

console.log(
    "Welcome to Udit's Portfolio 🚀"
);
