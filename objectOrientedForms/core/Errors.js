class Errors {

    constructor(){
        this.errors = {};
    }

    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }
    }

    record(input){
        this.errors = input;
    }

    clear(field){
        if(field){
            delete this.errors[field];
        }else{
            this.errors ={};
        }
    }

    has(field){
        return this.errors.hasOwnProperty(field);
    }

    any(){
        this.clear('status');//since we have status element among our response data, we need delete this key
        return Object.keys(this.errors).length > 0;
    }
}

export default Errors;