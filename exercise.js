var store4 = require('./store4-data.js');

// Remember what goes here?

function getStoreItems() {
    return Object.keys(store4);
}

function getStoreItem( item ) {
    return store4[item];
}

function getItemCost( item ) {
    return getStoreItem(item)['cost'];
}

function getItemSales( item ) {
    return getStoreItem(item)['sold on'];
}

function getItemSalesCount( item ) {
    return getItemSales(item).length;
}

function filterItemsByCost( cost ) {
    var items = getStoreItems();
    var filter = [];

    for(var x = 0; x < items.length; x++) {
        if( getItemCost(items[x]) > cost ) {
            filter.push( items[x] );
        }
    }

    return filter;
}

function getItemNamesAndCost( ) {
    var storeItems = getStoreItems();
    var items = {};

    for(var x = 0; x < storeItems.length; x++) {
        var itemName = storeItems[x];
        items[itemName] = getItemCost(itemName);
    }

    return items;
}

function getItemSaleDatesCount( item ) {
    var dates = getitemSales(item);
    dates.sort();

    var result = dates.reduce ( function ( previous, current ) {
            
        if ( current in previous ) {
            previous[current]++;
        } else {
            previous[current] = 1;
        }
        
        return previous;

    });
    
    return result;
}

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// What is the cost of 'Dark Chocolate Crunchies' from store4?
console.log( getItemCost('Dark Chocolate Crunchies') )

// Set the total number of 'Berry Bites' sold by store4 to a variable.

var totalBerryBites = getItemSalesCount('Berry Bites');

console.log(totalBerryBites);
// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candies that cost more than $2.00

console.log( filterItemsByCost(2));


// Create a loop to return an object that has the candy name as the key and the cost as the value

console.log( getItemNamesAndCost() );

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)



// Determine how much money did store3 make on January 9th.


// Calculate how much store4 made from selling Dark Chocolate Crunchies across all the days.
