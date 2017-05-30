$(document).ready(function () {
    
    //--- Load All Results by default --------//
    $('#searchResultsPanel').load('allresults.html');    

    //--- Menu Toggles ---//

    $("#menu-toggle-left").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-left");
    });

    $("#menu-toggle-right").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-right");
    });
    
    //-- Loading Search Results --//
    
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


    //--- Prevent main window scroll when scrolling Service Details ---//
    $('object').on('mousewheel DOMMouseScroll', function (e) {

        var e0 = e.originalEvent;
        var delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });
    
    //--- Add all to pack -----------------
    

});













