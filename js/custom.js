$(document).ready(function () {

    //--- Menu Toggles ---//

    $("#menu-toggle-left").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-left");
    });

    $("#menu-toggle-right").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-right");
    });


    //--- Loading Service Details ---//

    $('button').click(function (e) {

        var buttonId = this.id;
        var objectFileName = '<object data="' + buttonId + '.html" />';

        e.preventDefault();
        $('#serviceDetailsPanel').html(objectFileName);
    });



    //--- Prevent main window scroll when scrolling Service Details ---//
    $('object').on('mousewheel DOMMouseScroll', function (e) {

        var e0 = e.originalEvent;
        var delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });

//    //--- Add/Remove to pack
//    $('#add').click(function() {
//        var addTitle = $(this).next('div').data();
//        var title = addTitle.titel;
//		var button = "<button class='delete'>remove</button>";
//        
//        $('ul.sidebar-nav-right').append("<li>" + title + button + "</li>");
//    });
//    
//    $(document).on("click",".delete",function() {
//        $(this).parent('li').remove();
//        $(this).remove();
//    });
    
    $('.add').click(function() {
        
        var $h3 = $(event.target).closest('.serviceTile').find('h3');
        var $title = $($h3).text();
        var delButton = "<button class='delete'>remove</button>";
        
        $('ul.sidebar-nav-right').append('<li>' + $title + delButton + '</li>');
//        $('.add').prop('disabled', true);
        
    });
    
    $(document).on("click",".delete",function() {
        $(this).parent('li').remove();
        $(this).remove();  

    });


});

