Vue.component('progress-view',{
    data(){
        return {completionRate: 50};
    }
});


Vue.component('modalcard',{
    template:`
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">
                <slot name="header"></slot>
              </p>
              <button class="delete" aria-label="close" @click="$emit('close')"></button>
            </header>
            <section class="modal-card-body">
               <slot>Default content here</slot>
            </section>
            <footer class="modal-card-foot">
              <slot name="footer">
                <button class="button is-success">Okay</button>
               </slot>
            </footer>
          </div>
        </div>    
    `
});



window.Event = new Vue();//this is a shared event instance, bind Event to globe window. not limited between parent and children, also applied among the children, means assign the vue to this globe window.Event;


window.Event1 = new class{
    constructor(){
        this.vue = new Vue();
    }

    fire(event, data = null){
        this.Vue.$emit(event, data);
    }

    listen(event,callback){
        this.Vue.$on(event, callback);
    }
};//This is class model api you can use this syntax which wrapped Vue inside, then can call Event1.fire('applied') instead call Event.$emit('applied')

Vue.component('coupon',{
    template:`
        <input placeholder="Enter your coupon code" @blur="onCouponApplied" v-model="coupon">
    `,
    methods:{
        onCouponApplied(){
            // if(this.coupon=='aaa'){
            //     this.$emit('applied');// this will emit the applied to the parent of current component
            // }else{
            //     this.$emit('notapplied');
            // }

            Event.$emit('applied',this.coupon);//this means the emit only emit to Event this particular instance
            // Event1.fire('applied',this.coupon);
        }
    },
    data(){
        return {coupon:''}
    }
});

Vue.component('tabs',{
    template:`
        <div>        
            <div class="tabs is-small is-centered is-boxed">
              <ul>
                <li v-for="aa in tabs" :class="{'is-active':aa.isActive}">
                    <a :href="aa.href" @click="selectTab(aa)"><span class="icon is-small"><i :class="aa.icon" aria-hidden="true"></i></span>{{aa.name}}<span></a>
                </li>
              </ul>
            </div>
            
            <div class="tabs-details">
                <slot></slot>
            </div>              
        </div>
    `,
    data(){
        return {tabs:[]};
    },
    created(){
        this.tabs = this.$children;//here is key thing, this.$children will return an array of any defined VueComponents in the slotting block of tabs tag
        console.log(this.$children);
    },
    methods:{
        selectTab(selectedtab){
            this.tabs.forEach(tab=>{
                // tab.selected = (tab.name == selectedtab.name);//this will cause a Vue error, Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
                tab.isActive = (tab.name == selectedtab.name);
            });
        }

    }
});

Vue.component('tab',{
    template:`
        <div v-show="isActive"><slot></slot></div>
    
    `,
    props:{//props name is always lowercase
        icon: {required:false},
        name: {required:true},
        selected: {default:false}
    },
    data(){
        return{isActive:false};
    },
    mounted(){
        this.isActive = this.selected;
    },
    computed:{
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g,'-');//this will change About Us => #about-us
        }
    }
});

Vue.component('modal',{
    template:`
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                        tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum 
                        <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, 
                        arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </p>
                    <slot></slot>                   
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `//make an announcement by using $emit('name of announcement')
});


Vue.component('message',{ //be noted, the data and methods defined inside the component, only can be used inside component, can not be used as attributes of this component
    props:['title','body'],

    data(){
        return{
            isVisible: true
        };
    },

    template:`
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <button class="delete" aria-label="delete" @click="hideModal"></button>
                <!--<button class="delete" aria-label="delete" @click="isVisible = false"></button>this is same effect write expression inline instead using method, it for one line expression-->
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
    `,

    methods: {

        hideModal(){
            this.isVisible = false;
        }
    }
});


Vue.component('task-list',{
    template:'<div><task v-for="task in tasks">{{task.taskName}}</task></div> ',//whenever you have template with component, always need single root element, so add <div> to wrap

    data(){
        return{
            tasks:[
                {taskName:'Go to the store', completed:true},
                {taskName:'Go to the email', completed:false},
                {taskName:'Go to the farm', completed:true},
                {taskName:'Go to work', completed:false}
            ]
        };
    },
    mounted(){
        Event.$on('applied',(re)=> alert('event listener from task-list, the value of passed data from coupon component $emit is : '+ re))
    },
    created(){
        console.dir(this.$children);
    }
});


Vue.component('task',{
    template:'<li style="color:blue"><slot>preset content here</slot></li>',
    props:{//add those props for test $children in tabs
        icon: {required:false},
        name: {required:true},
        selected: {default:false}
    },
});

//be noted, the components are separated from Vue, that means the component can be used in every Vue's el defined area. outside of Vue will not work.

new Vue({
    el:'#root1',
    data: {
        titleContent: 'Hello World',
        showModal:false,
        showModal1:false,
        couponApplied:false,
        coupontext:''
    },
    methods:{
        onCouponApplied(){
            this.couponApplied = true;
            this.coupontext = 'you used this coupon!';
        }
    },
    created(){
        Event.$on('applied', (res) =>{//be noted es2015 arrow function syntax is not exactly like function () syntax, refer to https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch
            this.couponApplied = true;
            this.coupontext = 'you used this coupon!';
            alert('handling itd'+res);
        })
    }
});