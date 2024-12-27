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

    // Creating a checkbox type button in new li
    const liradio = document.createElement("span");
    liradio.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2 stroke-2 active:stroke-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>`;

             // Creating a edit btn button in new li

            const edtbtn = document.createElement("span");
            edtbtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2 stroke-2 stroke-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>`;
   li.appendChild(span)
   btnlist.appendChild(edtbtn)
   btnlist.appendChild(liradio)
    li.appendChild(btnlist);
    
    ullist.appendChild(li)
})