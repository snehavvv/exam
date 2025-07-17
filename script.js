// Fetch API + Search & Filter
let items = [];

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    items = data;
    displayItems(items);
  });

function displayItems(list) {
  const ul = document.getElementById("itemList");
  ul.innerHTML = "";
  list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.className = "p-2 bg-white border rounded shadow";
    ul.appendChild(li);
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(keyword)
  );
  displayItems(filtered);
});

// Geo Location
function getLocation() {
  const output = document.getElementById("locationOutput");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      output.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;
    }, () => {
      output.textContent = "Location access denied.";
    });
  } else {
    output.textContent = "Geolocation not supported.";
  }
}

// DOM Manipulation + Local Storage
function changeStyle() {
  const text = document.getElementById("demoText");
  text.classList.toggle("text-red-600");
  text.classList.toggle("font-bold");

  localStorage.setItem("styleChanged", "true");
}

