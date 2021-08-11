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







