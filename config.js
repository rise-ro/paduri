var config = {
    style: 'mapbox://styles/riseproject/clonymsy500du01pb9pqhbh28',
    accessToken: 'pk.eyJ1IjoicmlzZXByb2plY3QiLCJhIjoiY2xvbnlqaHlsMDJ5ajJxcGE0dWRidnRqNiJ9.f4S7Wyf_K7k517LuP6kv-A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'Methodology',
            alignment: 'center',        
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 10,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        
        


        
        

    ]
};