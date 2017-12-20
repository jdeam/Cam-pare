const camData = {};
let camCount = 0;

function Cam (brand, model, id, imgURL, rangeMin, rangeMax, weight, strength, price) {
	this.brand = brand;
	this.model = model;
  this.id = id;
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
	camCount++;
}

addCam(new Cam('Black Diamond', 'Camalot', '0.3 (Blue)', 'images/bd/c4/03_blue.png', 13.8, 23.4, 75, 8, 64.95))
addCam(new Cam('Black Diamond', 'Camalot', '0.4 (Gray)', 'images/bd/c4/04_gray.png', 15.5, 26.7, 83, 10, 64.95))
addCam(new Cam('Black Diamond', 'Camalot', '0.5 (Purple)', 'images/bd/c4/05_purple.png', 19.6, 33.5, 99, 12, 64.95))
addCam(new Cam('Black Diamond', 'Camalot', '0.75 (Green)', 'images/bd/c4/075_green.png', 23.9, 41.2, 119, 14, 64.95))
addCam(new Cam('Black Diamond', 'Camalot', '1 (Red)', 'images/bd/c4/1_red.png', 30.2, 52.1, 136, 14, 69.95))
addCam(new Cam('Black Diamond', 'Camalot', '2 (Yellow)', 'images/bd/c4/2_yellow.png', 37.2, 64.9, 155, 14, 74.95))
addCam(new Cam('Black Diamond', 'Camalot', '3 (Blue)', 'images/bd/c4/3_blue.png', 50.7, 87.9, 201, 14, 74.95))
addCam(new Cam('Black Diamond', 'Camalot', '4 (Gray)', 'images/bd/c4/4_gray.png', 66, 114.7, 289, 14, 89.95))
addCam(new Cam('Black Diamond', 'Camalot', '5 (Purple)', 'images/bd/c4/5_purple.png', 85.4, 148.5, 380, 14, 114.95))
addCam(new Cam('Black Diamond', 'Camalot', '6 (Green)', 'images/bd/c4/6_green.png', 114.1, 195, 557, 14, 124.95))

addCam(new Cam('Black Diamond', 'Camalot Ultralight', '0.4 (Gray)', 'images/bd/c4u/04_gray.png', 15.5, 26.7, 61, 8, 89.95))
addCam(new Cam('Black Diamond', 'Camalot Ultralight', '0.5 (Purple)', 'images/bd/c4u/05_purple.png', 19.6, 33.5, 74, 10, 89.95))
addCam(new Cam('Black Diamond', 'Camalot Ultralight', '0.75 (Green)', 'images/bd/c4u/075_green.png', 23.9, 41.2, 89, 12, 89.95))
addCam(new Cam('Black Diamond', 'Camalot Ultralight', '1 (Red)', 'images/bd/c4u/1_red.png', 30.2, 52.1, 101, 12, 89.95))
addCam(new Cam('Black Diamond', 'Camalot Ultralight', '2 (Yellow)', 'images/bd/c4u/2_yellow.png', 37.2, 64.9, 126, 12, 99.95))
addCam(new Cam('Black Diamond', 'Camalot Ultralight', '3 (Blue)', 'images/bd/c4u/3_blue.png', 50.7, 87.9, 167, 12, 109.95))
addCam(new Cam('Black Diamond', 'Camalot Ultralight', '4 (Gray)', 'images/bd/c4u/4_gray.png', 66, 114.7, 225, 12, 129.95))

addCam(new Cam('Black Diamond', 'Camalot X4', '0.1 (Red)', 'images/bd/x4/01_red.png', 8.4, 13.8, 51, 5, 74.95));
addCam(new Cam('Black Diamond', 'Camalot X4', '0.2 (Yellow)', 'images/bd/x4/02_yellow.png', 9.9, 16.5, 54, 6, 74.95));
addCam(new Cam('Black Diamond', 'Camalot X4', '0.3 (Blue)', 'images/bd/x4/03_blue.png', 12.4, 21.2, 75, 8, 74.95));
addCam(new Cam('Black Diamond', 'Camalot X4', '0.4 (Gray)', 'images/bd/x4/04_gray.png', 15.5, 26.6, 82, 9, 74.95));
addCam(new Cam('Black Diamond', 'Camalot X4', '0.5 (Purple)', 'images/bd/x4/05_purple.png', 19.8, 33.7, 91, 9, 74.95));
addCam(new Cam('Black Diamond', 'Camalot X4', '0.75 (Green)', 'images/bd/x4/075_green.png', 24, 41.2, 112, 9, 74.95));

