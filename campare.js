const camData = new Map();

function Cam (brand, model, id, color, rangeMin, rangeMax, weight, strength) {
	this.brand = brand;
	this.model = model;
  this.id = id;
  this.color = color;
	this.rangeMin = rangeMin;
	this.rangeMax = rangeMax;
	this.rangeTotal = parseFloat((rangeMax - rangeMin).toFixed(1));
	this.midRange = parseFloat(((rangeMin + rangeMax)/2).toFixed(1));
	this.weight = weight;
	this.strength = strength;
}

function addCam (cam) {
	let camBrand = cam.brand;
	let camModel = cam.model;
	let camId = cam.id;
	let camNotAdded = true;

	while (camNotAdded) {
		if (camData.has(camBrand)) {
			if (camData.get(camBrand).has(camModel)) {
        camData.get(camBrand).get(camModel).set(camId, cam);
        camNotAdded = false;
			} else {
				camData.get(camBrand).set(camModel, new Map());
			}
		} else {
			camData.set(camBrand, new Map());
		}
	}
}

function findCam (brand, model, id) {
	return camData.get(brand).get(model).get(id);
}

addCam(new Cam('Black Diamond', 'X4', '0.1 (Red)', 'Red', 8.4, 13.8, 51, 5));
addCam(new Cam('Black Diamond', 'X4', '0.2 (Yellow)', 'Yellow', 9.9, 16.5, 54, 6));
addCam(new Cam('Black Diamond', 'X4', '0.3 (Blue)', 'Blue', 12.4, 21.2, 75, 8));
addCam(new Cam('Black Diamond', 'X4', '0.4 (Gray)', 'Gray', 15.5, 26.6, 82, 9));
addCam(new Cam('Black Diamond', 'X4', '0.5 (Purple)', 'Purple', 19.8, 33.7, 91, 9));
addCam(new Cam('Black Diamond', 'X4', '0.75 (Green)', 'Green', 24, 41.2, 112, 9));

addCam(new Cam('Black Diamond', 'C3', '000 (Gray)', 'Gray', 7.8, 12.9, 55, 4));
addCam(new Cam('Black Diamond',	'C3', '00 (Purple)', 'Purple', 9, 13.7, 57, 6));
addCam(new Cam('Black Diamond', 'C3', '0 (Green)', 'Green', 10.7, 15.8, 59, 7));
addCam(new Cam('Black Diamond',	'C3', '1 (Red)', 'Red', 12, 18.8, 62, 10));
addCam(new Cam('Black Diamond',	'C3', '2 (Yellow)', 'Yellow', 14.2, 22.6, 66, 10));

addCam(new Cam('Metolius', 'Ultralight Master Cam', '00 (Gray)', 'Gray', 8.5, 12, 45, 5));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '0 (Purple)', 'Purple', 10, 15, 45, 5));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '1 (Blue)', 'Blue', 12.5, 18, 52, 8));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '2 (Yellow)', 'Yellow', 15.5, 22.5, 55, 10));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '3 (Orange)', 'Orange', 18.5, 26.5, 65, 10));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '4 (Red)', 'Red', 23.5, 33.5, 75, 10));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '5 (Black)', 'Black', 28, 39.5, 85, 10));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '6 (Green)', 'Green', 32.5, 48, 96, 10));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '7 (Light Blue)', 'Light Blue', 40, 57.5, 112, 10));
addCam(new Cam('Metolius', 'Ultralight Master Cam', '8 (Purple)', 'Purple', 48.5, 71.5, 129, 10));

addCam(new Cam('Fixe', 'Alien LITE', '1/3 (Black)',	'Black', 8, 14,	46,	5));
addCam(new Cam('Fixe', 'Alien LITE', '3/8 (Blue)',	'Blue', 10, 17,	48,	6));
addCam(new Cam('Fixe', 'Alien LITE', '1/2 (Green)',	'Green', 13, 22, 52, 7));
addCam(new Cam('Fixe', 'Alien LITE', '3/4 (Yellow)',	'Yellow', 15, 25, 58, 10));
addCam(new Cam('Fixe', 'Alien LITE', '7/8 (Gray)',	'Gray', 17, 30,	59,	10));
addCam(new Cam('Fixe', 'Alien LITE', '1 (Red)',	'Red', 20, 30, 63, 10));

addCam(new Cam ('Totem', 'Basic', '0.50 (Blue)', 'Blue', 11.2, 17.4, 56, 5));
addCam(new Cam ('Totem', 'Basic', '0.65 (Green)', 'Green', 13.6, 21.4, 60, 7));
addCam(new Cam ('Totem', 'Basic', '0.75 (Yellow)', 'Yellow', 16.6, 26.1, 68, 9));
addCam(new Cam ('Totem', 'Basic', '0.95 (Red)', 'Red', 19.9, 31.6, 72, 11));
