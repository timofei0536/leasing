if (document.querySelector('#map')) {

    ymaps.ready(init);

    function init() {

        var myMap = new ymaps.Map("map", {
            center: [59.934529, 30.353885],
            zoom: 16
        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark([59.934529, 30.353885], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/svg/map-marker.svg',
            iconImageSize: [140, 140],
            iconImageOffset: [-70, -70]
        });
        myMap.geoObjects.add(myPlacemark);
    }
}