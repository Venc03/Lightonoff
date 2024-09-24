import Mezo from "./Mezo.js";

export default class View{
    #list = {}
    #szulElem

    constructor(list, szulElem){
        this.#list = list;
        this.#szulElem = szulElem;
        this.pkiir();
    }

    pkiir(){
        this.#list.forEach((elem, index) => {
            new Mezo(elem, index, this.#szulElem);
        });
    }
}