let btn=document.getElementById("btn");



function calculateMerit()
{
    let matric=document.getElementById("matric").value;
    
    let fsc=document.getElementById("fsc").value;
    let usat=document.getElementById("usat").value;
    matric=matric/4;
    let matricfsc=parseInt(matric)+parseInt(fsc);
    let subjectRes=(matricfsc/1375)*70;
    
    let usatResult=(parseInt(usat)/100)*30;
   

    let totalResult=subjectRes+usatResult;

    document.getElementById("res").innerHTML=`Your merit is ${totalResult}`;


}
