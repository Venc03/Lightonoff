import Modell from "../Modell/Modell.js";
import View from "../View/View.js";

export default class Controller{
    constructor(){
        const MODELL = new Modell();
        const list = MODELL.getList();
        const szulElem = $(".palya");
        new View(list, szulElem);
        this.#esemenykez(MODELL);
        
    }

    
    #esemenykez(MODELL){
        console.log("FASZ GECI GECI")
        $(window).on("katt", (event)=> {
            console.log("FASZ GECI GECI");
            MODELL.lampaValtas(event.detail);
            new View(MODELL.getList(), this.taroloElem);
        });
    }

}