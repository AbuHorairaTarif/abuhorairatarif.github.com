const input = document.getElementById('location');
const suggestionsContainer = document.getElementById('suggestions');
let locations = []; // This will hold the location data from the JSON file

// Fetch the JSON data and store it in the 'locations' array
fetch('location.json')
  .then(response => response.json())
  .then(data => {
    locations = data;
  })
  .catch(error => console.error('Error reading JSON file:', error));

// Function to filter and display suggestions based on user input
function showSuggestions(inputValue) {
  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  suggestionsContainer.innerHTML = '';

  filteredLocations.forEach(location => {
    const suggestion = document.createElement('div');
    suggestion.textContent = location.name;
    suggestion.classList.add('suggestion');
    suggestionsContainer.appendChild(suggestion);
  });
}

input.addEventListener('input', event => {
  const inputValue = event.target.value;
  suggestionsContainer.innerHTML = '';

  if (inputValue.length >= 3) {
    showSuggestions(inputValue);
  }
});

suggestionsContainer.addEventListener('click', event => {
  const selectedLocation = event.target.textContent;
  input.value = selectedLocation;
  suggestionsContainer.innerHTML = '';
});



// Change input text to date format onclick event

// const inputField = document.getElementById('inputField');

// inputField.addEventListener('focus', () => {
//   inputField.type = 'date';
// });


const inputField = document.getElementById('inputField');
const inputFieldCheckout = document.getElementById('inputFieldCheckout');
const resultDiv = document.getElementById('result');
const resultDivCheckout = document.getElementById('resultCheckout');
let selectedCheckIn = '';
let selectedCheckOut = '';

inputField.addEventListener('focus', () => {
  inputField.type = 'date';
});

inputField.addEventListener('blur', () => {
  selectedCheckIn = inputField.value;
  inputField.type = 'text';
  displayResult();
});

inputFieldCheckout.addEventListener('focus', () => {
  inputFieldCheckout.type = 'date';
});

inputFieldCheckout.addEventListener('blur', () => {
  selectedCheckOut = inputFieldCheckout.value;
  inputFieldCheckout.type = 'text';
  displayResult();
});

function displayResult() {
  resultDiv.textContent = `Check In:\n${selectedCheckIn ? ' ' + selectedCheckIn : ''}\nCheck Out:\n${selectedCheckOut ? ' ' + selectedCheckOut : ''}`;
  
}




// const inputField = document.getElementById('inputField');
// const resultDiv = document.getElementById('result');
// let enteredValue = ''; // To store the entered value

// inputField.addEventListener('focus', () => {
//   inputField.type = 'date';
// });

// inputField.addEventListener('blur', () => {
//   enteredValue = inputField.value;
//   inputField.type = 'text';
//   displayResult();
// });

// function displayResult() {
//   resultDiv.textContent = `Check In: ${enteredValue}`;
// }

// const inputFieldCheckout = document.getElementById('inputFieldCheckout');
// const resultDivCheckout = document.getElementById('resultCheckout');
// enteredValue = ''; // To store the entered value

// inputField.addEventListener('focus', () => {
//   inputField.type = 'date';
// });

// inputField.addEventListener('blur', () => {
//   enteredValue = inputField.value;
//   inputField.type = 'text';
//   displayResult();
// });

// function displayResult() {
//   resultDivCheckout.textContent = `Check Out: ${enteredValue}`;
// }









// var slider = document.getElementById("priceRange");
// var output = document.getElementById("valuePriceRange");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }


// Slider Functionality

var slider = document.getElementById("guestRange");
var output = document.getElementById("valueGuestRange");
output.innerHTML = slider.value;

var sliderPrice = document.getElementById("priceRange");
var outputPrice = document.getElementById("valuePriceRange");
outputPrice.innerHTML = sliderPrice.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

sliderPrice.oninput = function() {
    outputPrice.innerHTML = this.value;
}

  const guestInput = document.getElementById('guestInput');
  const guestToast = document.getElementById('guestToast');
  const guestRange = document.getElementById('guestRange');
  const valueGuestRange = document.getElementById('valueGuestRange');
  const decrementGuestBtn = document.getElementById('decrementGuest');
  const incrementGuestBtn = document.getElementById('incrementGuest');
  const guestSubmit = document.getElementById('guestSubmit');

  guestInput.addEventListener('click', () => {
    guestToast.style.display = 'block';
  });

  guestRange.addEventListener('input', () => {
    updateGuestValue();
  });

  decrementGuestBtn.addEventListener('click', () => {
    if (guestRange.value > guestRange.min) {
      guestRange.value = parseInt(guestRange.value) - 1;
      updateGuestValue();
    }
  });

  incrementGuestBtn.addEventListener('click', () => {
    if (guestRange.value < guestRange.max) {
      guestRange.value = parseInt(guestRange.value) + 1;
      updateGuestValue();
    }
  });

  guestSubmit.addEventListener('click', () => {
    const selectedGuests = guestRange.value;
    guestInput.value = `${selectedGuests}`;
    guestToast.style.display = 'none';
  });

  function updateGuestValue() {
    valueGuestRange.textContent = guestRange.value;
  }




// const priceInput = document.getElementById('priceInput');
// const priceToast = document.getElementById('priceToast');
// const priceRange = document.getElementById('priceRange');
// const valuePriceRange = document.getElementById('valuePriceRange');
// const decrementPriceBtn = document.getElementById('decrementPrice');
// const incrementPriceBtn = document.getElementById('incrementPrice');
// const priceSubmit = document.getElementById('priceSubmit');

// priceInput.addEventListener('click', () => {
//   priceToast.style.display = 'block';
// });

