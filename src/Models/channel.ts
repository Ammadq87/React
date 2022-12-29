import {UserModel} from './userModel';
export class Channel {
    id: number;
    name: string;
    admin: UserModel;
    members!: UserModel[];

    constructor(id: number, name: string, admin: UserModel){
        [this.id, this.name, this.admin] = [this.generateChannelId(), name,admin]
        this.members = [this.admin];
    }

    generateChannelId():number{
        return parseInt(`${Math.random()}`.substring(2,6));
    }

    addMemberToChannel(newMember: UserModel) {
        const newMemberExists = this.members.find((member) => member.id === newMember.id);
        if (!newMemberExists)
            this.members.push(newMember);
    }
} 