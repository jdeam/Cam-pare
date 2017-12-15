const camData = {};

function Cam (brand, model, id, color, imgURL, rangeMin, rangeMax, weight, strength, price) {
	this.brand = brand;
	this.model = model;
  this.id = id;
  this.color = color;
  this.imgURL = imgURL;
	this.rangeMin = rangeMin;
	this.rangeMax = rangeMax;
	this.rangeTotal = parseFloat((rangeMax - rangeMin).toFixed(1));
	this.midRange = parseFloat(((rangeMin + rangeMax)/2).toFixed(1));
	this.weight = weight;
	this.strength = strength;
	this.price = price;
}

function addCam (cam) {
	let camNotAdded = true;

	while (camNotAdded) {
		if (cam.brand in camData) {
			if (cam.model in camData[cam.brand]) {
        camData[cam.brand][cam.model][cam.id] = cam;
        camNotAdded = false;
			} else {
				camData[cam.brand][cam.model] = {};
			}
		} else {
			camData[cam.brand] = {};
		}
	}
}

addCam(new Cam('Black Diamond', 'X4', '0.1 (Red)', 'Red', 'images/bd/x4/01_red.png', 8.4, 13.8, 51, 5, 74.95));
addCam(new Cam('Black Diamond', 'X4', '0.2 (Yellow)', 'Yellow', 'images/bd/x4/02_yellow.png', 9.9, 16.5, 54, 6, 74.95));
addCam(new Cam('Black Diamond', 'X4', '0.3 (Blue)', 'Blue', 'images/bd/x4/03_blue.png', 12.4, 21.2, 75, 8, 74.95));
addCam(new Cam('Black Diamond', 'X4', '0.4 (Gray)', 'Gray', 'images/bd/x4/04_gray.png', 15.5, 26.6, 82, 9, 74.95));
addCam(new Cam('Black Diamond', 'X4', '0.5 (Purple)', 'Purple', 'images/bd/x4/05_purple.png', 19.8, 33.7, 91, 9, 74.95));
addCam(new Cam('Black Diamond', 'X4', '0.75 (Green)', 'Green', 'images/bd/x4/075_green.png', 24, 41.2, 112, 9, 74.95));

addCam(new Cam('Black Diamond', 'C3', '000 (Gray)', 'Gray', 'images/bd/c3/000_gray.png', 7.8, 12.9, 55, 4, 64.95));
addCam(new Cam('Black Diamond',	'C3', '00 (Purple)', 'Purple', 'images/bd/c3/00_purple.png', 9, 13.7, 57, 6, 64.95));
addCam(new Cam('Black Diamond', 'C3', '0 (Green)', 'Green', 'images/bd/c3/0_green.png', 10.7, 15.8, 59, 7, 64.95));
addCam(new Cam('Black Diamond',	'C3', '1 (Red)', 'Red', 'images/bd/c3/1_red.png', 12, 18.8, 62, 10, 64.95));
addCam(new Cam('Black Diamond',	'C3', '2 (Yellow)', 'Yellow', 'images/bd/c3/2_yellow.png', 14.2, 22.6, 66, 10, 64.95));

addCam(new Cam('Metolius', 'Ultralight Master Cam', '00 (Gray)', 'Gray', 'images/met/ul_mc/00_gray.png', 8.5, 12, 45, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '0 (Purple)', 'Purple', 'images/met/ul_mc/0_purple.png', 10, 15, 45, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '1 (Blue)', 'Blue', 'images/met/ul_mc/1_blue.png', 12.5, 18, 52, 8, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '2 (Yellow)', 'Yellow', 'images/met/ul_mc/2_yellow.png', 15.5, 22.5, 55, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '3 (Orange)', 'Orange', 'images/met/ul_mc/3_orange.png', 18.5, 26.5, 65, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '4 (Red)', 'Red', 'images/met/ul_mc/4_red.png', 23.5, 33.5, 75, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '5 (Black)', 'Black', 'images/met/ul_mc/5_black.png', 28, 39.5, 85, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '6 (Green)', 'Green', 'images/met/ul_mc/6_green.png', 32.5, 48, 96, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '7 (Light Blue)', 'Light Blue', 'images/met/ul_mc/7_light_blue.png', 40, 57.5, 112, 10, 64.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '8 (Purple)', 'Purple', 'images/met/ul_mc/8_purple.png', 48.5, 71.5, 129, 10, 64.95));

