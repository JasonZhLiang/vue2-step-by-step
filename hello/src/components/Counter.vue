<template>
    <div>
        <h2>The Count Isa : {{count}}</h2>

        <p>
            <button @click="count +=1">Increment</button>
        </p>
    </div>

</template>

<script>

    export default{
        data(){
            return {
                count:0,
                isActive:false
            };
        },
        props:{//props name is always lowercase
            icon: {required:false},
            name: {required:true},
            selected: {default:false}
        },
        mounted(){
            this.isActive = this.selected;
        },
        computed:{
            href(){
                return '#' + this.name.toLowerCase().replace(/ /g,'-');//this will change About Us => #about-us
            }
        }
    }
</script>