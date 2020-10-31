$(document).ready(function() {
    $("#CreateProductForm").submit(function(e) {
        e.preventDefault();

        //Code...
    });
    $("#CreateProductForm2").submit(function(e) {
        e.preventDefault();

        //Code...
    });
});

function showProductList(list, create) {
    $('#' + list)[0].style.display = "block";
    $('#' + create)[0].style.display = "none";
}

function showAddNewProduct(list, create) {
    $('#' + list)[0].style.display = "none";
    $('#' + create)[0].style.display = "block";
}