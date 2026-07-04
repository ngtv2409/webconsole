const Cons = (() => {
    const consoleElement = document.getElementById("console");

    function append(text, className) {
        const line = document.createElement("div");
        line.className = `line ${className}`;
        line.textContent = text;
        consoleElement.appendChild(line);
        consoleElement.scrollTop = consoleElement.scrollHeight;
    }

    return {
        println(text) {
            append(text, "");
        },

        clear() {
            consoleElement.innerHTML = "";
        },
    };
})();

document.getElementById("clearBtn").onclick = Cons.clear;

document.getElementById("runBtn").onclick = run;

function run() {
    Cons.clear();
    Cons.println("Hello, World!");
    Cons.println("\n(=== End ===)");
}
run();