// priceRange.addEventListener('input', () => {
//   updatePriceValue();
// });

// decrementPriceBtn.addEventListener('click', () => {
//   if (priceRange.value > priceRange.min) {
//     priceRange.value = parseInt(priceRange.value) - 1;
//     updatePriceValue();
//   }
// });

// incrementPriceBtn.addEventListener('click', () => {
//   if (priceRange.value < priceRange.max) {
//     priceRange.value = parseInt(priceRange.value) + 1;
//     updatePriceValue();
//   }
// });

// priceSubmit.addEventListener('click', () => {
//   const selectedPrice = priceRange.value;
//   priceInput.value = `$${selectedPrice}`;
//   priceToast.style.display = 'none';
// });

// function updatePriceValue() {
//   valuePriceRange.textContent = priceRange.value;
// }



const priceInput = document.getElementById('priceInput');
const priceToast = document.getElementById('priceToast');
const priceRange = document.getElementById('priceRange');
const valuePriceRange = document.getElementById('valuePriceRange');
const priceSubmit = document.getElementById('priceSubmit');

let selectedPriceRange = [1, 1000]; // Initialize with default values

priceSubmit.addEventListener('click', () => {
  selectedPriceRange = priceRange.noUiSlider.get(); // Get the selected price range from the noUiSlider
  const minValue = selectedPriceRange[0];
  const maxValue = selectedPriceRange[1];
  priceInput.value = `${minValue} - ${maxValue}`; // Update the price input field
  valuePriceRange.textContent = `${minValue} - ${maxValue}`; // Update the valuePriceRange span
  priceToast.style.display = 'none';
});

// Function to initialize the price range slider
// Function to initialize the price range slider
function initializePriceRangeSlider() {
  noUiSlider.create(priceRange, {
    start: [1, 1000],
    connect: true,
    range: {
      'min': 1,
      'max': 1000
    },
    // Display integer values in the slider handles and tooltips
    format: {
      to: value => Math.round(value), // Convert to integer
      from: value => value
    },
    tooltips: [true, true] // Display tooltips for both handles
  });

  priceRange.noUiSlider.on('update', (values, handle) => {
    valuePriceRange.textContent = `${Math.round(values[0])} - ${Math.round(values[1])}`;
  });
}



priceInput.addEventListener('click', () => {
  priceToast.style.display = 'block';
  priceRange.style.display = 'block'; // Show the price range slider
  initializePriceRangeSlider(); // Initialize the price range slider
  // Show the tooltips
  const tooltips = document.getElementsByClassName('noUi-tooltip');
  for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].style.display = 'block';
  }
});





// Show Result when clicked in Search Button into div
function updateResultDiv() {
  const locationResult = document.getElementById('locationResult');
  const checkInResult = document.getElementById('checkInResult');
  const checkOutResult = document.getElementById('checkOutResult');
  const guestNumberResult = document.getElementById('guestNumberResult');
  const priceRangeResult = document.getElementById('priceRangeResult');

  locationResult.textContent = `Location: ${input.value}`;
  checkInResult.textContent = `Check-In: ${selectedCheckIn}`;
  checkOutResult.textContent = `Check-Out: ${selectedCheckOut}`;
  guestNumberResult.textContent = `Guests: ${guestRange.value}`;
  priceRangeResult.textContent = `Price Range: ${priceInput.value}`;
}


// Get the "Search" button element
const searchButton = document.getElementById('search');

// Add event listener to the "Search" button
searchButton.addEventListener('click', () => {
  updateResultDiv();
  searchHotels();
});



// Add event listeners to the elements that affect search criteria
input.addEventListener('input', () => {
  // ... (your existing input event listener code) ...
  updateSearchCriteria();
});

inputField.addEventListener('blur', () => {
  // ... (your existing blur event listener code) ...
  updateSearchCriteria();
});

inputFieldCheckout.addEventListener('blur', () => {
  // ... (your existing blur event listener code) ...
  updateSearchCriteria();
});






// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Get the button and map container elements
  var searchButton = document.getElementById('mapButton');
  var mapContainer = document.getElementById('map');
  
  // Create a map instance and set the initial view
  var map = L.map('map').setView([51.505, -0.09], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Event listener for the button click
  searchButton.addEventListener('click', function () {
      // Toggle the display of the map container
      if (mapContainer.style.display === 'none') {
          mapContainer.style.display = 'block';
          // If the map is not already initialized, set the map view
          if (!map.hasLayer(L.tileLayer)) {
              map.setView([51.505, -0.09], 13);
          }
      } else {
          mapContainer.style.display = 'none';
      }
  });
});

let map;
let hotelsData; // To store the loaded JSON data

function initMap() {
    map = L.map('map').setView([34.0522, -118.2437], 5); // Set initial map view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
}

async function loadHotelsData() {
    try {
        const response = await fetch('hotelPrice.json'); // Adjust the path as needed
        if (!response.ok) {
            throw new Error('Failed to load hotel data.');
        }
        hotelsData = await response.json();
    } catch (error) {
        console.error('Error loading hotel data:', error);
    }
}

function searchHotels() {
    const priceRange = parseInt(document.getElementById('priceRange').value);

    // Clear existing markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Add markers for matching hotels
    hotelsData.forEach(hotel => {
        if (hotel.price <= priceRange) {
            L.marker([hotel.latitude, hotel.longitude])
                .bindPopup(`${hotel.name}<br>Price: $${hotel.price}`)
                .addTo(map);
        }
    });
}

document.addEventListener('DOMContentLoaded', async function () {
    initMap();
    await loadHotelsData();
});
