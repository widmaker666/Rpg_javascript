const readline = require('readline-sync')


class Player {
    constructor(nom, pointDeVie, devise, age) {
        
        this.nom = nom
        this.pointDeVie = pointDeVie
        this.devise = devise
        this.age = age
    }
    presentation(){
        console.log("Et voici le first combattant :" + this.nom);
        console.log("Je vois que tu as :" + this.age + "ans");
        console.log("Ta devise de baltringue est : " + this.devise);
        console.log("Tu vas commcer l'aventure avec : " + this.pointDeVie + "PV");             
    };
    show_state(){
        if(this.pointDeVie <= 0){
            console.log(`Il te reste ${this.pointDeVie}PV, tu est MORT`);
        }else{
            console.log(`Il te reste ${this.pointDeVie}PV, tu peux encore y arriver`);
        }
    };
            
    blessure(dommage){
        this.pointDeVie = this.pointDeVie - dommage
        console.log(`Tu viens de prendre ${dommage}DG, il te reste ${this.pointDeVie}PV`)
        
    };
   
    lancerDe(playerVictime) {
        const degat = Math.floor(Math.random() * 20)
        playerVictime.blessure(degat)
      
    }

    combat(){
        while (player1.pointDeVie >= 0) {
            player1.lancerDe(player1)
            player1.show_state()
        }
    }
    
};

class Zerk extends Player {
    constructor(nom, pointDeVie , devise, age, type, specialSkill) {
    super(nom, pointDeVie , devise, age)
    this.type = type
    this.specialSkill = specialSkill
    }  
    prez(){
        console.log("Voici ton nouveau perso :" + " " + this.nom + ", " + "qui est un :" + this.type + ", " + "vieux de :" + this.age + "ans" + ", avec comme devise : " + this.devise + "\n");
        console.log("Tu vas commencer l'aventure avec : " + this.pointDeVie + "PV" + "\n" + "avec ton specialSkill de fou est : " + this.specialSkill);
    };    
}

const nom = "Gartoub"
const devise = "merde"
const age = "88"
const type = "warrior"
const specialSkill = "Couillue"
const pointDeVie = 50



const player1 = new Zerk(nom, pointDeVie , devise, age, type, specialSkill)

player1.combat()




