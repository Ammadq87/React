
export class Message {
    messageId: number;
    submitterId: number;
    dateTime: string; 
    content: string;
    channelId: number;
    reactions: Reaction[];
    constructor (submitterId: number, content: string, channelId: number) {
        [this.submitterId, this.content, this.channelId, this.dateTime, this.messageId] = [submitterId,content,channelId, this.getDateTime(), this.generateMessageId()];
    }

    /**
     * Generates date and time messsage was created 
     * @returns string formatted date and time
     */
    getDateTime () : string {
        return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} at ${new Date().toLocaleTimeString()}`;
    }

    /**
     * Adds reaction to a message. Removes reaction if user already reacted
     * @param userIdWhoReacted 
     * @param reaction 
     * @returns true if a new reaction is to be added. False if removed 
     */
    addReaction (userIdWhoReacted: number, reaction: Reaction) : boolean {
        const didUserAlreadyReact = this.reactions.find((r) => {
            r.reactor === userIdWhoReacted;
        })

        if (!didUserAlreadyReact) {
            this.reactions.push(reaction);
        } else {
            const newReactions = this.reactions.filter((r) => {
                return r.reactor != userIdWhoReacted;
            })
            this.reactions = newReactions;
        }
        return didUserAlreadyReact ? false : true;
    }

    /**
     * Creates a random message id
     * @returns message id
     */
    generateMessageId () : number {
        return parseInt(`${Math.random()}`.substring(2,11));
    }
}

class Reaction {
    reactionStrings: string[] = ['ThumbsUp', 'Heart', 'FaceLaughSquint', 'FaceSurprise', 'FaceFrown', 'FaceAngry']
    reactionId: number; // index of reactionStrings starting from 0
    reationString: string; // the reaction string
    messageId: number
    channelId: number;
    reactor: number;
    constructor (reactionId: number, messageId: number, channelId: number, reactor: number) {
        [this.reactionId, this.messageId, this.channelId, this.reactor] = [reactionId, messageId,channelId,reactor];
        this.reationString = this.reactionStrings[reactionId];
    }   
}