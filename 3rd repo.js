const status = document.getElementById("status");
const btn = document.getElementById("btn");

function toggle(){
    if(status.textContent === "OFF"){
        status.textContent = "ON";
    }else{
        status.textContent = "OFF";
    }
}

btn.addEventListener("click", toggle);
document.addEventListener(e => {
    if(e.key === "Enter"){
        toggle();
    }
});