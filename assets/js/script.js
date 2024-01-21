// using dayjs to set the date in the header section.
    var currentDate = dayjs().format("DD MMMM YYYY");
    var displayDate = document.getElementById("currentDay");
        displayDate.innerHTML = currentDate;
    var currentHour = dayjs().format(HH);



