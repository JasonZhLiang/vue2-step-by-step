webpackJsonp([0],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    template: '<h1>Example of Child Component</h1>'
};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(30);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data; //here, data is an object not json format
        for (var field in data) {
            this[field] = data[field]; //this is very tricky part, you want to set every key pointer a value according the data object key, you cannot use this.field = data.field, this will create a new property with data.field undefined
        }

        //actually, the above for loop is dynamic way to assign the value to Form's property. instead using hardcode below
        //be noted, whenever you use a variable inside an of object, must use object[variable] to replace object.variable, same as example of axios[requestType] to replace axios.post

        // this.name = data.name;
        // this.description = data.description;

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
    }

    _createClass(Form, [{
        key: 'data',
        value: function data() {
            // let data = Object.assign({},this); //this will clone the all of the property of form class  to data object, includes (originalData, name, description, errors)
            // delete data.originalData;
            // delete data.errors;
            // return data;


            //an alternative way of above

            var data = {};
            for (var property in this.originalData) {
                data[property] = this[property];
            }
            return data;
        }
    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }
    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            //when form.submit('post','ajax_server.php') call we will return a new promise
            return new Promise(function (resolve, reject) {
                // build a new Promise for vue instance
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);
                    resolve(response.data); //this is the return for the then clause, will trigger then event from the Vue onSubmit call.
                }).catch(function (error) {
                    _this.onFail(error.response.data);
                    reject(error.response.data); ////this is the return for the catch clause, will trigger catch event from Vue onSubmit call.
                });
            });
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

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            console.log(data);
            alert(data.name);
            this.reset();
        }

        // onFail(error){
        //     console.log(error.response);
        //     alert(error.response.data.description);
        //     this.errors.record(error.response.data);
        // }

    }, {
        key: 'onFail',
        value: function onFail(data) {
            console.log(data);
            alert(data.message);
            this.errors.record(data);
        }
    }]);

    return Form;
}();

/* harmony default export */ exports["a"] = Form;

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'get',
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }
    }, {
        key: 'record',
        value: function record(input) {
            this.errors = input;
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (field) {
                delete this.errors[field];
            } else {
                this.errors = {};
            }
        }
    }, {
        key: 'has',
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }
    }, {
        key: 'any',
        value: function any() {
            this.clear('status'); //since we have status element among our response data, we need delete this key
            return Object.keys(this.errors).length > 0;
        }
    }]);

    return Errors;
}();

/* harmony default export */ exports["a"] = Errors;

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Example__ = __webpack_require__(11);

 //since we have installed vue through npm install vue --save-dev, so we import vue here, and we don't need cnd at page index.php <script src="https://unpkg.com/vue@2.1.3/dist/vue.js"></script>

 // same as above





window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a; // this two lines assign axios and Form to globe window, so other page will not need always import the axios and Form over and over, just use new Form, new axios
window.Form = __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */];

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    components: {
        Example: __WEBPACK_IMPORTED_MODULE_3__components_Example__["a" /* default */] //we registered a child component
    },
    data: {
        // name:'',
        // description:'',
        form: new __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */]({
            name: '',
            description: ''
        }),
        // errors: new Errors(),
        names: []
    },
    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            this.form.submit('post', 'ajax_server.php').then(function (data) {
                return alert('Handling it!' + data.name);
            }) // then is triggered by the return Promise resolve(response.data);
            .catch(function (data) {
                return alert('return errors: submit is  ' + data.description + ' get data from Vue instance data names -- ' + _this.names);
            });

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
        addName: function addName() {
            if (this.form.name != '') {
                this.names.push(this.form.name);
            }
        }
    }
});

/***/ }

},[34]);