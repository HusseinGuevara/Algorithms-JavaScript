const str1 = "2021-03-19"
const expect1 = "March 19, 2021"
const str2 = "1990-12-10"
const str3 = "1990-12-04"

function contverter(str) {
    var year = "";
    var day = "";
    var month = "";

    var object = {
        "01": "January",
        "02": "Februery",
        "03": "March",
        "04": "April",
        "05": "May",
        "06":"June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "Novemebr",
        "12": "December"
    }
    
    for(var i = 0; i <= str.length - 7; i++) {
        year += str[i];
    } 
    // console.log("Done")
    for(var j = 5; j <= str.length - 4; j++) {
        month += str[j];
    }
    // console.log(month)
    for(var k = 8; k <= str.length - 1; k++) {
        day += str[k];
    }
    // console.log(day)
    if(object.hasOwnProperty(month)) {
        // console.log(object[month])
    }
    return object[month] + " " + day + ", " + year;
}
console.log(contverter(str1));
console.log(contverter(str2));
console.log(contverter(str3));