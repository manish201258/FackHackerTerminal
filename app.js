// Initializing Hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...

let count=-1;
async function additems(item){
    await delay();
    let div=document.createElement("div");
    div.innerHTML=item;
    document.body.append(div)
    count++;
}

function delay(){
    return new Promise((resolve,reject)=>{
        let a=Math.floor(2+7*Math.random());
        console.log(a)
        setTimeout(()=>{
        resolve("Sucess");
    },a*1000)
    })
}

async function main(){
    
    setInterval(()=>{
        let last=document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
             last.innerHTML=last.innerHTML+"."
        }
    },500)

   

let text=["Initializing Hacking",
"Reading your Files",
"Password files Detected",
"Sending all passwords and personal files to server",
"Cleaning up"];

for(items of text){
   
    await additems(items);

}
}
main();