console.log();
console.log();

let getUserRole = function (name, roll) {
    switch (roll) {
        case "admin":
            return (`${name} gets full access`);
            // break; // not necessary coz of return statement

        case "subadmin":
            return (`${name} gets access to modify courses`);
            // break; // not necessary coz of return statement

        case "test":
            return (`${name} gets access to modify test series`);
            // break; // not necessary coz of return statement

        case "user":
            return (`${name} gets access to comment and consume`);
            // break; // not necessary coz of return statement

        default:
            return ("Trial user");
    }
}


console.log(getUserRole("Sailendra", "admin"));
console.log(getUserRole("Ranjan", "test"));
console.log(getUserRole("Calvin", "subadmin"));
console.log(getUserRole("Calvin", ""));




console.log();
console.log();