export class UserModel  {

    constructor(name, color) {
        this.name = name;
        this.color = color
        this.userId = generateRandomID();
    }
}

function generateRandomID () {
    return parseInt(`${Math.random()}`.substring(2,11));
}
