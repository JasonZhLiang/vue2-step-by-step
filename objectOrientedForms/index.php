<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <style>
        .color-red {color:red;}
        .color-blue {color:blue;}
        .is-loading {background: red}
        body {padding-top: 40px}
    </style>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>
<body>
     <div id="app" class="container content">

         <example></example>

         <h1 v-if="names.length > 0">Your Project List: </h1>

         <ul class="menu menu-list">
             <li v-for="name in names" v-text="name"></li>
         </ul>

         <h1 v-if="form.name !='' ">Your new Project : {{form.name}}</h1>

         <form action="project.php" method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
         <!-- by put event.target.name here will dynamically  point to any "name" property of input, instead of putting @keydown to every single input as below input -->
         <!-- submit.once; you always can add . after event to modify the events, call events modifiers add .prevent (preventDefault) will not submit the form (prevent default action)-->
             <div class="control">
                 <label for="name" class="lable">Project Name</label>
                 <input type="text" id="name" name="name" class="input" v-model="form.name" @keydown="form.errors.clear('message')"><br>
                 <span class="help is-danger" v-if="form.errors.has('message')" v-text="form.errors.get('message')"></span>
             </div>
             <div class="control">
                 <label for="description" class="lable">Project Description</label>
                 <input type="text" id="description" name="description" class="input" v-model="form.description"><br>
                 <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
             </div>
             <div class="control">
                 <button class="button is-primary" :disabled="form.errors.any()" @click="addName">Create</button>
             </div>
         </form>
    </div>


<!--    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>--><!-- we install axios through npm install axios --save-dev-->
<!--    <script src="https://unpkg.com/vue@2.1.8/dist/vue.js"></script>--><!-- we install vue through npm install vue --save-dev-->
<!--    <script src="app.js"></script>-->

<!--    <script src="./public/bundle.js"></script>--><!--see here, we use webpack way to run this project, by using the bundle.js created and compiled by webpack
    all we done here, we separated the Form, Errors and Vue in different module, since the browser did not support module,
    so we have to use module bundler to bundle all the module togather into a bundler file, that evenry browser can understand,
     that is webpack or browserify does(comes to play)-->
     <script src="./public/vendor.js"></script><!--now since we generated two bundle files instead one, so we need pull out here. vendor library will be cache a year of a time, because you will never ned bus the cache-->
     <script src="./public/app.js"></script><!--but your application code that can bused, and this not a biggest file, so not a big deal, vendor library is larger things-->

    <script>
        let user = {};

        let data = {
            name: 'testName',
            description: 'TestDescription'
        };
        for (let field in data) {
            user[field] = data[field];
        }

        console.log(user); // true

    </script>

</body>
</html>