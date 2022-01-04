export function refuge(){
    console.log("hello");
    hungry();
};
function hungry(){
    console.log("i am hungry");
};
export function funTime(path){
    path.innerText += " "+new Date;
}