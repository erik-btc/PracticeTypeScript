import {UserManager} from "./UserManager";

const userManager = new UserManager();

let id1: string = userManager.createUserId();
let id2: string = userManager.createUserId();
userManager.addUser({
    id: id1,
    email: 'erik.peters@btc-ag.com',
    name: 'erik',
    role: 'admin',
    permissions: ['']
})
userManager.addUser({
    id: id2,
    email: 'jannis.carstens@btc-ag.com',
    name: 'jannis',
    role: 'customer',
    purchaseHistory: ['']
})

userManager.listUsers()
console.log(userManager.getAdmins())
console.log(userManager.getCustomers())