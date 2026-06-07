// CLOCK

function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        now.toDateString();

    let hour = now.getHours();

    let greeting = "Good Evening";

    if(hour < 12){
        greeting = "Good Morning";
    }
    else if(hour < 18){
        greeting = "Good Afternoon";
    }

    let savedName = localStorage.getItem("username") || "";

    document.getElementById("greeting").innerHTML =
        greeting + (savedName ? ", " + savedName : "");
}

setInterval(updateClock,1000);
updateClock();


// SAVE NAME

function saveName(){

    let name =
        document.getElementById("username").value;

    localStorage.setItem("username",name);

    updateClock();
}


// TIMER

let timeLeft = 1500;
let timerInterval;

function updateTimer(){

    let minutes =
        Math.floor(timeLeft/60);

    let seconds =
        timeLeft % 60;

    document.getElementById("timer").innerHTML =
        `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer(){

    if(timerInterval) return;

    timerInterval = setInterval(()=>{

        if(timeLeft > 0){
            timeLeft--;
            updateTimer();
        }

    },1000);
}

function stopTimer(){

    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer(){

    stopTimer();

    timeLeft = 1500;

    updateTimer();
}

updateTimer();


// TASKS

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function renderTasks(){

    let taskList =
    document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        let li =
        document.createElement("li");

        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox"
                ${task.done ? "checked" : ""}
                onchange="toggleTask(${index})">

                <span class="${task.done ? "done" : ""}">
                    ${task.text}
                </span>
            </div>

            <div>
                <button onclick="editTask(${index})">
                    Edit
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);

    });

}

function addTask(){

    let input =
    document.getElementById("taskInput");

    let text = input.value.trim();

    if(text === "") return;

    // Prevent Duplicate Tasks

    let exists =
    tasks.some(task =>
        task.text.toLowerCase() ===
        text.toLowerCase()
    );

    if(exists){
        alert("Task already exists!");
        return;
    }

    tasks.push({
        text:text,
        done:false
    });

    saveTasks();
    renderTasks();

    input.value = "";
}

function toggleTask(index){

    tasks[index].done =
    !tasks[index].done;

    saveTasks();
    renderTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();
    renderTasks();
}

function editTask(index){

    let newText =
    prompt(
        "Edit Task",
        tasks[index].text
    );

    if(newText){

        tasks[index].text = newText;

        saveTasks();
        renderTasks();
    }
}

renderTasks();


// QUICK LINKS

let links =
JSON.parse(localStorage.getItem("links")) || [];

function saveLinks(){

    localStorage.setItem(
        "links",
        JSON.stringify(links)
    );
}

function renderLinks(){

    let container =
    document.getElementById("linksContainer");

    container.innerHTML = "";

    links.forEach(link=>{

        let a =
        document.createElement("a");

        a.href = link.url;

        a.target = "_blank";

        a.className = "link-btn";

        a.innerHTML = link.name;

        container.appendChild(a);
    });
}

function addLink(){

    let name =
    document.getElementById("linkName").value;

    let url =
    document.getElementById("linkUrl").value;

    if(name === "" || url === "") return;

    links.push({
        name:name,
        url:url
    });

    saveLinks();
    renderLinks();

    document.getElementById("linkName").value = "";
    document.getElementById("linkUrl").value = "";
}

renderLinks();


// DARK MODE

const themeBtn =
document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    let mode =
    document.body.classList.contains("dark")
    ? "dark"
    : "light";

    localStorage.setItem("theme",mode);

});
