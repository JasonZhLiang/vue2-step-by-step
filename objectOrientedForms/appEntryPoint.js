
import Vue from 'vue';//since we have installed vue through npm install vue --save-dev, so we import vue here, and we don't need cnd at page index.php <script src="https://unpkg.com/vue@2.1.3/dist/vue.js"></script>

import axios from 'axios'; // same as above

import Form from './core/Form';

import Example from './components/Example';

window.axios = axios;// this two lines assign axios and Form to globe window, so other page will not need always import the axios and Form over and over, just use new Form, new axios
window.Form = Form;

new Vue({
    el:'#app',
    components:{
        Example //we registered a child component
    },
    data:{
        // name:'',
        // description:'',
        form: new Form({
            name:'',
            description:''
        }),
        // errors: new Errors(),
        names:[]
    },
    methods:{
        onSubmit(){
            this.form.submit('post','ajax_server.php')
                .then(data=>alert('Handling it!'+ data.name))// then is triggered by the return Promise resolve(response.data);
                .catch(data=>alert('return errors: submit is  '+ data.description +' get data from Vue instance data names -- '+ this.names));

            // axios.post('ajax_server.php',{
            //     name: this.form.name,
            //     description:this.form.description
            //      })
            //     // .then(response => {console.log(response.data); alert(response.data.name); this.name = ''; this.description = '';})// see alternative way below call onSuccess function
            //     .then(this.onSuccess)
            //     .catch( error =>{
            //         console.log(error.response);
            //         alert(error.response.data.description);
            //         // this.errors.record(error.response.data);
            //         this.form.errors.record(error.response.data);
            //     })
        },
        addName(){
            if(this.form.name != ''){
                this.names.push(this.form.name);
            }
        },
        // onSuccess(response){
        //     console.log(response.data);
        //     alert(response.data.name);
        //     this.form.reset(); //using form reset instead of reset every form field one by one
        // }
    }
});