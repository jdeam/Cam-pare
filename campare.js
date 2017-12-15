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

let table = document.querySelector('table');

function renderEmptyTable() {
  while (table.children.length>0) {
    table.removeChild(table.lastChild);
  }

  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  tr.id = 'cam-id';
  let th = document.createElement('th');
  tr.appendChild(th);
  thead.appendChild(tr);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');
	tr = document.createElement('tr');
	tr.id = 'cam-img';
	th = document.createElement('th');
	tr.appendChild(th);
	tbody.appendChild(tr);

  tr = document.createElement('tr');
  tr.id = 'cam-range';
  th = document.createElement('th');
  th.textContent = 'Range';
  tr.appendChild(th);
  tbody.appendChild(tr);

  tr = document.createElement('tr');
  tr.id = 'cam-weight';
  th = document.createElement('th');
  th.textContent = 'Weight';
  tr.appendChild(th);
  tbody.appendChild(tr);

  tr = document.createElement('tr');
  tr.id = 'cam-strength';
  th = document.createElement('th');
  th.textContent = 'Strength';
  tr.appendChild(th);
  tbody.appendChild(tr);

	tr = document.createElement('tr');
	tr.id = 'cam-price';
	th = document.createElement('th');
	th.textContent = 'Price';
	tr.appendChild(th);
  tbody.appendChild(tr);

  table.appendChild(tbody);
}

function renderTable(cam) {
	while (table.children.length>0) {
		table.removeChild(table.lastChild);
	}
	renderEmptyTable();

	let cams = findMatches(cam);

	let id = document.querySelector('#cam-id');
	let img = document.querySelector('#cam-img');
	let range = document.querySelector('#cam-range');
	let weight = document.querySelector('#cam-weight');
	let strength = document.querySelector('#cam-strength');
	let price = document.querySelector('#cam-price');

	cams.forEach(function(cam) {
		let camName = document.createElement('th');
		camName.textContent = `${cam.brand} ${cam.model} #${cam.id}`;
		id.appendChild(camName);

		let camImg = document.createElement('td');
		let camPic = document.createElement('img');
		camPic.src = cam.imgURL;
		camImg.appendChild(camPic);
		img.appendChild(camImg);

		let camRange = document.createElement('td');
		camRange.textContent = `${cam.rangeMin} mm - ${cam.rangeMax} mm`;
		range.appendChild(camRange);

		let camWeight = document.createElement('td');
		camWeight.textContent = `${cam.weight} grams`;
		weight.appendChild(camWeight);

		let camStrength = document.createElement('td');
		camStrength.textContent = `${cam.strength} kN`;
		strength.appendChild(camStrength);

		let camPrice = document.createElement('td');
		camPrice.textContent = `$${cam.price}`;
		price.appendChild(camPrice);
	});
}

let brandSelector = document.querySelector('#brand-selector');
function renderBrands(cams) {
	Object.keys(cams).forEach(function(brand) {
		let brandOption = document.createElement('option');
		brandOption.textContent = brand;
		brandSelector.appendChild(brandOption);
	});
}

let modelSelector = document.querySelector('#model-selector');
function renderModels(brand, cams) {
	Object.keys(cams[brand]).forEach(function(model) {
		let modelOption = document.createElement('option');
		modelOption.textContent = model;
		modelSelector.appendChild(modelOption);
	});
}

let sizeSelector = document.querySelector('#size-selector');
function renderSizes(brand, model, cams) {
	Object.keys(cams[brand][model]).forEach(function(size) {
		let sizeOption = document.createElement('option');
		sizeOption.textContent = size;
		sizeSelector.appendChild(sizeOption);
	});
}

let submitButton = document.querySelector('#submit');

function clearMenu(menu) {
	let firstOption = menu.querySelector('option');
	while (menu.children.length>1) {
		menu.removeChild(menu.lastChild);
	}
	menu.selectedIndex = 0;
}

brandSelector.addEventListener('change', function(event) {
	event.preventDefault();
	clearMenu(sizeSelector);
	clearMenu(modelSelector);
	renderModels(this.value, camData);
});

modelSelector.addEventListener('change', function(event) {
	event.preventDefault();
	clearMenu(sizeSelector);
	renderSizes(brandSelector.value, this.value, camData);
});

submitButton.addEventListener('click', function(event) {
	event.preventDefault();
	if (brandSelector.value && modelSelector.value && sizeSelector.value) {
		let cam = findCam(brandSelector.value, modelSelector.value, sizeSelector.value);
		renderTable(cam);
	}
});

renderBrands(camData);
