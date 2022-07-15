$(document).ready(function () {
    var searchHistory = [];
    //-------------------------------
    // Dates pulled in from Moment.js
    //-------------------------------
    // Today's date
    const momentDay = moment().format('dddd, MMMM Do');
    $('.todayDate').prepend(momentDay);

    // Generate dates for the 5-day forecast
    for (var i = 1; i < 6; i++) {
        $(`#${i}Date`).text(moment().add(i, 'd').format('dddd, MMMM Do'));
    }
    //----------------------------------------------------------
    // Event listeners
    //----------------------------------------------------------
    // Submit event on search form
    $('form').on('submit', function (event) {
        event.preventDefault();
        // Collects the value from the search field
        let city = $('input').val();
        // Returns if input is empty
        if (city === '') {
            return;
        }

        // Runs the function to call the API and display retrieved data
        call();

        // Clears and resets the form
        $('form')[0].reset();
    });