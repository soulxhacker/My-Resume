

//This function highlights the education tab and shows the contents on education tab only
function education()
{
    var getNav=document.getElementById("navBar");
    var links=getNav.childNodes;
    var eduLink=getNav.childNodes[1].childNodes[1];
    var tranLink=getNav.childNodes[1].childNodes[3];
    var proLink=getNav.childNodes[1].childNodes[5];
    var skillLink=getNav.childNodes[1].childNodes[7];
    var honorLink=getNav.childNodes[1].childNodes[9];
    var extraLink=getNav.childNodes[1].childNodes[11];

    eduLink.setAttribute("id","current");
    tranLink.setAttribute("id","");
    proLink.setAttribute("id","");
    skillLink.setAttribute("id","");
    honorLink.setAttribute("id","");
    extraLink.setAttribute("id","");



    var getDivEdu=document.getElementById("EducationContent");
    var getDivTra=document.getElementById("TrainingContent");
    var getDivPro=document.getElementById("ProjectsContent");
    var getDivSki=document.getElementById("SkillsContent");
    var getDivHon=document.getElementById("HonorsContent");
    var getDivExt=document.getElementById("ExtraContent");
 
    getDivEdu.setAttribute("style","display:");
    getDivTra.setAttribute("style","display:none");
    getDivPro.setAttribute("style","display:none");
    getDivSki.setAttribute("style","display:none");
    getDivHon.setAttribute("style","display:none");
    getDivExt.setAttribute("style","display:none");
  
}

//This function highlights the training tab and shows the contents on training tab only

function training()
{

     var getNav=document.getElementById("navBar");
    var links=getNav.childNodes;
    var eduLink=getNav.childNodes[1].childNodes[1];
    var tranLink=getNav.childNodes[1].childNodes[3];
    var proLink=getNav.childNodes[1].childNodes[5];
    var skillLink=getNav.childNodes[1].childNodes[7];
    var honorLink=getNav.childNodes[1].childNodes[9];
    var extraLink=getNav.childNodes[1].childNodes[11];

    eduLink.setAttribute("id","");
    tranLink.setAttribute("id","current");
    proLink.setAttribute("id","");
    skillLink.setAttribute("id","");
    honorLink.setAttribute("id","");
    extraLink.setAttribute("id","");




    var getDivEdu=document.getElementById("EducationContent");
    var getDivTra=document.getElementById("TrainingContent");
    var getDivPro=document.getElementById("ProjectsContent");
    var getDivSki=document.getElementById("SkillsContent");
    var getDivHon=document.getElementById("HonorsContent");
    var getDivExt=document.getElementById("ExtraContent");
 
    getDivEdu.setAttribute("style","display:none");
    getDivTra.setAttribute("style","display:");
    getDivPro.setAttribute("style","display:none");
    getDivSki.setAttribute("style","display:none");
    getDivHon.setAttribute("style","display:none");
    getDivExt.setAttribute("style","display:none");

}

//This function highlights the projects tab and shows the contents on projects tab only
function projects()
{
    var getNav=document.getElementById("navBar");
    var links=getNav.childNodes;
    var eduLink=getNav.childNodes[1].childNodes[1];
    var tranLink=getNav.childNodes[1].childNodes[3];
    var proLink=getNav.childNodes[1].childNodes[5];
    var skillLink=getNav.childNodes[1].childNodes[7];
    var honorLink=getNav.childNodes[1].childNodes[9];
    var extraLink=getNav.childNodes[1].childNodes[11];

    eduLink.setAttribute("id","");
    tranLink.setAttribute("id","");
    proLink.setAttribute("id","current");
    skillLink.setAttribute("id","");
    honorLink.setAttribute("id","");
    extraLink.setAttribute("id","");







    var getDivEdu=document.getElementById("EducationContent");
    var getDivTra=document.getElementById("TrainingContent");
    var getDivPro=document.getElementById("ProjectsContent");
    var getDivSki=document.getElementById("SkillsContent");
    var getDivHon=document.getElementById("HonorsContent");
    var getDivExt=document.getElementById("ExtraContent");
 
    getDivEdu.setAttribute("style","display:none");
    getDivTra.setAttribute("style","display:none");
    getDivPro.setAttribute("style","display:");
    getDivSki.setAttribute("style","display:none");
    getDivHon.setAttribute("style","display:none");
    getDivExt.setAttribute("style","display:none");

}


