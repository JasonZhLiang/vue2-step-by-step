import Errors from './Errors';

class Form{
    constructor(data){
        this.originalData = data;//here, data is an object not json format
        for(let field in data){
            this[field] = data[field];//this is very tricky part, you want to set every key pointer a value according the data object key, you cannot use this.field = data.field, this will create a new property with data.field undefined
        }

        //actually, the above for loop is dynamic way to assign the value to Form's property. instead using hardcode below
        //be noted, whenever you use a variable inside an of object, must use object[variable] to replace object.variable, same as example of axios[requestType] to replace axios.post

        // this.name = data.name;
        // this.description = data.description;

        this.errors = new Errors()
    }

    data(){
        // let data = Object.assign({},this); //this will clone the all of the property of form class  to data object, includes (originalData, name, description, errors)
        // delete data.originalData;
        // delete data.errors;
        // return data;


        //an alternative way of above

        let data ={};
        for (let property in this.originalData){
            data[property] = this[property]
        }
        return data;
    }

    reset(){
        for (let field in this.originalData){
            this[field] ='';
        }

        this.errors.clear();
    }
    submit(requestType,url){ //when form.submit('post','ajax_server.php') call we will return a new promise
        return new Promise((resolve, reject)=>{// build a new Promise for vue instance
            axios[requestType](url,this.data())
                .then(response => {
                    this.onSuccess(response.data);
                    resolve(response.data);//this is the return for the then clause, will trigger then event from the Vue onSubmit call.
                })
                .catch(error =>{
                    this.onFail(error.response.data);
                    reject(error.response.data); ////this is the return for the catch clause, will trigger catch event from Vue onSubmit call.
                })
        })
        // axios[requestType](url,this.data())//be noted here, we use axios[] syntax instead of using axios. to inject the parameter requestType
        //     .then(this.onSuccess.bind(this))// when onSuccess get called the this context will rebounded, so we need make sure this is still refer to the Form, by adding bind(this)
        //     .catch(this.onFail.bind(this))//bind this is extremly important for the methods you call
    }

    // onSuccess(response){
    //     console.log(response.data);
    //     alert(response.data.name);
    //     this.reset();
    //     this.errors.clear();
    // }

    onSuccess(data){
        console.log(data);
        alert(data.name);
        this.reset();
    }

    // onFail(error){
    //     console.log(error.response);
    //     alert(error.response.data.description);
    //     this.errors.record(error.response.data);
    // }

    onFail(data){
        console.log(data);
        alert(data.message);
        this.errors.record(data);
    }
}

export default Form;