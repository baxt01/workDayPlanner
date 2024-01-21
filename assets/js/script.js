// using dayjs to set the date in the header section.
    var currentDate = dayjs().format("DD MMMM YYYY");
    var displayDate = document.getElementById("currentDay");
        displayDate.innerHTML = currentDate;
    var currentHour = dayjs().format("HH");

    // Setting the class for past, present and future on the time-blocks.
    $(".time-div").each(function() {
        var timeDiv = $(this).attr("id").split("-")[1];

        if (currentHour == timeDiv) {
            $(this).addClass("present");
            $(this).children(".description").addClass("present");
   
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");

        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    // on click of the save button save to the local storage, and prevent default on the browser.
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time,value);
    });