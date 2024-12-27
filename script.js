const input = document.getElementById("input");
const addbtn = document.getElementById("add");
const ullist = document.getElementById("list");
const count = document.getElementById("counter");
const p1 = document.getElementById("p1");

let completedCount = 0; // Keeps track of completed tasks
const updateCounter = () => {
    count.textContent = completedCount;
};

// Event listener for adding tasks
addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const Text = input.value.trim();

    if (Text === "") {
        alert("Add your task");
        return;
    }
})