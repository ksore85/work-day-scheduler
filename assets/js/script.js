// Show current date/time
const currentHour = moment().format("k");
const currentDate = moment().format("dddd, MMMM Do, YYYY");
const currentDateElement = document.querySelector("#currentDay");
currentDateElement.textContent = currentDate;
let tasksArray = []

$(document).on("click", ".task-item", function (event) { 
    event.preventDefault();

    const text = $(this)
        .text()
        .trim();

    const textInput = $("<textarea>")
        .addClass("edit-task-item")
        .val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");

    $(".edit-task-item")
        .next()
        .children()
        .removeClass("oi oi-lock-locked")
        .addClass("oi oi-lock-unlocked");
});

// blur task item 
$(document).on("blur", ".edit-task-item", function () {
   
    var text = $(this).val();

    var taskTd = $("<td>")
        .addClass("task-item")
        .text(text);
// replace task with new task
    $(this).replaceWith(taskTd);
});

// background color change by hour
function changeColor() {
    let hrDay = $(".time-block") 
    for (let i = 1; i < 10; i++) {
        let hrDayId = document.getElementsByClassName("time-block")[i].id
        let hrDayIdInt = parseInt(hrDayId);
        let currentHrInt = parseInt(currentHour)
        if (hrDay) {
            if (currentHrInt > hrDayIdInt) {
                hrDay[i].setAttribute('class', 'time-block past')
            } else if (currentHrInt < hrDayIdInt) {
                hrDay[i].setAttribute('class', 'time-block future')
            }
    }}
}

// Save Task Items to local storage
$(".saveBtn").click(function () {
    $(this)
    .find("span:first")
    .removeClass("oi oi-lock-unlocked")
    .addClass("oi oi-lock-locked");

    let addTask = $(this).siblings(".task-item").text();
    let taskHour = $(this).closest("tr").attr("id");
   
    let tasksObject = {
        task: addTask,
        time: taskHour
    }

    if (localStorage.getItem("tasksTable")) {
        tasksArray = JSON.parse(localStorage.getItem("tasksTable"))
    }
    tasksArray.push(tasksObject)
    localStorage.setItem("tasksTable", JSON.stringify(tasksArray))
    localStorage.setItem("task", addTask);
    localStorage.setItem("time", taskHour);
    tasksArray.sort();
});

function getTasks() {
    let showTasksObject = JSON.parse(localStorage.getItem("tasksTable"))
    for (let i = 0; i < showTasksObject.length; i++) {
        const text = showTasksObject[i].task;
        const hour = showTasksObject[i].time;
        $(`#${hour}`)
            .find("td:first")
            .text(text)
        }
}

// Invoke Functions
changeColor();

getTasks();