addCam(new Cam('Metolius', 'Ultralight TCU', '00 (Gray)', 'Gray', 'images/met/ul_tcu/00_gray.png', 8.5, 12, 41, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '0 (Purple)', 'Purple', 'images/met/ul_tcu/0_purple.png', 10, 15, 43, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '1 (Blue)', 'Blue', 'images/met/ul_tcu/1_blue.png', 12.5, 18, 50, 8, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '2 (Yellow)', 'Yellow', 'images/met/ul_tcu/2_yellow.png', 15.5, 22.5, 57, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '3 (Orange)', 'Orange', 'images/met/ul_tcu/3_orange.png', 18.5, 26.5, 59, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '4 (Red)', 'Red', 'images/met/ul_tcu/4_red.png', 23.5, 33.5, 68, 10, 59.95));

addCam(new Cam('Wild Country', 'Friend', '0.5 (Purple)', 'Purple', 'images/wc/friend/05_purple.png', 20.6, 34.5, 88, 12, 64.95));
addCam(new Cam('Wild Country', 'Friend', '0.75 (Green)', 'Green', 'images/wc/friend/075_green.png', 25.8, 43, 102, 12, 64.95));
addCam(new Cam('Wild Country', 'Friend', '1 (Red)', 'Red', 'images/wc/friend/1_red.png', 31.7, 53.6, 123, 12, 69.95));
addCam(new Cam('Wild Country', 'Friend', '2 (Yellow)', 'Yellow', 'images/wc/friend/2_yellow.png', 41.5, 69.3, 142, 12, 74.95));
addCam(new Cam('Wild Country', 'Friend', '3 (Blue)', 'Blue', 'images/wc/friend/3_blue.png', 52.7, 88, 192, 12, 74.95));
addCam(new Cam('Wild Country', 'Friend', '4 (Gray)', 'Gray', 'images/wc/friend/4_gray.png', 66.8, 112.1, 260, 12, 89.95));

addCam(new Cam('Wild Country', 'Technical Friend', '5 (Red)', 'Red', 'images/wc/tech_friend/5_red.png', 84, 138, 339, 14, 119.95));
addCam(new Cam('Wild Country', 'Technical Friend', '6 (Green)', 'Green', 'images/wc/tech_friend/6_green.png', 118, 194, 533, 14, 139.95));

// addCam(new Cam('Fixe', 'Alien LITE', '1/3 (Black)',	'Black', 8, 14,	46,	5));
// addCam(new Cam('Fixe', 'Alien LITE', '3/8 (Blue)',	'Blue', 10, 17,	48,	6));
// addCam(new Cam('Fixe', 'Alien LITE', '1/2 (Green)',	'Green', 13, 22, 52, 7));
// addCam(new Cam('Fixe', 'Alien LITE', '3/4 (Yellow)',	'Yellow', 15, 25, 58, 10));
// addCam(new Cam('Fixe', 'Alien LITE', '7/8 (Gray)',	'Gray', 17, 30,	59,	10));
// addCam(new Cam('Fixe', 'Alien LITE', '1 (Red)',	'Red', 20, 30, 63, 10));
//
// addCam(new Cam ('Totem', 'Basic', '0.50 (Blue)', 'Blue', 11.2, 17.4, 56, 5));
// addCam(new Cam ('Totem', 'Basic', '0.65 (Green)', 'Green', 13.6, 21.4, 60, 7));
// addCam(new Cam ('Totem', 'Basic', '0.75 (Yellow)', 'Yellow', 16.6, 26.1, 68, 9));
// addCam(new Cam ('Totem', 'Basic', '0.95 (Red)', 'Red', 19.9, 31.6, 72, 11));
