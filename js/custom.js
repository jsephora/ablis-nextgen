$(document).ready(function () {

    //--- Load All Results by default --------//
    $('#searchResultsPanel').load('allresults.html');

    //--- Menu Toggles ---//

    $("#menu-toggle-left").click(function (e) {
        e.preventDefault();
        $("#content").toggleClass("toggled-left");
    });

    $("#menu-toggle-right").click(function (e) {
        e.preventDefault();
        $("#content").toggleClass("toggled-right");
    });

    //-- Loading Search Results --//

    $('.categoryTitle').click(function (e) {
        var categoryHREF = $(this).attr('data');
        var categoryID = $(this).attr('id');
        
            e.preventDefault();
            $('#searchResultsPanel').load(categoryHREF);
        
    });

    $('#showAlcohol').click(function (e) {
        e.preventDefault();
        $('#searchResultsPanel').load('alcohol.html');
    });

    $('#showEmployment').click(function (e) {
        e.preventDefault();
        $('#searchResultsPanel').load('employment.html');
    });

    $('#showAll').click(function (e) {
        e.preventDefault();
        $('#searchResultsPanel').load('allresults.html');
    });
});



