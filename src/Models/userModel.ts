export class UserModel {
    name: string;
    id: number;
    color: string;
    constructor(name: string, color: string){
        [this.color, this.id, this.name] = [color, this.generateUserId(), name]; 
    }

    generateUserId():number{
        return parseInt(`${Math.random()}`.substring(2,11));
    }
}