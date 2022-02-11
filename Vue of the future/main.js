"strict mode"

//  set the date
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





// handle events plus some logic
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




//  two way data binding plus some logic
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


// whatever this is (components, but i am very confused)
const apples = {
    props: ['todo'],
    template: `<li>{{todo.text}}</li>`
};
const oranges = {
    data(){
        return {
            groceryList : [
                { id:0, text: "veggies"},
                { id:1, text: "meaties"},
                { id:2, text: "humies"}
            ]
        }
    },
    components :{
        apples
    }
}





// a try to understand components
const aplesBruh = {
    template: `<li>This is a todo</li>`
}

// Create Vue application
const app = Vue.createApp({
    components: {
        aplesBruh // Register a new component
    }
})

// Mount Vue application
app.mount('#attempt');



Vue.createApp(oranges).mount("#debate");
Vue.createApp(userInput).mount('#twoWayDataBinding')
Vue.createApp(handleTheEvent).mount('#event-handling');
Vue.createApp(dating).mount('#setuped');
