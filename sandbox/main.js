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

Vue.createApp(dating).mount('#setuped');