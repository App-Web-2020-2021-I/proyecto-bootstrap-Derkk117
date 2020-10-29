$(document).ready(function() {
    $("#CreateAppointmentForm").submit(function(e) {
        e.preventDefault();

        //Code...
    })
});

function showModifyAppointment(list, create, modify) {
    $('#' + list)[0].style.display = "none";
    $('#' + create)[0].style.display = "none";
}

function showCreateAppointment(list, create, modify) {
    $('#' + list)[0].style.display = "none";
    $('#' + create)[0].style.display = "block";
}

function showAppointmentList(list, create, modify) {
    $('#' + list)[0].style.display = "block";
    $('#' + create)[0].style.display = "none";
}