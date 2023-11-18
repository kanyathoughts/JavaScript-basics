//Mon - 7am
//Tue - Thurs - 4am
//Fri - 9am
//Sat - Sun - 8am

let day = "Monday"
switch (day) {
    case "Monday":
        console.log("7am")
        break;
    case "Tuesday":
        console.log("4am")
        break;
    case "Wednesday":
        console.log("4am")
        break;
    case "Thrusday":
        console.log("4am")
        break;
    case "Friday":
        console.log("9am")
        break;
    case "Saturday":
        console.log("8am")
        break;
    case "Sunday":
        console.log("8am")
        break;
    default:
        console.log("invalid input")
        break;
}