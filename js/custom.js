$(document).ready(function () {

    //--- Load All Results by default --------//
    $('#searchResultsPanel').load('allresults.html');

    //--- Menu Toggles ---//

    $("#menu-toggle-left").click(function (e) {
        e.preventDefault();
        $("#content").toggleClass("toggled-left");
        $("i").toggleClass('fa-chevron-right fa-chevron-left');
    });

    $("#menu-toggle-right").click(function (e) {
        e.preventDefault();
        $("#content").toggleClass("toggled-right");
        $("i").toggleClass('fa-chevron-left fa-chevron-right');
    });

    //-- Loading Search Results --//

    $('.categoryTitle').click(function (e) {
        var categoryHREF = $(this).attr('data');
        
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
    
    
//--- Add all/Remove all to/from pack--//
        var added = true;
    
    $('#addAll').click(function(e) {

        var $serviceName = $('.serviceTile').find('h3');
        var $title = $($serviceName).text();
        var delButton = "<button class='delete'>remove</button>";

        if (added) {
        e.preventDefault();
        $('ul.sidebar-nav-right').append('<li>' + $title + delButton + '</li>');
        
        $(this).addClass('clicked');
        }
    });
    
    $('#addAll').click(function() {
        added = false;
    });
    
//--- remove from pack and reactivate 'Add all to pack' --//
    $(document).on("click", ".delete", function() {
        $(this).parent('li').remove();
        $(this).remove();
        added = true;
        $('#addAll').removeClass('clicked');
    });
    


    
//--- Open in New Tab --- //
//    $('#newTab').click(function() {
//        
//        $('#serviceDetailsPanel').load
//    })
    
    
});



























