addCam(new Cam('Black Diamond', 'Camalot C3', '000 (Gray)', 'images/bd/c3/000_gray.png', 7.8, 12.9, 55, 4, 64.95));
addCam(new Cam('Black Diamond',	'Camalot C3', '00 (Purple)', 'images/bd/c3/00_purple.png', 9, 13.7, 57, 6, 64.95));
addCam(new Cam('Black Diamond', 'Camalot C3', '0 (Green)', 'images/bd/c3/0_green.png', 10.7, 15.8, 59, 7, 64.95));
addCam(new Cam('Black Diamond',	'Camalot C3', '1 (Red)', 'images/bd/c3/1_red.png', 12, 18.8, 62, 10, 64.95));
addCam(new Cam('Black Diamond',	'Camalot C3', '2 (Yellow)', 'images/bd/c3/2_yellow.png', 14.2, 22.6, 66, 10, 64.95));

addCam(new Cam('Metolius', 'Ultralight Master Cam', '00 (Gray)', 'images/met/ul_mc/00_gray.png', 8.5, 12, 45, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '0 (Purple)', 'images/met/ul_mc/0_purple.png', 10, 15, 45, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '1 (Blue)', 'images/met/ul_mc/1_blue.png', 12.5, 18, 52, 8, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '2 (Yellow)', 'images/met/ul_mc/2_yellow.png', 15.5, 22.5, 55, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '3 (Orange)', 'images/met/ul_mc/3_orange.png', 18.5, 26.5, 65, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '4 (Red)', 'images/met/ul_mc/4_red.png', 23.5, 33.5, 75, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '5 (Black)', 'images/met/ul_mc/5_black.png', 28, 39.5, 85, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '6 (Green)', 'images/met/ul_mc/6_green.png', 32.5, 48, 96, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '7 (Light Blue)', 'images/met/ul_mc/7_light_blue.png', 40, 57.5, 112, 10, 64.95));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '8 (Purple)', 'images/met/ul_mc/8_purple.png', 48.5, 71.5, 129, 10, 64.95));

addCam(new Cam('Metolius', 'Supercam', 'S (Gray)', 'images/met/supercam/s_gray.png', 42, 63.4, 184, 12, 69.95));
addCam(new Cam('Metolius', 'Supercam', 'M (Maroon)', 'images/met/supercam/m_maroon.png', 52.5, 91.5, 255, 12, 79.95));
addCam(new Cam('Metolius', 'Supercam', 'L (Dark Blue)', 'images/met/supercam/l_dark_blue.png', 66.5, 118.5, 312, 12, 89.95));

addCam(new Cam('Metolius', 'Ultralight TCU', '00 (Gray)', 'images/met/ul_tcu/00_gray.png', 8.5, 12, 41, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '0 (Purple)', 'images/met/ul_tcu/0_purple.png', 10, 15, 43, 5, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '1 (Blue)', 'images/met/ul_tcu/1_blue.png', 12.5, 18, 50, 8, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '2 (Yellow)', 'images/met/ul_tcu/2_yellow.png', 15.5, 22.5, 57, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '3 (Orange)', 'images/met/ul_tcu/3_orange.png', 18.5, 26.5, 59, 10, 59.95));
addCam(new Cam('Metolius', 'Ultralight TCU', '4 (Red)', 'images/met/ul_tcu/4_red.png', 23.5, 33.5, 68, 10, 59.95));

addCam(new Cam('Wild Country', 'Friend', '0.5 (Purple)', 'images/wc/friend/05_purple.png', 20.6, 34.5, 88, 12, 64.95));
addCam(new Cam('Wild Country', 'Friend', '0.75 (Green)', 'images/wc/friend/075_green.png', 25.8, 43, 102, 12, 64.95));
addCam(new Cam('Wild Country', 'Friend', '1 (Red)', 'images/wc/friend/1_red.png', 31.7, 53.6, 123, 12, 69.95));
addCam(new Cam('Wild Country', 'Friend', '2 (Yellow)', 'images/wc/friend/2_yellow.png', 41.5, 69.3, 142, 12, 74.95));
addCam(new Cam('Wild Country', 'Friend', '3 (Blue)', 'images/wc/friend/3_blue.png', 52.7, 88, 192, 12, 74.95));
addCam(new Cam('Wild Country', 'Friend', '4 (Gray)', 'images/wc/friend/4_gray.png', 66.8, 112.1, 260, 12, 89.95));

addCam(new Cam('Wild Country', 'Technical Friend', '5 (Red)', 'images/wc/tech_friend/5_red.png', 84, 138, 339, 14, 119.95));
addCam(new Cam('Wild Country', 'Technical Friend', '6 (Green)', 'images/wc/tech_friend/6_green.png', 118, 194, 533, 14, 139.95));

