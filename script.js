var a={image:"Pic.jpeg",name:"Sahithi B.G",designation:"Student"};
var b={image:"Pic1.jpeg",name:"Santhu",designation:"Software Developer"};
var isa=true;
var displaydata;
var changeMypic=function(){
    if(isa){
        displaydata=b;
        a=false;
    }
    else{
        displaydata=a;
        b=false;
    }
}