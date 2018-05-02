<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>hello vue</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.13/vue.min.js"></script>
</head>
<body>
<div id="app">
    <p> {{ message }} </p>
    <input  v-model="message">
</div>
<script>
    var app = new Vue({
        el: "#app",
        data: {
            message: "Hello Vue!"
        },
        created:function(){
            console.log('created');
        }
    });
</script>
</body>
</html>