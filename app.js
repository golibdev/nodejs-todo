let year = 1984

let colorYear = year % 5 
let message = ""
if(colorYear >=0 && colorYear <=12)
    message="Yashil"
else if (colorYear >=13 && colorYear <=24)
    message = "Qizil"
else if (colorYear >=25 && colorYear <=36)
    message = "Sariq"
else if (colorYear >=37 && colorYear <=48)
    message = "Oq"
else {
    message = "Qora"
}

console.log(message)

switch(year % 12) {
    case 1: 
        
}