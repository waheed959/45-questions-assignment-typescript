function sandwich(items) {
    console.log("these items are required to make sandwiches: ".concat(items.toString()));
}
var items = ["item1", "items2", "item3", "item4"];
sandwich(items);
sandwich(["bread", "butter", "cheese"]);
sandwich(["vegetables", "meat", "chicken"]);
