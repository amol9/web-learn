var json = "{ \"data\": [1, 2, 3, 4] }"
var obj = JSON.parse(json)

obj.data.forEach(i => {
    console.log(i)
});