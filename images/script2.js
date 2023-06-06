var ui={name:"",image:"",username:""};
var changeMypic=function(){
    fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>{
        ui.name=data.results[0].name.first;
        ui.image=data.results[0].picture.large;
        ui.username=data.results[0].login.username;
        document.getElementById("myimage").src=ui.image;
        document.getElementById("myname").innerHTML=ui.name;
        document.getElementById("mydesignation").innerHTML=ui.username;
    })
}