//This function highlights the skills tab and shows the contents on skills tab only
function skills()
{

    var getNav=document.getElementById("navBar");
    var links=getNav.childNodes;
    var eduLink=getNav.childNodes[1].childNodes[1];
    var tranLink=getNav.childNodes[1].childNodes[3];
    var proLink=getNav.childNodes[1].childNodes[5];
    var skillLink=getNav.childNodes[1].childNodes[7];
    var honorLink=getNav.childNodes[1].childNodes[9];
    var extraLink=getNav.childNodes[1].childNodes[11];

    eduLink.setAttribute("id","");
    tranLink.setAttribute("id","");
    proLink.setAttribute("id","");
    skillLink.setAttribute("id","current");
    honorLink.setAttribute("id","");
    extraLink.setAttribute("id","");



    var getDivEdu=document.getElementById("EducationContent");
    var getDivTra=document.getElementById("TrainingContent");
    var getDivPro=document.getElementById("ProjectsContent");
    var getDivSki=document.getElementById("SkillsContent");
    var getDivHon=document.getElementById("HonorsContent");
    var getDivExt=document.getElementById("ExtraContent");
 
    getDivEdu.setAttribute("style","display:none");
    getDivTra.setAttribute("style","display:none");
    getDivPro.setAttribute("style","display:none");
    getDivSki.setAttribute("style","display:");
    getDivHon.setAttribute("style","display:none");
    getDivExt.setAttribute("style","display:none");

}

//This function highlights the honors tab and shows the contents on honors tab only

function honors()
{


    var getNav=document.getElementById("navBar");
    var links=getNav.childNodes;
    var eduLink=getNav.childNodes[1].childNodes[1];
    var tranLink=getNav.childNodes[1].childNodes[3];
    var proLink=getNav.childNodes[1].childNodes[5];
    var skillLink=getNav.childNodes[1].childNodes[7];
    var honorLink=getNav.childNodes[1].childNodes[9];
    var extraLink=getNav.childNodes[1].childNodes[11];

    eduLink.setAttribute("id","");
    tranLink.setAttribute("id","");
    proLink.setAttribute("id","");
    skillLink.setAttribute("id","");
    honorLink.setAttribute("id","current");
    extraLink.setAttribute("id","");

    var getDivEdu=document.getElementById("EducationContent");
    var getDivTra=document.getElementById("TrainingContent");
    var getDivPro=document.getElementById("ProjectsContent");
    var getDivSki=document.getElementById("SkillsContent");
    var getDivHon=document.getElementById("HonorsContent");
    var getDivExt=document.getElementById("ExtraContent");
 
    getDivEdu.setAttribute("style","display:none");
    getDivTra.setAttribute("style","display:none");
    getDivPro.setAttribute("style","display:none");
    getDivSki.setAttribute("style","display:none");
    getDivHon.setAttribute("style","display:");
    getDivExt.setAttribute("style","display:none");

}

//This function highlights the extra tab and shows the contents on extra tab only
function extra()
{



     var getNav=document.getElementById("navBar");
    var links=getNav.childNodes;
    var eduLink=getNav.childNodes[1].childNodes[1];
    var tranLink=getNav.childNodes[1].childNodes[3];
    var proLink=getNav.childNodes[1].childNodes[5];
    var skillLink=getNav.childNodes[1].childNodes[7];
    var honorLink=getNav.childNodes[1].childNodes[9];
    var extraLink=getNav.childNodes[1].childNodes[11];

    eduLink.setAttribute("id","");
    tranLink.setAttribute("id","");
    proLink.setAttribute("id","");
    skillLink.setAttribute("id","");
    honorLink.setAttribute("id","");
    extraLink.setAttribute("id","current");

    var getDivEdu=document.getElementById("EducationContent");
    var getDivTra=document.getElementById("TrainingContent");
    var getDivPro=document.getElementById("ProjectsContent");
    var getDivSki=document.getElementById("SkillsContent");
    var getDivHon=document.getElementById("HonorsContent");
    var getDivExt=document.getElementById("ExtraContent");
 
    getDivEdu.setAttribute("style","display:none");
    getDivTra.setAttribute("style","display:none");
    getDivPro.setAttribute("style","display:none");
    getDivSki.setAttribute("style","display:none");
    getDivHon.setAttribute("style","display:none");
    getDivExt.setAttribute("style","display:");

}