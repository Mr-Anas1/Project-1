// Construction Cost Calculator JavaScript

// Pricing for additional services
const additionalServices = {
  carParking: 1800, // per sq ft
  sump: 25, // per litre
  recycling: 30000, // per person
  compoundWall: 2000, // per feet
  solar: 75000, // per KW
};

// Package data with pricing and features
const packages = {
  basic: {
    name: "Basic",
    price: 2100,
    features: [
      "RCC framed structure",
      "Basic materials",
      "RCC foundation & roof",
    ],
    popular: false,
    categories: {
      design: ["2D Floor Plan"],
      structure: [
        "Basement height: Upto 2 feet",
        "Steel: Any ISI brand or local brands",
        "Aggregates: 20mm & 40mm",
        "Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall or",
        "Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall (Rs.20/sft extra during rainy season due to increase in bricks price)",
        "Cement: Any ISI brand",
        "M Sand: Blockwork & P Sand: Plastering",
        "RCC Design Mix: M20",
        "Ceiling Height: 10 Feet",
      ],
      kitchen: [
        "Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 35 Per Sq ft",
        "Main Sink Faucet Upto 1500 & ISI Marked",
        "Kitchen Sink: Stainless Steel Upto 2000 Rs",
        "Kitchen Granite Slab: 20 mm Thick Upto 80 Rs per Sq ft",
      ],
      bathroom: [
        "Wall Tiles For 7 Feet Upto 35 Rs Per Sq ft",
        "CPVC/PVC: Any ISI brand",
        "Bathroom Accessories: EWC, Health Faucet, Wash Basin, Overhead Shower",
        "All bathroom fittings are white color & basic model in any ISI brand",
        "PVC WaterProof Doors",
      ],
      plumbing: [
        "<strong>Bathroom:</strong> 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet",
        "<strong>Dining:</strong> 1 wash basin with tap",
        "<strong>Kitchen:</strong> Single stainless steel sink with 1 tap",
        "<strong>Service:</strong> 1 tap point & water outlet point for washing machine",
      ],
      doors: [
        "Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness",
        "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
        "Windows: Standard aluminium 2 Track sliding window",
        "<strong>Door sizes:</strong>",
        "Main Door – 3.5′(Width) X 7′(Height)",
        "Rooms – 3′(Width) X 7′(Height)",
        "Bathroom & Balcony – 2.5′(Width) X 7′(Height)",
        "Window size – 4′(Width) X 4′(Height) (1 window per room)",
      ],
      painting: [
        "<strong>Interior:</strong>",
        "2 coats of any ISI brand emulsion paint for the walls (light colours)",
        "1 coat of primer and 2 coats of any emulsion paint for the ceiling",
        "<strong>Exterior:</strong>",
        "1 coat of any ISI brand primer",
        "1 coat of white cement",
        "2 coats of any emulsion paint (light colours)",
      ],
      flooring: [
        "Living & Dining Flooring: Tiles Upto 45 Rs Per Sq ft",
        "Room & Kitchen Flooring: Tiles Upto 45 Rs Per Sq ft",
        "Balcony & Open Area Flooring: Tiles Upto 35 Rs Per Sq ft",
        "Staircase Flooring: Anti-skid Tiles Upto 35 Rs Per Sq ft",
        "Parking Tiles: Anti-skid Tiles Upto 35 Rs Per Sq ft",
      ],
      electrical: [
        "Wires – Any ISI brand",
        "Switches – Any ISI brand",
        "<strong>Electrical Points</strong>",
        "<strong>Bedroom:</strong> 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control.",
        "1 AC point, 1 fan point and 2 lights point",
        "<strong>Bathroom:</strong> 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror",
        "<strong>Hall:</strong> 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 1 five amps sockets and switches along with cable point for TV connection",
        "<strong>Dining:</strong> 1 switch box with switches for 1 fan & 1 light",
        "<strong>Pooja:</strong> 1 switch box with switch for 1 light",
        "<strong>Kitchen:</strong> 1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with one 15 amps socket & switch for mixie/ oven.",
        "<strong>Service:</strong> 1 switch for light, 1 switch box with 15 amps socket & switch for washing machine",
      ],
      inclusives: [
        "Parapet wall upto 3 feet high (included if headroom is built)",
        "<strong>Lofts & Shelves:</strong>",
        "1 Loft in each bedroom, kitchen & pooja room on the shorter side of the wall",
        "1 Shelf in each bedroom, kitchen & pooja room of maximum width 5 feet",
      ],
      extras: [
        "Compound Wall",
        "Lift",
        "Roof weathering",
        "Carpentry & other wooden work",
        "EB Connections & Charges",
        "Govt. approval charges",
        "Water Connections & Charges",
        "Underground water storage Sump Rs 15 Per Litre",
        "Overhead sintex tank Rs.15 per litre",
        "Overhead concrete tank Rs 30 per litre",
        "Elevation Work Extra",
        "Water recycling tank based on the requirement",
        "Additional foundation height",
        "Soil testing",
        "Structural designing",
        "3D elevation designing",
        "Rainwater harvesting",
        "Outer area development (setback)",
      ],
    },
  },
  standard: {
    name: "Standard",
    price: 2299,
    features: [
      "All features in basic package",
    ],
    popular: true,
    categories: {
      design: ["2D Floor Plan", "3D Elevation Design"],
      structure: [
        "Basement height: Upto 3 feet",
        "Steel: amman",
        "Aggregates: 20mm & 40mm",
        "Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall",
        "Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall",
        "Cement: ultratech / Penna / Chettinad",
        "M Sand: Blockwork & River Sand: Plastering",
        "RCC Design Mix: M20",
        "Waterproofing: Dr.Fixit",
        "Ceiling Height: 10 Feet",
      ],
      kitchen: [
        "Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 45 Per Sqft",
        "Main Sink Faucet Upto 2000 & ISI Marked",
        "Kitchen Sink: Stainless Steel Upto 3000 Rs",
        "Kitchen Granite Slab: 20 mm Thick Upto 100 Rs per Sqft",
      ],
      bathroom: [
        "Wall Tiles For 7 Feet Upto 45 Rs Per Sqft",
        "CPVC/PVC: Ashirwad/watertech/Astral",
        "Bathroom Accessories: EWC, Health Faucet, Wash Basin, Overhead Shower",
        "All bathroom fittings are white color & basic model in parryware or johnson",
        "PVC WaterProof Doors",
      ],
      plumbing: [
        "<strong>Bathroom:</strong> 1 wash basin point with tap, 1 floor mount western closet with health faucet.",
        "<strong>Kitchen:</strong> Double stainless steel sink with pvc 1 tap. 1 RO point",
        "<strong>Service:</strong> 1 tap point & water outlet point for washing machine",
      ],
      doors: [
        "Main Door: Ready Made Malaysian Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness",
        "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
        "Windows: Standard aluminium 2 Track sliding window with powder coating to the required colour / UPVC sliding windows (white color) or in teak",
        "<strong>Door sizes:</strong>",
        "Main Door – 3.5′(Width) X 7′(Height)",
        "Rooms – 3′(Width) X 7′(Height)",
        "Bathroom & Balcony – 2.5′(Width) X 7′(Height)",
        "Window size – 4′(Width) X 4′(Height) (1 window per room)",
      ],
      painting: [
        "<strong>Interior:</strong>",
        "2 coats of Asian/ jsw putty",
        "1 coat of Asian primer or jsw and 2 coats of Asian tractor emulsion paint for the walls (light colours)",
        "1 coat of primer and 2 coats of Asian tractor emulsion paint for the ceiling",
        "<strong>Exterior:</strong>",
        "1 coat of Asian primer",
        "1 coat of white cement",
        "2 coats of Asian ace emulsion paint (light colours)",
      ],
      flooring: [
        "Living & Dining Flooring: Tiles Upto 50 Rs Per Sqft",
        "Room & Kitchen Flooring: Tiles Upto 50 Rs Per Sqft",
        "Balcony & Open Area Flooring: Tiles Upto 45 Rs Per Sqft",
        "Staircase Flooring: Anti-skid Tiles Upto 45 Rs Per Sqft",
        "Parking Tiles: Anti-skid Tiles Upto 45 Rs Per Sqft",
      ],
      electrical: [
        "Wires – Any ISI brand",
        "Switches – Any ISI brand",
        "<strong>Electrical Points</strong>",
        "<strong>Bedroom:</strong> 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control.",
        "1 AC point, 1 fan point and 2 lights point",
        "<strong>Bathroom:</strong> 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror",
        "<strong>Hall:</strong> 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 2 five amps sockets and switches along with cable point for TV connection",
        "<strong>Dining:</strong> 1 switch box with switches for 1 fan & 1 light",
        "<strong>Pooja:</strong> 1 switch box with switch for 1 light",
        "<strong>Kitchen:</strong> 1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch point for chimney. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with two 15 amps socket & switch for mixie/ oven.",
        "<strong>Service:</strong> 1 switch for light, 1 switch box with 15 amps socket & switch for washing machine",
        "Extras – One 5 amps switch & socket for computer",
      ],
      inclusives: [
        "Overhead Tank: 1000 litres Sintex",
        "MS Staircase Railing",
        "Parapet Wall 3 Feet High (included if headroom is built)",
        "Roof weathering is included if the build-up area is more than 2000 sft.",
        "<strong>Lofts & Shelves:</strong>",
        "1 Loft in each bedroom, kitchen & pooja room on the shorter side of the wall",
        "1 Shelf in each bedroom, kitchen & pooja room of maximum width 5 feet",
      ],
      extras: [
        "Compound Wall",
        "Lift",
        "Carpentry & other wooden work",
        "EB Connections & Charges",
        "Govt. approval charges",
        "Water Connections & Charges",
        "Underground water storage Sump Rs 25 Per Litre",
        "Overhead concrete tank Rs 35 per litre",
        "Gates",
        "Elevation Work Extra",
        "Water recycling tank based on the requirement",
        "Additional foundation height",
        "Soil Testing",
        "Structural designing",
        "Electrical/plumbing drawings",
        "Interior 3D view or walkthrough",
        "Outer area development (setback)",
      ],
    },
  },
  advanced: {
    name: "Premium",
    price: 2599,
    features: [
      "All features in standard package",
      "Granite flooring",
    ],
    popular: false,
    categories: {
      design: ["2D Floor Plan", "Structural Designing", "3D Elevation Design"],
      structure: [
        "Basement height: Upto 3 feet with beam 6 inches",
        "Steel: Tata Tiscon, SAIL",
        "Aggregates: 20mm & 40mm",
        "Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall",
        "Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall",
        "Cement: Ramco / Ultratech / Coromandel",
        "M Sand: Blockwork & River Sand: Plastering",
        "RCC Design Mix: M20",
        "Waterproofing: Dr.Fixit",
        "Ceiling Height: 10 Feet",
      ],
      kitchen: [
        "Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 50 Per Sqft",
        "Kitchen Sink: Stainless Steel Upto 4000 Rs",
        "Kitchen Granite Slab: 20 mm Thick Upto 120 Rs per Sqft",
      ],
      bathroom: [
        "Wall Tiles For 7 Feet Upto 55 Rs Per Sqft",
        "CPVC/PVC: Ashirwad/Supreme/Astral",
        "Bathroom Accessories: EWC, Health Faucet, Wash Basin, Overhead Shower",
        "All bathroom fittings are white color & basic model in jaquar",
        "ABS WaterProof Doors",
      ],
      plumbing: [
        "<strong>Bathroom:</strong> 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet",
        "<strong>Dining:</strong> 1 wash basin with tap",
        "<strong>Kitchen:</strong> Double stainless steel sink with 2 taps. 1 RO point",
        "<strong>Service:</strong> 1 tap point & water outlet point for washing machine",
      ],
      doors: [
        "Main Door: Ready Made First Quality Teak Door With First Quality Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness",
        "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
        "Windows: Standard aluminium 3 Track sliding window or in teak",
        "<strong>Door sizes:</strong>",
        "Main Door – 3.5′(Width) X 7′(Height)",
        "Rooms – 3′(Width) X 7′(Height)",
        "Bathroom & Balcony – 2.5′(Width) X 7′(Height)",
        "Window size – 4′(Width) X 4′(Height) (1 window per room)",
      ],
      painting: [
        "<strong>Interior:</strong>",
        "2 coats of Asian/ jsw putty",
        "1 coat of Asian primer  or jsw and 2 coats of any Asian tractor emulsion paint for the walls (light colours)",
        "1 coat of primer and 2 coats of Asian tractor emulsion paint for the ceiling",
        "<strong>Exterior:</strong>",
        "1 coat of weatherproof primer",
        "1 coat of white cement",
        "2 coats weatherproof emulsion paint (light colours)",
      ],
      flooring: [
        "Living & Dining Flooring: Granite Upto 100 Rs Per Sqft",
        "Room & Kitchen Flooring: Granite Upto 100 Rs Per Sqft",
        "Balcony & Open Area Flooring: Tiles Upto 55 Rs Per Sqft",
        "Staircase Flooring: Anti-skid Tiles Upto 50 Rs Per Sqft",
        "Parking Tiles: Anti-skid Tiles Upto 50 Rs Per Sqft",
      ],
      electrical: [
        "Wires – Finolex",
        "Switches – Legrand",
        "<strong>Electrical Points</strong>",
        "<strong>Bedroom:</strong> 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control.",
        "1 AC point, 1 fan point and 2 lights point",
        "<strong>Bathroom:</strong> 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror",
        "<strong>Hall:</strong> 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 3 five amps sockets and switches along with cable point for TV connection",
        "<strong>Dining:</strong> 1 switch box with switches for 1 fan & 1 light",
        "<strong>Pooja:</strong> 1 switch box with switch for 1 light",
        "<strong>Kitchen:</strong> 1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch point for chimney. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with three 15 amps socket & switch for mixie/ oven.",
        "<strong>Service:</strong> 1 switch for light, 1 switch box with two 15 amps socket & switch for washing machine (one in the top & on in the bottom)",
        "Extras– 1 additional switch & socket in each room for mobile charging. 5 amps socket & switch for computer",
      ],
      inclusives: [
        "Overhead Tank: 1000 litres Sintex",
        "SS Staircase Railing",
        "Parapet Wall 3 Feet High (included if headroom is built)",
        "Roof weathering is included if the build-up area is more than 2000 sft.",
        "1 MS safety grill gate for main door",
        "Structural designing",
        "Rain water harvesting",
        "<strong>Lofts & Shelves:</strong>",
        "1 Loft in each bedroom, kitchen & pooja room on the shorter side of the wall",
        "1 Shelf in each bedroom, kitchen & pooja room of maximum width 5 feet",
      ],
      extras: [
        "Compound Wall",
        "Lift",
        "Carpentry & other wooden work",
        "EB Connections & Charges",
        "Govt. approval charges",
        "Water Connections & Charges",
        "Underground water storage Sump Rs 25 Per Litre",
        "Overhead concrete tank Rs.40 per litre",
        "Gates",
        "Elevation Work Extra",
        "Water recycling tank based on the requirement",
        "Additional foundation height",
        "Structural designing",
        "Electrical/plumbing drawings",
        "Interior 3D view or walkthrough",
        "Outer area development (setback)",
      ],
    },
  },
};

