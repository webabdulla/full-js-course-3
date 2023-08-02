//sessionStrage

// sessionStorage.setItem("userName","miraj");

// const userName = sessionStorage.getItem("userName");
// console.log(userName);

//sessionStorage.removeItem("userName");


const user = {id : "101", name : "abdullah"  };
sessionStorage.setItem("user", JSON.stringify(user));


const userInfo= JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);   