var options = {
    valueNames: ['Event', 'Date', 'Airline', 'MadAccom', 'MecAccom', 'Price', 'Brochurelink', 'Type',{attr:'href',name:'brochure'}],
    page: 3,
    pagination:true,
    // Since there are no elements in the list, this will be used as template.
    item: '<li class="pkglist"><img class="mq" style="position:relative; top:50px;" src="images/umrahbanner.jpg" width="150px" height="150px"><u class="pkgtitle Event"></u><p class="pkgcost"><i class="far fa-money-bill-alt"></i>&nbsp;Price(SGD):&nbsp;</p><div class="pkgamt Price"></div><p class="pkgdateheader"><i class="far fa-calendar-alt"></i></p>&nbsp;<div class="pkgdate Date"></div><p class="madhotelheader"><i class="fas fa-hotel"></i>&nbsp;</p><div class="madhotel MadAccom"></div><p class="mekhotelheader"><i class="fas fa-hotel"></i>&nbsp;</p><div class="mekhotel MecAccom"></div><p class="airlineheader"><i class="fas fa-plane-departure"></i></p><div class="airline Airline"></div><a href="#" class="btn btn-primary brochure btn-md brochurebutton"  role="button" aria-disabled="true">Brochure</a><a href="hajjumrahbooking.html" class="btn btn-primary btn-md booknow" role="button" aria-disabled="true">Book Now</a></li>'
};

var values = [
    {
        Type: 'Umrah',
        Event: '12 Day Umrah April 2019 ',
        Date: '17 April - 28 April 2019',
        Airline: 'Eithad Airways',
        MadAccom: 'Hotel Grand Mercure Madinah',
        MecAccom: 'Hotel Hilton Suites Makkah',
        Price: 3750,
        brochure: 'brochures/umrah12daysapril.pdf',
        Month: "September 2019 - December 2019"





    },
    {
        Type: 'Umrah',
        Event: '12 Day Umrah Early Ramadan May 2019 ',
        Date: '04 May - 15 May 2019',
        Airline: 'Scoot',
        MadAccom: 'Hotel Grand Mercure Madinah',
        MecAccom: 'Hotel Dar Al Ghufran Makkah',
        Price: 4350,
        brochure: 'brochures/umrah12daysapril.pdf',
        Month: "January 2019 - March 2019"




    },
    {
        Type: 'Hajj',
        Event: '16 Day Umrah End of Ramadan May 2019 ',
        Date: '25 May - 09 June 2019',
        Airline: 'Scoot',
        MadAccom: 'Hotel Grand Mercure Madinah',
        MecAccom: 'Hotel Mira Ayjad Makkah',
        Price: 4550,
        brochure: 'brochures/umrah12daysapril.pdf',
        Month: "April 2019 - June 2019"





    },
    {
        Type: 'Hajj',
        Event: '16 Day Umrah End of Ramadan May 2019 ',
        Date: '25 May - 09 June 2019',
        Airline: 'Scoot',
        MadAccom: 'Hotel Grand Mercure Madinah',
        MecAccom: 'Hotel Mira Ayjad Makkah',
        Price: 4550,
        brochure: 'brochures/umrah12daysapril.pdf',
        Month: "April 2019 - June 2019"





    }




];

var userList = new List('users', options, values);


function resetList() {
    userList.search();
    userList.filter();
    userList.update();
    $(".filter-all").prop('checked', true);
    $('.filter').prop('checked', false);
    $('.search').val('');
    //console.log('Reset Successfully!');
};

function updateList() {
    var values_package = $("input[name=ptype]:checked").val();
    var values_airline = $("input[name=airline]:checked").val();
    var values_month = $("input[name=month]:checked").val();


    userList.filter(function (item) {
        var packages = false;
        var airline = false;
        var month = false;

        if (values_package == "all") {
            packages = true;
        } else {
            packages = item.values().Type == values_package;

        }
        if (values_airline == null) {
            airline = true;
        } else {
            airline = item.values().Airline == values_airline;
        }
        if (values_month == null) {
            month = true;
        } else {
            month = item.values().Month == values_month;
        }

        return packages && airline && month;
    });
    userList.update();
    //console.log('Filtered: ' + values_gender);
}

$(function () {
    //updateList();
    $("input[name=ptype]").change(updateList);
    $('input[name=airline]').change(updateList);
    $('input[name=month]').change(updateList);

    userList.on('updated', function (list) {
        if (list.matchingItems.length > 0) {
            $('.no-result').hide()
        } else {
            $('.no-result').show()
        }
    });
});
