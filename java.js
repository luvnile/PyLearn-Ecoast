/*
    PyLearn
    Simple JavaScript for the Python tutorial website
*/


const examples = {

    hello: `print("Hello, World!")`,

    variables: `name = "Elline"
age = 19

print("Name:", name)
print("Age:", age)`,

    condition: `age = 18

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")`,

    loop: `for number in range(5):
    print(number)`
};


/*
    Load an example into the online compiler.

    Note:
    The online compiler is embedded using an iframe.
    Because the compiler is hosted on another website,
    JavaScript cannot directly control its editor because
    of browser security restrictions.

    Instead, this function copies the selected example
    to the clipboard so the student can paste it into
    the compiler.
*/

function loadExample(exampleName) {

    const code = examples[exampleName];

    if (!code) {
        return;
    }

    navigator.clipboard.writeText(code)
        .then(() => {

            alert(
                "Example copied!\n\n" +
                "Paste the code into the online Python compiler."
            );

            document
                .getElementById("compiler")
                .scrollIntoView({
                    behavior: "smooth"
                });

        })
        .catch(() => {

            alert(
                "Please copy this example manually:\n\n" +
                code
            );

        });
}


/*
    Highlight the current navigation section
    while scrolling.
*/

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    "nav a"
);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.style.color = "#1f4d35";
        }

    });

});
