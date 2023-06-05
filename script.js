var a={image:"./images/Pic.jpeg",name:"Sahithi B.G",designation:"Student"};
var b={image:"./images/Pic1.jpeg",name:"Santhu",designation:"Software Developer"};
var isa=true;
var displaydata;
var changeMypic=function(){
    if(isa){
        displaydata=b;
        isa=false;
    }
    else{
        displaydata=a;
        isa=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesignation").innerHTML=displaydata.designation;

}