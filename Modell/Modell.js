export default class Modell {

    #index;

    constructor() {
        this.list = [false, false, false, false, false, false, false, false, false];
        this.#index = 0;
        this.countOffLights(this.list);
    }

    lampaValtas(index) {
        this.#index = index;
        //INDEX LAMPA VALTAS
        if (this.list[this.#index] == true) {
            this.list[this.#index] = false;
            console.log("indexf");
        } else {
            this.list[this.#index] = true;
            console.log("indext");
        }
        this.#index = index;
        //NEM BAL OLDAL
        if (!(this.#index % 3 == 0)) {
            this.#index = this.#index - 1;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
                console.log("nembalf");
            } else {
                this.list[this.#index] = true;
                console.log("nembalj");
            }
        }
        this.#index = index;
        //NEM JOBB OLDAL
        if (!(this.#index % 3 == 2)) {
            this.#index = this.#index + 1;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
                console.log("nemjobbf");
            } else {
                this.list[this.#index] = true;
                console.log("nemjobbt");
            }
        }
        this.#index = index;
        //NEM FELSO SOR
        if (!(this.#index < 3)) {
            this.#index = this.#index - 3;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
                console.log("nemfelsof");
            } else {
                this.list[this.#index] = true;
                console.log("nemfelsot");
            }
        }
        this.#index = index;
        //NEM ALSO SOR
        if (!(this.#index > 5)) {
            this.#index = this.#index + 3;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
                console.log("nemalsof");
            } else {
                this.list[this.#index] = true;
                console.log("nemalsot");
            }
        }
    }

    countOffLights() {
        let db = 0
        for (let index = 0; index < this.list.length; index++) {
            if (this.list[index] == false) {
                db++;
            }
        }
    }

    getList() {
        return this.list;
    }

}