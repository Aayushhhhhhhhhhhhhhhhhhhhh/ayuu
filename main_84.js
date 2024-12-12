let pizza_list_array = [];

function getmenu() {    
    // Get the value from the input field with id="pizza_name"
    var item = document.getElementById("pizza_name").value; 
    
    // Push the new item into the pizza_list_array
    if (item) {
        pizza_list_array.push(item);
    }
    
    // Join the array items with a line break and format with "#" symbol
    var remove_commas = pizza_list_array.join("<br># ");
    document.getElementById("display_menu").innerHTML = "# " + remove_commas;
}
