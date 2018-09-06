(function() {
	function Phone(brand, model, color, price) {
		this.brand = brand;
		this.model = model;
		this.color = color;
		this.price = price;
	}
	Phone.prototype.printInfo = function(){
		console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', model is ' + this.model + ', price is ' + this.price + '.'); 
	}
	var iPhone6S = new Phone("Apple", "6S", "silver", 2250);
	var galaxyS8 = new Phone("Samsung", "Galaxy S8", "black", 2750);
	var onePlusOne = new Phone("OnePlus", "One", "gold", 1950);

	iPhone6S.printInfo();
	galaxyS8.printInfo();
	onePlusOne.printInfo();
});();