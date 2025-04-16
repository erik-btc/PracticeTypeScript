import {v4 as uuidv4} from 'uuid';

interface CommonUser{
    id: string,
    name: string,
    email: string,
}

type AdminUser = CommonUser&{
    permissions: string[],
    role: 'admin'
}

type CustomerUser = CommonUser&{
    purchaseHistory: string[],
    role: 'customer'
}

type User = AdminUser | CustomerUser;

function isUserRole<T extends User>(user: User, role: T['role']): user is T{
    return user.role === role;
}

export class UserManager{
    private readonly users: User[] = [];

    public addUser(user: User): void{
        this.users.push(user);
    }

    public listUsers(): void{
        console.log(this.users)
    }

    public getAdmins(): AdminUser[] {
        return this.getUsersByRole('admin');
    }

    public getCustomers(): CustomerUser[]{
        return this.getUsersByRole('customer');
    }

    public getUsersByRole<T extends User>(role: T["role"]): T[]{
        const filteredUsers: T[] = [];
        for(let i = 0; i < this.users.length; i++){
            const user: User = this.users[i];
            if(isUserRole(user, role)){
                filteredUsers.push(user);
            }
        }
        return filteredUsers;
    }

    public createUserId(): string{
        return uuidv4();
    }

    public validateEmail(email: string): boolean{
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

}