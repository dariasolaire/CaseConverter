
let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let save = document.getElementById("save-text-file");

let textarea=document.querySelector("textarea")



upper.addEventListener("click", function () {
    let result = textarea.value.toUpperCase();
    textarea.value = result;
})

lower.addEventListener("click", function (){
    let result = textarea.value.toLowerCase();
    textarea.value=result;
    })

proper.addEventListener("click", function() {
    textarea.value =textarea.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');;
});

sentence.addEventListener("click", function() {
    textarea.value = textarea.value.toLowerCase().split('. ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('. ');;
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
save.addEventListener("click", function() {
    let text = textarea.value;
    let filename = "text.txt"
    download(filename ,text);
}, false);