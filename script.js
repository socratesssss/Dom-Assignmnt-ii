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
//  making div for li tools
    const btnlist = document.createElement("div");
    btnlist.className = "flex";

    // Creating a checkbox type button
    const liradio = document.createElement("span");
    liradio.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2 stroke-2 active:stroke-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>`;

   btnlist.appendChild(liradio)
    ullist.appendChild(btnlist);
    ullist.appendChild(span)
    ullist.appendChild(li)
})