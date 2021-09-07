
/* ICI CHANGEMENT DE PHOTO */


var photo1 = document.getElementById("photo1")
var photo2 = document.getElementById("photo2")
var photo3 = document.getElementById("photo3")
var photo4 = document.getElementById("photo4")
var photo5 = document.getElementById("photo5")
var photo6 = document.getElementById("photo6")
var photo7 = document.getElementById("photo7")

photo7.addEventListener("click" , function(){

  document.getElementById("photo1").src = document.getElementById("photo7").src ;


})

photo6.addEventListener("click" , function(){

  document.getElementById("photo1").src = document.getElementById("photo6").src ;


})


photo2.addEventListener("click" , function(){

  document.getElementById("photo1").src = document.getElementById("photo2").src ;


})


photo3.addEventListener("click" , function(){

  document.getElementById("photo1").src = document.getElementById("photo3").src ;


})


photo4.addEventListener("click" , function(){

    document.getElementById("photo1").src = photo4.src ;
  
  
  })

photo5.addEventListener("click" , function(){

    document.getElementById("photo1").src = document.getElementById("photo5").src ;
  
  
  })



  /* ICI BACKGROUND RGB */

var rgb1 = document.getElementById("rgb1")
var rgb2 = document.getElementById("rgb2")
var rgb3 = document.getElementById("rgb3")
var color = document.getElementById("color")

var a = parseInt(rgb1.value) 
var b = parseInt(rgb2.value) 
var c = parseInt(rgb3.value)

rgb1.addEventListener("blur",function(){

  a = parseInt(rgb1.value)



color.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")" ; 

rgbresultat.textContent = "rgb(" + a + "," + b + "," + c + ")" ; 

  

})



rgb2.addEventListener("blur",function(){

 b = parseInt(rgb2.value)

color.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")" ; 


rgbresultat.textContent = "rgb(" + a + "," + b + "," + c + ")" ; 

})




rgb3.addEventListener("blur",function(){



 c = parseInt(rgb3.value)

 color.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")" ; 


  var rgbresultat = document.getElementById("rgbresultat")

rgbresultat.textContent = "rgb(" + a + "," + b + "," + c + ")" ; 

})




/* calculatrice */ 

var resultat = document.getElementById("resultat")

var button = document.getElementById("obtenir")

var buttonmoins = document.getElementById("buttonmoins")
var buttonsplus = document.getElementById("buttonplus")
var buttonx = document.getElementById("buttonx")
var buttondivise = document.getElementById("buttondivise")

var newresult = document.getElementById("newresult")

var valeur1 = document.getElementById("chiffre1")
var valeur2 = document.getElementById("chiffre2")













buttonsplus.onclick = function(){

    var chiffre1 = parseInt(document.getElementById("chiffre1").value ) ;


    var chiffre2 = parseInt(document.getElementById("chiffre2").value ) ; 

    var compte = chiffre1 + chiffre2

    
    



    


    resultat.textContent =  compte 
        newresult.textContent = " Utiliser "  + compte + " comme premier chiffre ?"


        newresult.onclick = function(){

            valeur1.value = compte
        }

   
} ;


buttonmoins.onclick = function() {

    var chiffre1 = parseInt(document.getElementById("chiffre1").value ) ;


    var chiffre2 = parseInt(document.getElementById("chiffre2").value ) ; 

    var compte = chiffre1 - chiffre2 

    




    



   
    resultat.textContent =  compte 
    newresult.textContent = " Utiliser "  + compte + " comme premier chiffre ?"


    newresult.onclick = function(){

        valeur1.value = compte
    }


    
} ;



buttonx.onclick = function() {

    var chiffre1 = parseInt(document.getElementById("chiffre1").value ) ;


    var chiffre2 = parseInt(document.getElementById("chiffre2").value ) ; 

    var compte = chiffre1 * chiffre2 

    




    



   
    resultat.textContent =  compte 
    newresult.textContent = " Utiliser "  + compte + " comme premier chiffre ?"


    newresult.onclick = function(){

        valeur1.value = compte
    }


    
} ;


buttondivise.onclick = function() {

    var chiffre1 = parseInt(document.getElementById("chiffre1").value ) ;


    var chiffre2 = parseInt(document.getElementById("chiffre2").value ) ; 

    var compte = chiffre1 / chiffre2 

   

    




    



   
        resultat.textContent =  compte 
        newresult.textContent = " Utiliser "  + compte + " comme premier chiffre ?"


        newresult.onclick = function(){

            valeur1.value = compte
        }
         
     

     
        
        



        




        


    
} ;