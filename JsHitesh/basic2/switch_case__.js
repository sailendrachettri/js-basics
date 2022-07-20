let who = "test";

console.log();
console.log();

switch(who){
    case "admin":
        console.log("gets full access");
        break;
    
    case "subadmin":
        console.log("gets access to modify courses");
        break;
    
    case "test":
        console.log("gets access to modify test series");
        break;

    case "user":
        console.log("gets access to comment and consume");
        break;
    
    default:
        console.log("Others");
}

console.log();
console.log();