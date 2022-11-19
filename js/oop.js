var purchase1 = {
    shoesCost: 100,
    stateTax: 1.2,
    totalcost: function(){
        var calculation = this.shoesCost*this.stateTax;
        console.log("Total cost: ",calculation);
    }
}

purchase1.totalcost();

var purchase2 = {
    shoesCost: 50,
    stateTax: 1.2,
    totalcost: function(){
        var calculation = this.shoesCost*this.stateTax;
        console.log("Total cost: ",calculation);
    }
}

purchase2.totalcost();