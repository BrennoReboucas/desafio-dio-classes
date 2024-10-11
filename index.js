class hero{
	constructor(name, age, type){
    	this.nameHero = name
    	this.ageHero = age
    	this.typeHero = type
    }
    
    atack(atackName){
    	console.log(`O ${this.typeHero} ${this.nameHero} atacou ${atackName}`) 
    }
    
    testar(){
    	let atackName;
    	if(this.typeHero === "mago"){
        	atackName = "usando magia"
        	this.atack(atackName)
        } else if(this.typeHero === "arqueiro"){
        	atackName = "atirando flechas"
        	this.atack(atackName)
        } else if(this.typeHero === "guerreiro"){
        	atackName = "usando a espada"
            this.atack(atackName)
        } else{
        	atackName = "usando suas shurikens"
            this.atack(atackName)
        }
    }
}
//mago, arqueiro, guerreiro e ninja

let nameHero;
let ageHero;
let typeHero;

let brenno = new hero("Brenno", "25", "guerreiro")

brenno.testar()

