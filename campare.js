function findCam (brand, model, id) {
	return camData[brand][model][id];
}

function findMatches(cam) {
	let result = [];
	for (let brand in camData) {
		for (let model in camData[brand]) {
			let closest;
			for (let id in camData[brand][model]) {
				let temp = camData[brand][model][id];
				if (closest===undefined) closest = temp;
				if (Math.abs(temp.midRange-cam.midRange)<Math.abs(closest.midRange-cam.midRange)) {
					closest = temp;
				}
			}
			if (Math.abs(closest.midRange-cam.midRange) < 0.2*cam.rangeTotal && closest !== cam) {
				result.push(closest);
			}
		}
	}
	return [cam].concat(result);
}

function renderTable(cam) {
	let cams = findMatches(cam);

	let id = document.querySelector('#cam-id');
	let color = document.querySelector('#cam-color');
	let range = document.querySelector('#cam-range');
	let weight = document.querySelector('#cam-weight');
	let strength = document.querySelector('#cam-strength');

	cams.forEach(function(cam) {
		let camName = document.createElement('th');
		camName.textContent = `${cam.brand} ${cam.model} #${cam.id}`;
		id.appendChild(camName);

		let camColor = document.createElement('td');
		let colorCell = document.createElement('div');
		colorCell.classList.add('color-cell');
		colorCell.style.backgroundColor = cam.color;
		camColor.appendChild(colorCell);
		color.appendChild(camColor);

		let camRange = document.createElement('td');
		camRange.textContent = `${cam.rangeMin} mm - ${cam.rangeMax} mm`;
		range.appendChild(camRange);

		let camWeight = document.createElement('td');
		camWeight.textContent = `${cam.weight} grams`;
		weight.appendChild(camWeight);

		let camStrength = document.createElement('td');
		camStrength.textContent = `${cam.strength} kN`;
		strength.appendChild(camStrength);
	});
}

function renderBrands(cams) {
	let brandSelector = document.querySelector('#brand-selector');
	Object.keys(cams).forEach(function(brand) {
		let brandOption = document.createElement('option');
		brandOption.textContent = brand;
		brandSelector.appendChild(brandOption);
	});
}

function renderModels(brand, cams) {
	let modelSelector = document.querySelector('#model-selector');
	Object.keys(cams[brand]).forEach(function(model) {
		let modelOption = document.createElement('option');
		modelOption.textContent = model;
		modelSelector.appendChild(modelOption);
	});
}

function renderSizes(brand, model, cams) {
	let sizeSelector = document.querySelector('#size-selector');
	Object.keys(cams[brand][model]).forEach(function(size) {
		let sizeOption = document.createElement('option');
		sizeOption.textContent = size;
		sizeSelector.appendChild(sizeOption);
	});
}



let testCam = findCam('Black Diamond', 'X4', '0.2 (Yellow)');
renderBrands(camData);
renderTable(testCam);
