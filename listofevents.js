var options = {
    valueNames: ['Event','Date','Airline','MadAccom','MecAccom','Price','Brochurelink','Type'],
    // Since there are no elements in the list, this will be used as template.
    item: '<li class="pkglist"><img style="position:relative; top:50px;" src="images/umrahbanner.jpg" width="150px" height="150px"><u><h4 class="pkgtitle Event"></h4></u><p class="pkgcost"><i class="far fa-money-bill-alt"></i>&nbsp;Price:&nbsp;</p><div class="pkgamt Price"></div><p class="pkgdateheader"><i class="far fa-calendar-alt"></i></p>&nbsp;<div class="pkgdate Date"></div><p class="madhotelheader"><i class="fas fa-hotel"></i>&nbsp;</p><div class="madhotel MadAccom"></div><p class="mekhotelheader"><i class="fas fa-hotel"></i>&nbsp;</p><div class="mekhotel MecAccom"></div><p class="airlineheader"><i class="fas fa-plane-departure"></i></p><div class="airline Airline"></div><a href="Brochurelink" class="btn btn-primary btn-sm brochurebutton" role="button" aria-disabled="true">Brochure</a><a href="#" class="btn btn-primary btn-sm booknow" role="button" aria-disabled="true">Book Now</a></li>'
};

var values = [
    {
        Type:'Umrah',
        Event: '12 Day Umrah April 2019 ',
        Date:'17 April - 28 April 2019',
        Airline:'Eithad Airways',
        MadAccom:'Hotel Grand Mercure Madinah',
        MecAccom:'Hotel Hilton Suites Makkah',
        Price:'3750 SGD',
        Brochurelink:'brochures/umrah12daysapril.pdf'

        

        

    },
    {
        Type:'Umrah',
        Event: '12 Day Umrah Early Ramadan May 2019 ',
        Date:'04 May - 15 May 2019',
        Airline:'Scoot',
        MadAccom:'Hotel Grand Mercure Madinah',
        MecAccom:'Hotel Dar Al Ghufran Makkah',
        Price:'4350 SGD',
        Brochurelink:'brochures/umrah12daysapril.pdf'

        

        

    },
    {
        Type:'Umrah',
        Event: '16 Day Umrah End of Ramadan May 2019 ',
        Date:'25 May - 09 June 2019',
        Airline:'Scoot',
        MadAccom:'Hotel Grand Mercure Madinah',
        MecAccom:'Hotel Mira Ayjad Makkah',
        Price:'4550 SGD',
        Brochurelink:'brochures/umrah12daysapril.pdf'

        

        

    }

 


];

var userList = new List('users', options, values);

