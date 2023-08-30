const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");
const newInner = `<li><strong>Type</strong></li>
<li><strong>Fuel</strong></li>
<li><strong>Passengers</strong></li>
<li><strong>Stops</strong></li>
<li><strong>OwnedBy</strong></li>
<li><strong>Electric</strong></li>
<li><strong>Tandem</strong></li>`;

document.querySelector(".el").addEventListener("mousedown", showElectrics);
document.querySelector(".two").addEventListener("mousedown", showMinTwo);
document.querySelector(".jonas").addEventListener("mousedown", showJonasEl);
document
  .querySelector(".rugbrød")
  .addEventListener("mousedown", showTwoRugbrød);

document.querySelector(".alle").addEventListener("mousedown", showAll);

showTheseVehicles(vehicles);

function showAll() {
  ulPointer.innerHTML = newInner;
  showTheseVehicles(vehicles);
}

function showTheseVehicles(arr) {
  ulPointer.innerHTML = "";
  ulPointer.innerHTML = newInner;
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    if (each.fuel === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    }
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    if (each.stops === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.stops}</li>`;
    }
    if (each.ownedBy === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    }
    if (each.isElectric === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>X</li>`;
    }
    if (each.isTandem === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>X</li>`;
    }
  });
}

function isElectric(vehicle) {
  if (vehicle.isElectric) {
    return true;
  } else {
    return false;
  }
}
function showElectrics() {
  ulPointer.innerHTML = newInner;
  const onlyElectric = vehicles.filter(isElectric);
  showTheseVehicles(onlyElectric);
}

function minTwoSeats(vehicle) {
  if (vehicle.passengers >= 2) {
    return true;
  } else {
    return false;
  }
}
function showMinTwo() {
  ulPointer.innerHTML = newInner;
  const moreThanOneSeat = vehicles.filter(minTwoSeats);
  showTheseVehicles(moreThanOneSeat);
}

function electricJonas(vehicle) {
  if (vehicle.isElectric && vehicle.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}
function showJonasEl() {
  ulPointer.innerHTML = newInner;
  const onlyElectricJonas = vehicles.filter(electricJonas);
  showTheseVehicles(onlyElectricJonas);
}

function twoSeatedRugbrød(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  } else {
    return false;
  }
}
function showTwoRugbrød() {
  ulPointer.innerHTML = newInner;
  const minTwoSeatedRugbrød = vehicles.filter(twoSeatedRugbrød);
  showTheseVehicles(minTwoSeatedRugbrød);
}