// Function to create accordion HTML
function createAccordion(categories, packageType) {
  const categoryNames = {
    design: "Design",
    structure: "Structure",
    kitchen: "Kitchen",
    bathroom: "Bathroom",
    plumbing: "Plumbing",
    doors: "Doors & Windows",
    painting: "Painting",
    flooring: "Flooring",
    electrical: "Electrical",
    inclusives: "Other Inclusives",
    extras: "Extra Charges",
  };

  let accordionHTML = "";

  Object.keys(categories).forEach((category) => {
    const items = categories[category];
    const categoryName = categoryNames[category] || category;

    accordionHTML += `
            <div class="accordion-item border border-gray-200 rounded mb-2">
                <button class="accordion-header w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center" onclick="toggleAccordion(this)">
                    <span class="font-medium">${categoryName}</span>
                    <i class="fas fa-plus accordion-icon transition-transform duration-300"></i>
                </button>
                <div class="accordion-content bg-white">
                    <div class="p-4">
                        <ul class="space-y-1 text-sm text-gray-600">
                            ${items
                              .map((item) => `<li>• ${item}</li>`)
                              .join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `;
  });

  return accordionHTML;
}

// Function to create package card
function createPackageCard(packageKey, packageData) {
  const borderClass = packageData.popular
    ? "border-2 border-blue-500"
    : "border border-gray-200";
  const popularBadge = packageData.popular
    ? `<div class="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
        </div>`
    : "";

  return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden ${borderClass} relative">
            ${popularBadge}
            <div class="bg-${
              packageData.popular ? "blue-50" : "gray-100"
            } p-7 text-center">
                <h3 class="text-2xl font-bold text-gray-800">${
                  packageData.name
                }</h3>
                <div class="mt-4">
                    <span class="text-4xl font-bold text-blue-600">₹${packageData.price.toLocaleString()}</span>
                    <span class="text-gray-600">/sq ft</span>
                </div>
            </div>
            <div class="p-6">
                <ul class="space-y-2 mb-6">
                    ${packageData.features
                      .map(
                        (feature) =>
                          `<li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>${feature}</li>`
                      )
                      .join("")}
                </ul>
                
                <div class="space-y-2">
                    ${createAccordion(packageData.categories, packageKey)}
                </div>
            </div>
        </div>
    `;
}

// Function to toggle accordion
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector(".accordion-icon");

  if (content.classList.contains("active")) {
    content.classList.remove("active");
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
    icon.style.transform = "rotate(0deg)";
  } else {
    content.classList.add("active");
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
    icon.style.transform = "rotate(180deg)";
  }
}

// Increment/Decrement functions
function incrementValue(fieldId) {
  const field = document.getElementById(fieldId);
  const max = parseInt(field.getAttribute("max"));
  const current = parseInt(field.value);
  if (current < max) {
    field.value = current + 1;
    updateCalculations();
  }
}

function decrementValue(fieldId) {
  const field = document.getElementById(fieldId);
  const min = parseInt(field.getAttribute("min"));
  const current = parseInt(field.value);
  if (current > min) {
    field.value = current - 1;
    updateCalculations();
  }
}

// Update range slider displays
function updateRangeDisplay(rangeId, displayId) {
  const range = document.getElementById(rangeId);
  const display = document.getElementById(displayId);
  display.textContent = range.value;
  updateCalculations();
}

// Toggle summary section
function toggleSummary() {
  const content = document.getElementById("summary-content");
  const icon = document.getElementById("summary-icon");

  if (content.style.display === "none") {
    content.style.display = "block";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    content.style.display = "none";
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

// Update all calculations
function updateCalculations() {
  const constructionArea =
    parseInt(document.getElementById("construction-area").value) || 0;
  const packageSelect = document.getElementById("package-select").value;
  const carParking =
    parseInt(document.getElementById("car-parking").value) || 0;
  const sump = parseInt(document.getElementById("sump-range").value) || 0;
  const recycling =
    parseInt(document.getElementById("recycling-range").value) || 0;
  const compoundWall =
    parseInt(document.getElementById("compound-wall").value) || 0;
  const solar = parseInt(document.getElementById("solar-range").value) || 0;

  let summaryHTML = "";
  let grandTotal = 0;

  // Construction area cost
  let constructionCost = 0;
  if (packageSelect && packages[packageSelect]) {
    constructionCost = constructionArea * packages[packageSelect].price;
  }

  summaryHTML += `
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
                <div class="font-medium">Construction area in sq.ft</div>
            </div>
            <div class="text-right font-semibold">₹ ${constructionCost.toLocaleString()}</div>
        </div>
    `;
  grandTotal += constructionCost;

  // Package selection
  if (packageSelect && packages[packageSelect]) {
    summaryHTML += `
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                    <div class="font-medium">Select construction Package</div>
                    <div class="text-xs text-gray-500">${packages[packageSelect].name}</div>
                </div>
                <div class="text-right font-semibold">${packages[packageSelect].price}</div>
            </div>
        `;
  }

  // Car parking cost
  const parkingCost = carParking * additionalServices.carParking;
  summaryHTML += `
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
                <div class="font-medium">Car Parking area in square feet(optional)</div>
                <div class="text-xs text-gray-500">${carParking} x ${
    additionalServices.carParking
  }</div>
            </div>
            <div class="text-right font-semibold">₹ ${parkingCost.toLocaleString()}</div>
        </div>
    `;
  grandTotal += parkingCost;

  // Underground sump cost
  const sumpCost = sump * additionalServices.sump;
  summaryHTML += `
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
                <div class="font-medium">Underground sump required (optional)</div>
                <div class="text-xs text-gray-500">${sump} x ${
    additionalServices.sump
  }</div>
            </div>
            <div class="text-right font-semibold">₹ ${sumpCost.toLocaleString()}</div>
        </div>
    `;
  grandTotal += sumpCost;

  // Waste water recycling cost
  const recyclingCost = recycling * additionalServices.recycling;
  summaryHTML += `
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
                <div class="font-medium">Waste water recycling tank(optional)</div>
                <div class="text-xs text-gray-500">${recycling} x ${
    additionalServices.recycling
  }</div>
            </div>
            <div class="text-right font-semibold">₹ ${recyclingCost.toLocaleString()}</div>
        </div>
    `;
  grandTotal += recyclingCost;

  // Compound wall cost
  const wallCost = compoundWall * additionalServices.compoundWall;
  summaryHTML += `
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
                <div class="font-medium">Compound wall length(optional)</div>
                <div class="text-xs text-gray-500">${compoundWall} x ${
    additionalServices.compoundWall
  }</div>
            </div>
            <div class="text-right font-semibold">₹ ${wallCost.toLocaleString()}</div>
        </div>
    `;
  grandTotal += wallCost;

  // Solar power cost
  const solarCost = solar * additionalServices.solar;
  summaryHTML += `
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
                <div class="font-medium">Solar power required (optional)</div>
                <div class="text-xs text-gray-500">${solar} x ${
    additionalServices.solar
  }</div>
            </div>
            <div class="text-right font-semibold">₹ ${solarCost.toLocaleString()}</div>
        </div>
    `;
  grandTotal += solarCost;

  document.getElementById("summary-items").innerHTML = summaryHTML;
  document.getElementById(
    "grand-total"
  ).textContent = `₹ ${grandTotal.toLocaleString()}`;
}

// // Submit calculation
// function submitCalculation() {
//   const grandTotal = document.getElementById("grand-total").textContent;
//   alert(
//     `Thank you for using our calculator! Your estimated total cost is ${grandTotal}. Our team will contact you soon for detailed consultation.`
//   );
// }

// Function to render packages
function renderPackages() {
  const container = document.getElementById("pricing-packages");
  let packagesHTML = "";

  Object.keys(packages).forEach((packageKey) => {
    packagesHTML += createPackageCard(packageKey, packages[packageKey]);
  });

  container.innerHTML = packagesHTML;
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  renderPackages();

  // Add event listeners for real-time updates
  document
    .getElementById("construction-area")
    .addEventListener("input", updateCalculations);
  document
    .getElementById("package-select")
    .addEventListener("change", updateCalculations);
  document
    .getElementById("car-parking")
    .addEventListener("input", updateCalculations);
  document
    .getElementById("compound-wall")
    .addEventListener("input", updateCalculations);

  // Range sliders
  document.getElementById("sump-range").addEventListener("input", function () {
    updateRangeDisplay("sump-range", "sump-value");
  });

  document
    .getElementById("recycling-range")
    .addEventListener("input", function () {
      updateRangeDisplay("recycling-range", "recycling-value");
    });

  document.getElementById("solar-range").addEventListener("input", function () {
    updateRangeDisplay("solar-range", "solar-value");
  });

  // Initial calculation
  updateCalculations();
});
