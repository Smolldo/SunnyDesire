const refs = {
    hotelSelect: document.querySelector('#hotel_selection'),
    dateStart: document.querySelector('.starter_date'),
    dateFinish: document.querySelector('.finish_date'),
    adultCount: document.querySelector('#adult_count'),
    childCount: document.querySelector('#lichinka_count'),
    hotels: ["Savana", "Havana", "Gabana", "Ohrana"]
}

const selectors = () =>{
    for(let item in refs.hotels){
        let opt1 = document.createElement('option');
        opt1.text = refs.hotels[item];
        refs.hotelSelect.add(opt1)
    }

    //Adult count
    for(let j = 1; j <= 4; j++){
        let opt2 = document.createElement('option');
        opt2.text = j;
        refs.adultCount.add(opt2)
    }

    //lichinki
    for(let j = 1; j <= 7; j++){
        let opt3 = document.createElement('option');
        opt3.text = j;
        refs.childCount.add(opt3)
    }
}
selectors();
