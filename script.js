 // =========================================
// FRAME & THOUGHT JAVASCRIPT
// =========================================


// =========================================
// MOBILE MENU
// =========================================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show-menu");

    });

}


// =========================================
// DARK MODE
// =========================================

const themeBtn =
    document.getElementById("themeBtn");


if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}


// Load saved theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

    if (themeBtn) {

        themeBtn.textContent = "☀";

    }

}


// =========================================
// BLOG SEARCH
// =========================================

const searchInput =
    document.getElementById(
        "searchInput"
    );


const blogCards =
    document.querySelectorAll(
        ".blog-card"
    );


const categoryButtons =
    document.querySelectorAll(
        ".category"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


let selectedCategory = "all";


function filterBlogs() {

    if (!searchInput) {

        return;

    }


    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    let visibleCount = 0;


    blogCards.forEach(
        function (card) {

            const category =
                card.dataset.category || "";


            const title =
                (
                    card.dataset.title || ""
                ).toLowerCase();


            const descriptionElement =
                card.querySelector(
                    ".blog-content > p:not(.date)"
                );


            const description =
                descriptionElement
                    ? descriptionElement.textContent.toLowerCase()
                    : "";


            const categoryMatch =
                selectedCategory === "all" ||
                category === selectedCategory;


            const searchMatch =
                title.includes(searchText) ||
                description.includes(searchText);


            if (
                categoryMatch &&
                searchMatch
            ) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display =
                    "none";

            }

        }
    );


    if (noResults) {

        if (visibleCount === 0) {

            noResults.style.display =
                "block";

        } else {

            noResults.style.display =
                "none";

        }

    }

}


// Search

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterBlogs
    );

}


// Category buttons

categoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                categoryButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active-category"
                        );

                    }
                );


                this.classList.add(
                    "active-category"
                );


                selectedCategory =
                    this.dataset.category;


                filterBlogs();

            }
        );

    }
);


// =========================================
// BLOG ARTICLES
// =========================================

const articles = {

    1: {

        category:
            "TECHNOLOGY",

        title:
            "How Technology Is Changing Creative Thinking",

        date:
            "September 25, 2026",

        content: `
            <p>
                Technology has changed the way people
                think, create and communicate.
            </p>

            <p>
                From artificial intelligence to digital
                filmmaking tools, creators now have access
                to powerful technologies.
            </p>

            <p>
                The future of creativity will belong to
                people who can combine human imagination
                with technology.
            </p>
        `
    },


    2: {

        category:
            "CINEMA",

        title:
            "The Art of Visual Storytelling in Cinema",

        date:
            "September 22, 2026",

        content: `
            <p>
                Cinema is a visual language.
                A filmmaker does not always need dialogue
                to communicate emotion.
            </p>

            <p>
                Camera movement, framing, lighting,
                production design and colour can tell
                the audience how a character feels.
            </p>

            <p>
                Great visual storytelling allows the
                audience to experience the story instead
                of simply watching it.
            </p>
        `
    },


    3: {

        category:
            "CREATIVITY",

        title:
            "Turning Simple Ideas Into Meaningful Stories",

        date:
            "September 18, 2026",

        content: `
            <p>
                Every great story can begin with a simple
                observation.
            </p>

            <p>
                A conversation, a journey or a small
                moment between two friends can become
                the foundation of a powerful story.
            </p>

            <p>
                Creativity begins when we learn to look
                at ordinary situations from an unusual
                perspective.
            </p>
        `
    },


    4: {

        category:
            "CINEMA",

        title:
            "Why Lighting Matters in Filmmaking",

        date:
            "September 14, 2026",

        content: `
            <p>
                Lighting is one of the most important
                elements of cinematography.
            </p>

            <p>
                Soft lighting can create intimacy,
                while hard lighting can create tension
                and drama.
            </p>

            <p>
                A skilled cinematographer uses light
                to communicate emotion.
            </p>
        `
    },


    5: {

        category:
            "TECHNOLOGY",

        title:
            "Artificial Intelligence and the Future of Creativity",

        date:
            "September 10, 2026",

        content: `
            <p>
                Artificial intelligence is becoming an
                important tool for creative professionals.
            </p>

            <p>
                Writers can use AI for brainstorming,
                filmmakers can explore visual concepts,
                and designers can experiment with ideas.
            </p>

            <p>
                Human creativity, emotion and experience
                remain at the heart of meaningful
                storytelling.
            </p>
        `
    },


    6: {

        category:
            "CREATIVITY",

        title:
            "Finding Stories in Everyday Life",

        date:
            "September 5, 2026",

        content: `
            <p>
                Some of the most interesting stories
                are hidden inside everyday life.
            </p>

            <p>
                The people we meet, places we visit and
                experiences we have can become powerful
                creative material.
            </p>

            <p>
                A good storyteller learns to observe
                carefully and discover meaning in
                ordinary moments.
            </p>
        `
    }

};


// =========================================
// OPEN ARTICLE
// =========================================

function openArticle(id) {

    const article =
        articles[id];


    if (!article) {

        return;

    }


    const modal =
        document.getElementById(
            "articleModal"
        );


    const modalCategory =
        document.getElementById(
            "modalCategory"
        );


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    const modalDate =
        document.getElementById(
            "modalDate"
        );


    const modalText =
        document.getElementById(
            "modalText"
        );


    if (
        !modal ||
        !modalCategory ||
        !modalTitle ||
        !modalDate ||
        !modalText
    ) {

        return;

    }


    modalCategory.textContent =
        article.category;


    modalTitle.textContent =
        article.title;


    modalDate.textContent =
        article.date;


    modalText.innerHTML =
        article.content;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


// =========================================
// CLOSE ARTICLE
// =========================================

function closeArticle() {

    const modal =
        document.getElementById(
            "articleModal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "auto";

}


// =========================================
// CLOSE MODAL OUTSIDE
// =========================================

const articleModal =
    document.getElementById(
        "articleModal"
    );


if (articleModal) {

    articleModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                articleModal
            ) {

                closeArticle();

            }

        }
    );

}


// =========================================
// ESCAPE KEY
// =========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeArticle();

        }

    }
);


// =========================================
// CONTACT FORM
// =========================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your message has been received.";

            }


            contactForm.reset();

        }
    );

}