/*
    COMP1073-Client-Side JavaScript - 01 | Lab 2
    Group4: Katsuya Iuchi 200538257
            Rubayad Ferdous 200550045
*/

function ToyCar(img, model, color, decade, scale, material, price, features, manufacturer, size, sku, upc) {
    this.img = img;
    this.model = model;
    this.color = color;
    this.decade = decade;
    this.scale = scale;
    this.material = material;
    this.price = price;
    this.features = features;
    this.manufacturer = manufacturer;
    this.size = size;
    this.sku = sku;
    this.upc = upc;
}

//https://modeltoycars.com/1967-volkswagen-classical-beetle-hard-top-yellow-kinsmart-5375d-1-32-scale-diecast-model-replica/
const car1 = new ToyCar("./img/car1.jpg", "Volkswagen Beetle", "Yellow", "60s", "1/32 Scale", "Metal", "$6.99", "Openable doors and pullback motor action", "Kinsmart", "5\"L x 2\"W x 1.75\"H", "5375D-KIT-YELLOW", "764072067285");

//https://modeltoycars.com/1955-ford-crown-victoria-hard-top-pink-and-white-lucky-road-signature-94202pk-1-43-scale-diecast-model-toy-car/
const car2 = new ToyCar("./img/car2.jpg", "Ford Crown Victoria", "PinkS", "50s", "1/43 Scale", "Plastic", "$10.99", "Detailed exterior, Does not have openings", "Lucky Road Signature", "4.5\"L x 1.5\"W x 1.5\"H", "94202PK-RS-PINK", "680334620602");

//https://modeltoycars.com/2019-jeep-gladiator-rubicon-pickup-truck-firecracker-red-gt-spirit-us024-1-18-scale-resin-model-toy-car/
const car3 = new ToyCar("./img/car3.jpg", "Jeep Gladiator Rubicon Pickup Truck", "Red", "After 2000", "1/18 Scale", "Plastic", "$165.83", "Rubber Tires, Detailed Interior And Exterior, Car Does Not Have Openings", "GT Spirit", "12.25\"L x 4.75\"W x 3.75\"H", "5US024-GT-RED", "680334678566");

//https://modeltoycars.com/aston-martin-db7gt-black-sun-star-20677-1-43-scale-diecast-model-toy-car/
const car4 = new ToyCar("./img/car4.jpg", "Aston Martin DB7GT", "Black", "After 2000", "1/43 Scale ", "Metal", "$25.99", "Sits on a display plaque, Limited edition 1 of 888 pcs", "Sun Star", "4.25\"L x 1.5\"W x 1\"H", "20677-SUN-BLACK", "764072002804");

const cars = [car1, car2, car3, car4];

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    const carContainer = document.getElementById('car-container');

    const div = document.createElement('div');
    div.classList.add('car-container');

    const img = document.createElement('img');
    img.src = car.img;
    img.alt = car.model;

    const modelParagraph = document.createElement('p');
    modelParagraph.textContent = `Model: ${car.model}`;

    const brandParagraph = document.createElement('p');
    brandParagraph.textContent = `Brand: ${car.manufacturer}`;

    const colorParagraph = document.createElement('p');
    colorParagraph.textContent = `Color: ${car.color}`;

    const decadeParagraph = document.createElement('p');
    decadeParagraph.textContent = `Decade: ${car.decade}`;

    const scaleParagraph = document.createElement('p');
    scaleParagraph.textContent = `Scale: ${car.scale}`;

    const materialParagraph = document.createElement('p');
    materialParagraph.textContent = `Material: ${car.material}`;
    
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = `Price: ${car.price}`;

    const manufacturerParagraph = document.createElement('p');
    manufacturerParagraph.textContent = `Manufactured by: ${car.manufacturer}`;

    const skuParagraph = document.createElement('p');
    skuParagraph.textContent = `SKU: ${car.sku}`;

    const upcParagraph = document.createElement('p');
    upcParagraph.textContent = `UPC: ${car.upc}`;

    // Features and Size paragraphs initially hidden
    const featuresParagraph = document.createElement('p');
    featuresParagraph.textContent = `Features: ${car.features}`;
    featuresParagraph.classList.add('hidden');

    const sizeParagraph = document.createElement('p');
    sizeParagraph.textContent = `Size: ${car.size}`;
    sizeParagraph.classList.add('hidden');

    // Event listeners for mouseover and mouseout to show/hide features and size
    img.addEventListener('mouseover', () => {
        featuresParagraph.classList.remove('hidden');
        sizeParagraph.classList.remove('hidden');
    });

    img.addEventListener('mouseout', () => {
        featuresParagraph.classList.add('hidden');
        sizeParagraph.classList.add('hidden');
    });

    div.appendChild(img);
    div.appendChild(modelParagraph);
    div.appendChild(brandParagraph);
    div.appendChild(colorParagraph);
    div.appendChild(decadeParagraph);
    div.appendChild(scaleParagraph);
    div.appendChild(materialParagraph);
    div.appendChild(priceParagraph);
    div.appendChild(manufacturerParagraph);
    div.appendChild(skuParagraph);
    div.appendChild(upcParagraph);
    div.appendChild(featuresParagraph);
    div.appendChild(sizeParagraph);

    carContainer.appendChild(div);
}