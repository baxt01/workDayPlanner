// using dayjs to set the date in the header section.
    var currentDate = dayjs().format("DD MMMM YYYY");
    // displaying the date to the page.
    var displayDate = document.getElementById("currentDay");
        displayDate.innerHTML = currentDate;
        // getting the current hour in 24 hour format.
    var currentHour = dayjs().format("HH");

    // Setting the class for past, present and future on the time-blocks.
    $(".time-div").each(function() {
        // setting the timediv variable to the id of the timeblock into an array, 
        // where the time div is <div id="hour-09" class="row time-div"> select the numbers after the word hour-
        var timeDiv = $(this).attr("id").split("-")[1];
        // checking if the current time is = the timediv.
        if (currentHour == timeDiv) {
            // if it is = to current hour then add the class of present.
            $(this).addClass("present");
            $(this).children(".description").addClass("present");
            // if the current hour is less than the id of the time div set the class of future and remove the present class. 
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
            // if the current hour is greater than the id of the time div then remove the future class and add the past class.
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

    //Retrieve data from local storage 
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));

    //Clear button function for clearing content and local storage
    $("#clearFieldsBtn").click(function(event) {
        event.preventDefault;
        $("textArea").val("");
        localStorage.clear();
    });