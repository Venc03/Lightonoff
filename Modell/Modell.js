export default class Modell{
    #list = [false, false, false, false, false, false, false, false, false];
    #index;
    
    constructor(){
        this.#index = 0;
        this.countOffLights();
    }
    
    lampaValtas(index){
        this.#index = index;
        //INDEX LAMPA VALTAS
        if(this.#list[this.#index] == true){
            this.#list[this.#index] = false;
        }else{
            this.#list[this.#index] = true;
        } 
        //NEM BAL OLDAL
         if(!(this.#index % 3 == 0)){
            this.#index = this.#index - 1;
            if(this.#list[this.#index] == true){
                this.#list[this.#index] = false;
            }else{
                this.#list[this.#index] = true;
            } 
         }
        //NEM JOBB OLDAL
         if(!(this.#index % 3 == 2)){
            this.#index = this.#index + 1;
            if(this.#list[this.#index] == true){
                this.#list[this.#index] = false;
            }else{
                this.#list[this.#index] = true;
            } 
         }
        //NEM FELSO SOR
         if(!(this.#index < 3)){
            this.#index = this.#index - 3;
            if(this.#list[this.#index] == true){
                this.#list[this.#index] = false;
            }else{
                this.#list[this.#index] = true;
            } 
         }
        //NEM ALSO SOR
         if(!(this.#index > 5)){
            this.#index = this.#index + 3;
            if(this.#list[this.#index] == true){
                this.#list[this.#index] = false;
            }else{
                this.#list[this.#index] = true;
            } 
         }
    }

    countOffLights(){

    }
    
    getList(){
        return this.#list;
    }
    
    }