$(document).ready({

});

function showModifyAppointment(list, create, modify) {
    $('#' + list)[0].style.display = "none";
}

function showCreateAppointment(list, create, modify) {
    $('#' + list)[0].style.display = "none";
}

function showAppointmentList(list, create, modify) {
    $('#' + list)[0].style.display = "block";
}