"strict mode"
const dating = {
    data(){
        return {
            theDate: new Date 
        }
    },
    mounted() {
        setInterval(() => {
        this.theDate = new Date
        }, 1000)
    }
};
const handleTheEvent = {
    data(){
        return {
            message : 'bruhendo'
        }
    },
    methods : {
        reverseMessage(){
            this.message = this.message.split('').reverse().join('');
        }
    }
}

const userInput = {
    data(){
        return {
            messages: ['bruhendo']
        }
    },
    methods : {
        palindrome(){
            const theWord = this.messages[0].toLowerCase().split('').filter( item =>
                item !== " "    
            ).join('');
            const theReversedWord = theWord.split('').reverse().join('');
            if(theWord === theReversedWord){
                this.messages.push("true")
            }else{
                this.messages.push("false")
            }
        }
    }
}

Vue.createApp(userInput).mount('#twoWayDataBinding')
Vue.createApp(handleTheEvent).mount('#event-handling');
Vue.createApp(dating).mount('#setuped');
