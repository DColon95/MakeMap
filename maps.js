const scale = 2; // Accepted values are 1 and 2 
const zoom = 20; // 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
const size = '640x640'; // This parameter takes a string of the form {horizontal_value}x{vertical_value}

/* This table shows the maximum allowable values for the size parameter at each scale value.
| scale=1 | scale=2                            |
| ------- | ---------------------------------- |
| 640x640 | 640x640 (returns 1280x1280 pixels) |*/

const key = '';

document.getElementById('address-form').addEventListener('submit', makeMaps);

function makeMaps(submit) {
    submit.preventDefault();

    let center = document.getElementById('address').value;
    let locationMapURL = 'https://maps.googleapis.com/maps/api/staticmap?center=' + URLEncode(center) + '&zoom=' + zoom + '&size=' + size + '&scale=' + scale + '&markers=color:red|' + URLEncode(center) + '&key=' + key;
    let aerialMapURL = locationMapURL + '&maptype=satellite';

    let aerialMap = document.getElementById('aerial');
    let locationMap = document.getElementById('location');

    aerialMap.src = aerialMapURL;
    locationMap.src = locationMapURL;
}

function URLEncode(text) {
    return text.replaceAll(' ', '+');
}
