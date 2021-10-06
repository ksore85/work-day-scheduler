// Show current date
const currentHour = moment().format("k");
const currentDate = moment().format("dddd, MMMM Do, YYYY");
const currentDateElement = document.querySelector("#currentDay");
currentDateElement.textContent = currentDate;


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

// background color 
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
    }
}
}
