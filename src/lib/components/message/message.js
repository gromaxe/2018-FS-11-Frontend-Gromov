class MyMessage extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        if (!this.hasAttribute('messageId')) {
            this.setAttribute('messageId', null);
        }
        if (!this.hasAttribute('chatId')) {
            this.setAttribute('chatId', null);
        }
        if (!this.hasAttribute('userId')) {
            this.setAttribute('userId', null);
        }
        if (!this.hasAttribute('addedAt')) {
            this.setAttribute('addedAt', Date.now());
        }
    }
    get messageId(){
        return this.getAttribute('addedAt');
    }
    set messageId(messageId){
        this.setAttribute('messageId',messageId)
    }

    get chatId(){
        return this.getAttribute('addedAt');
    }
    set chatId(chatId){
        this.setAttribute('chatId',chatId)
    }

    get userId(){
        return this.getAttribute('addedAt');
    }
    set userId(userId){
        this.setAttribute('userId',userId)
    }

    get addedAt(){
        return this.getAttribute('addedAt');
    }
    set addedAt(addedAt){
        this.setAttribute('addedAt',addedAt)
    }
}


export {MyMessage};