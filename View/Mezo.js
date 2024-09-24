export default class Mezo{

    #szulElem
    #light
    #index

    constructor(light, index, szulElem){
        this.#index = index;
        this.#light = light;
        this.#szulElem = szulElem
        this.mkiir(this.#light, this.#index, this.#szulElem);

        this.gombElem = $(`.mezo${this.#index}`);
        if(this.#light == false || this.#light == true){
            this.gombFelkapcs();
        }
    }

    mkiir(light, index, szulElem){
        let txt = `<div id = "mezo" class = "mezo${index}"> ${light} </div>`
        szulElem.append(txt);
    }

    gombFelkapcs(){
        this.gombElem.on("click", () => {
            const e = new CustomEvent("katt", { detail:this.#index});
            window.dispatchEvent(e);
        })
    }
}