addCam(new Cam('DMM', 'Dragon Cam', '00 (Blue)', 'images/dmm/dragon/00_blue.png', 13, 21, 75, 10, 69.95));
addCam(new Cam('DMM', 'Dragon Cam', '0 (Silver)', 'images/dmm/dragon/0_silver.png', 16, 25, 85, 14, 69.95));
addCam(new Cam('DMM', 'Dragon Cam', '1 (Purple)', 'images/dmm/dragon/1_purple.png', 20, 33, 103, 14, 74.95));
addCam(new Cam('DMM', 'Dragon Cam', '2 (Green)', 'images/dmm/dragon/2_green.png', 24, 41, 117, 14, 74.95));
addCam(new Cam('DMM', 'Dragon Cam', '3 (Red)', 'images/dmm/dragon/3_red.png', 29, 50, 128, 14, 74.95));
addCam(new Cam('DMM', 'Dragon Cam', '4 (Yellow)', 'images/dmm/dragon/4_yellow.png', 38, 64, 154, 14, 79.95));
addCam(new Cam('DMM', 'Dragon Cam', '5 (Blue)', 'images/dmm/dragon/5_blue.png', 50, 85, 208, 14, 84.95));
addCam(new Cam('DMM', 'Dragon Cam', '6 (Silver)', 'images/dmm/dragon/6_silver.png', 68, 114, 299, 14, 84.95));

addCam(new Cam('DMM', 'Demon Cam', '0 (Blue)', 'images/dmm/demon/0_blue.png', 13, 19, 82, 14, 64.95));
addCam(new Cam('DMM', 'Demon Cam', '0.5 (Red)', 'images/dmm/demon/05_red.png', 17, 24, 88, 14, 64.95));
addCam(new Cam('DMM', 'Demon Cam', '1 (Gold)', 'images/dmm/demon/1_gold.png', 19, 29, 96, 14, 64.95));
addCam(new Cam('DMM', 'Demon Cam', '1.5 (Silver)', 'images/dmm/demon/15_silver.png', 23, 35, 100, 14, 64.95));
addCam(new Cam('DMM', 'Demon Cam', '2 (Red)', 'images/dmm/demon/2_red.png', 29, 44, 112, 14, 64.95));
addCam(new Cam('DMM', 'Demon Cam', '2.5 (Gold)', 'images/dmm/demon/25_gold.png', 33, 55, 125, 14, 64.95));
addCam(new Cam('DMM', 'Demon Cam', '3 (Purple)', 'images/dmm/demon/3_purple.png', 43, 66, 152, 14, 67.95));
addCam(new Cam('DMM', 'Demon Cam', '3.5 (Blue)', 'images/dmm/demon/35_blue.png', 51, 82, 180, 14, 69.95));
addCam(new Cam('DMM', 'Demon Cam', '4 (Silver)', 'images/dmm/demon/4_silver.png', 64, 100, 220, 14, 74.95));

addCam(new Cam('Totem', 'Basic', '0.50 (Blue)', 'images/totem/basic/050_blue.png', 11.2, 17.4, 56, 5, 69.95))
addCam(new Cam('Totem', 'Basic', '0.65 (Green)', 'images/totem/basic/065_green.png', 13.6, 21.4, 60, 7, 69.95))
addCam(new Cam('Totem', 'Basic', '0.75 (Yellow)', 'images/totem/basic/075_yellow.png', 16.6, 26.1, 68, 9, 69.95))
addCam(new Cam('Totem', 'Basic', '0.95 (Red)', 'images/totem/basic/095_red.png', 19.9, 31.6, 72, 11, 69.95))

addCam(new Cam('Totem', 'Totem Cam', '0.50 (Black)', 'images/totem/totem_cam/050_black.png', 11.7, 18.9, 69, 6, 82.95))
addCam(new Cam('Totem', 'Totem Cam', '0.65 (Blue)', 'images/totem/totem_cam/065_blue.png', 13.8, 22.5, 75, 8, 82.95))
addCam(new Cam('Totem', 'Totem Cam', '0.80 (Yellow)', 'images/totem/totem_cam/080_yellow.png', 17, 27.7, 83, 9, 82.95))
addCam(new Cam('Totem', 'Totem Cam', '1.00 (Purple)', 'images/totem/totem_cam/100_purple.png', 20.9, 34.2, 95, 10, 82.95))
addCam(new Cam('Totem', 'Totem Cam', '1.25 (Green)', 'images/totem/totem_cam/125_green.png', 25.7, 42.3, 109, 13, 82.95))
addCam(new Cam('Totem', 'Totem Cam', '1.50 (Red)', 'images/totem/totem_cam/150_red.png', 31.6, 52.2, 132, 13, 82.95))
addCam(new Cam('Totem', 'Totem Cam', '1.80 (Orange)', 'images/totem/totem_cam/180_orange.png', 39.7, 64.2, 144, 13, 82.95))
