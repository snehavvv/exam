fetch("https://api.example.com/items")
  .then((res) => res.json())
  .then((data) => {
    items = data;
    displayItems(items);
  })
  .catch((err) => console.error("Error fetching data:", err));