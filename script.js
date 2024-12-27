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

    p1.classList.remove("hidden");

    // Create new li elements
    const li = document.createElement("li");
    li.className = 'flex justify-between items-center p-3 bg-gray-100 rounded';

//    creat span for showing input text
    const span = document.createElement("span");
    span.textContent = Text;
    span.className = "flex-1";


    ullist.appendChild(span)
    ullist.appendChild(li)
})