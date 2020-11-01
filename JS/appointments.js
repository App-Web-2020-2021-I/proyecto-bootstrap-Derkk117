$(document).ready(function() {
    $("#CreateAppointmentForm").submit(function(e) {
        e.preventDefault();

        //Code...
    });
    $("#ModifyAppointmentForm").submit(function(e) {
        e.preventDefault();

        //Code...
    });
    $("#CreateAppointmentForm2").submit(function(e) {
        e.preventDefault();

        //Code...
    });
    $("#ModifyAppointmentForm2").submit(function(e) {
        e.preventDefault();

        //Code...
    });
});

function showAppointment() {
    window.location = "./Appointment.html";
}

function showModifyAppointment(list, create, modify) {
    $('#' + list)[0].style.display = "none";
    $('#' + create)[0].style.display = "none";
    $('#' + modify)[0].style.display = "block";
}

function showCreateAppointment(list, create, modify) {
    $('#' + list)[0].style.display = "none";
    $('#' + create)[0].style.display = "block";
    $('#' + modify)[0].style.display = "none";
}

function showAppointmentList(list, create, modify) {
    $('#' + list)[0].style.display = "block";
    $('#' + create)[0].style.display = "none";
    $('#' + modify)[0].style.display = "none";
}