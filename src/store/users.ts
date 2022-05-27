import { observable } from "mobx";

let users:Array<string> = new Array(50);
users[0] = 'undefined';
users[1] = "Світлана Ряба";
users[2] = "Світлана Ряба";
users[3] = "Андрій Сороковський";
users[4] = "Андрій Сороковський";
users[5] = "Швець Катерина";
users[6] = "Галина Видиш";
users[7] = "Шиманська Наталя";
users[8] = "Лєна Вінничук";
users[9] = "";
users[10] = "Галамай Світлана";
users[11] = "Швець Катерина";
users[12] = "";
users[13] = "Шиманська Наталя";
users[14] = "Лєна Вінничук";
users[15] = "Галина Видиш";
users[16] = "Галамай Світлана";
users[17] = "Оксана Торяник";
users[18] = "Токарська Олена";
users[19] = "Галина Видиш";
users[20] = "Алла Миколлюк";
users[21] = "Шиманська Наталя";
users[22] = "";
users[23] = "Віталік Домік";
users[24] = "";
users[25] = "Швець Катерина";
users[26] = "";
users[27] = "";
users[28] = "";
users[29] = "Неля Домік";
users[30] = "Швець Катерина";
users[31] = "";
users[32] = "";
users[33] = "";
users[34] = "";
users[35] = "";
users[36] = "Галамай Світлана";
users[37] = "";
users[38] = "";
users[39] = "";
users[40] = "";
users[41] = "Галина Видиш";
users[42] = "";
users[43] = "Шиманська Наталя";
users[44] = "";
users[45] = "Галамай Світлана";
users[46] = "";
users[47] = "";
users[48] = "Алла Миколлюк";
users[49] = "Світлана Ряба";
users[50] = "Світлана Ряба";
class People{
    @observable people = JSON.parse(localStorage.getItem('users') || JSON.stringify(users));
    constructor(){
        
    }
    getpeople(){
        this.getpeople = JSON.parse(localStorage.getItem('users') || JSON.stringify(users));
    }
    setPeople(array:string[]):void{
        localStorage.setItem('users', JSON.stringify(array));
    } 
}
export default new People();