// shared state 101
let store = {
    user: {
        name: 'Jone Doe'
    }
};

new Vue({
    el:'#one',
    // data:{
    //     user:{
    //         name:'Jone Doe'
    //     }
    // }
    data:{
        foo:'bar',
        shared:store
    }
});

new Vue({
    el:'#two',
    // data:{
    //     user:{
    //         name:'Jone Doe'
    //     }
    // }
    data:{
        foo:'another bar',
        shared:store
    }
});

Vue.component('coupon',{
    props:['code'],
    template:`
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,
    data(){
        return{
            invalids:['ALLFREE','SOMETHINGELSE']
        }
    },
    methods:{
        updateCode(code){
            //validation
            // if(code==='ALLFREE'){
            if(this.invalids.includes(code)){
                alert('This coupon is no longer valid.');
                this.$refs.input.value= code ='';
                // return;
            }
            this.$emit('input',code);
        }
    }
})

new Vue({
    el:'#app',
    // data:{
    //     user:{
    //         name:'Jone Doe'
    //     }
    // }
    data:{
        coupon: 'FREEBIE'
    }
});