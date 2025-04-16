import {UserManager} from "./UserManager";

const userManager = new UserManager();

let id: string = userManager.createUserId();
let email: string = 'erik.peters@btc-ag.com';
let validateEmail: boolean = userManager.validateEmail(email);
if(validateEmail){
    userManager.addUser({
        id: id,
        email: email,
        name: 'erik',
        role: 'admin',
        permissions: ['']
    });
}
else{
    console.log('invalid email')
}


id = userManager.createUserId();
email = 'jannis.castens@btc-ag.com';
validateEmail = userManager.validateEmail(email);
if(validateEmail){
    userManager.addUser({
        id: id,
        email: email,
        name: 'jannis',
        role: 'customer',
        purchaseHistory: ['']
    });
}
else{
    console.log('invalid email')
}

id = userManager.createUserId();
email = 'arne.stulken@btc-ag.com';
validateEmail = userManager.validateEmail(email);
if(validateEmail){
    userManager.addUser({
        id: id,
        email: email,
        name: 'arne',
        role: 'admin',
        permissions: ['']
    });
}
else{
    console.log('invalid email');
}


id = userManager.createUserId();
email = 'julia.nolbergs@btc-ag.com';
validateEmail = userManager.validateEmail(email);
if(validateEmail){
    userManager.addUser({
        id: id,
        email: email,
        name: 'julia',
        role: 'customer',
        purchaseHistory: ['']
    });
}
else{
    console.log('invalid email');
}

userManager.listUsers()
console.log(userManager.getAdmins())
console.log(userManager.getCustomers())
userManager.safeUsersInJson(userManager.returnAllUsers())
