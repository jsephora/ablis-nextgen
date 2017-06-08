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

    //-- Load Search Results --//

    $('.categoryTitle').click(function (e) {
        var categoryHREF = $(this).attr('data');
        
        e.preventDefault();
        $('#searchResultsPanel').load(categoryHREF); //loads category results HTML page
    });

    //--- Add/Remove to pack
    //$('a.add').click(function (e) {
    $(document).on("click", ".add", function () {
        //addToPack($(event.target), $(this));
        addToPack($(this));
        return false;
    });

    //--- Remove from pack and reactivate 'Add to pack' --//
    $(document).on("click", ".delete", function () {
        removeFromPack($(this));
        return false;
    });


    //--- supporting functions for Add/Remove to pack
    function getServiceTile(addBtn)
    {
        return addBtn.closest('.serviceTile');
    }

    function getServiceTileAddBtn(serviceTile)
    {
        return $(serviceTile).find('a.add');
    }

    function getServiceTileTitle(serviceTile) {
        var h3 = serviceTile.find('h3');
        var title = $(h3).text();
        return title;
    }

    function getServiceTileButtonId(addBtn) {
        return addBtn.closest('.serviceTile').find('button').attr('id');
    }

    function getServiceTileAddLink(btnAddId) {
        return $('button[id=' + btnAddId + ']').closest('.serviceTile').find('a.add');
    }

    function addItemToPack(addBtn) {
        var title = getServiceTileTitle(getServiceTile(addBtn));
        var delButton = '<button id="source_' + getServiceTileButtonId(addBtn) + '" class="delete">remove</button>';

        $('ul.sidebar-nav-right').append('<li >' + title + delButton + '</li>');
    }

    //function toggleServiceTileAddLink(addLink) {
    //    //--- Change link text to "Added" or "Add to Pack"
    //    var $linkText = (addLink.html() === 'Added') ? 'Add to pack' : 'Added';
    //    addLink.html($linkText);
    //}

    function setServiceTileAddLinkText(addLink, text)
    {
        addLink.html(text);
    }

    function addAllToPack()
    {
        // for each service tile, find its add link and title and construct the pack 
        var serviceTileArray = $('.serviceTile');

        for (var i = 0, len = serviceTileArray.length; i < len; i++) {
            var serviceTile = serviceTileArray[i];
            var addBtn = getServiceTileAddBtn(serviceTile);
            addToPack(addBtn);
        }
    }

    function addToPack(addBtn) {
        //add this item to Pack
        //addItemToPack(eventTarget);
        addItemToPack(addBtn);

        // ensure class is set to clicked so we can disable
        addBtn.addClass('clicked');

        //--- Change link text to "Added"
        setServiceTileAddLinkText(addBtn, "Added");
    }

    function removeAllFromPack()
    {
        // for each service added to the Pack, find its delete button and then parent li tag, and remove it from the pack
        var removeBtnInArray = $('.sidebar-nav-right .delete');

        for (var i = 0, len = removeBtnInArray.length; i < len; i++) {
            var removeBtn = removeBtnInArray[i];
            removeFromPack($(removeBtn));
        }
    }

    function removeFromPack(removeBtn) {
        // find the Add link and revert it back
        var sourceId = removeBtn.attr('id').replace('source_', '');
        var addLink = getServiceTileAddLink(sourceId);

        // tidy up class
        addLink.removeClass('clicked');

        // toggle the link text
        setServiceTileAddLinkText(addLink, "Add to pack");

        // remove the button and li item details from the Pack
        removeBtn.parent('li').remove();
        removeBtn.remove();
    }


//    $('#showAlcohol').click(function (e) {
//        e.preventDefault();
//        $('#searchResultsPanel').load('alcohol.html');
//    });
//
//    $('#showEmployment').click(function (e) {
//        e.preventDefault();
//        $('#searchResultsPanel').load('employment.html');
//    });
//
//    $('#showAll').click(function (e) {
//        e.preventDefault();
//        $('#searchResultsPanel').load('allresults.html');
//    });
    
    
//--- Add all/Remove all to/from pack--//
    //    var added = true;
    
    $('#addAll').click(function(e) {
        addAllToPack();

        //var $serviceName = $('.serviceTile').find('h3');
        //var $title = $($serviceName).text();
        //var delButton = "<button class='delete'>remove</button>";

        //if (added) {
        //e.preventDefault();
        //$('ul.sidebar-nav-right').append('<li>' + $title + delButton + '</li>');
        
        //$(this).addClass('clicked');
        //}
    });

    $('#removeAll').click(function (e) {
        removeAllFromPack();
    })
    
    //$('#addAll').click(function() {
    //    added = false;
    //});
    
//--- Remove from pack and reactivate 'Add all to pack' --//
    //$(document).on("click", ".delete", function() {
    //    $(this).parent('li').remove();
    //    $(this).remove();
    //    added = true;
    //    $('#addAll').removeClass('clicked');
    //});

    
//--- Open in New Tab --- //
//    $('#newTab').click(function(e) {
//        
//        $('#serviceDetailsPanel').load
//    })
    
    
});
