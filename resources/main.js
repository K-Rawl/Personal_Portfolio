let i = 0;  

function changeColor() {
    let element = document.getElementById("title")
      
    if (i % 2 === 0) {
        element.style.color = 'white'; 
        i += 1;
    } else {
        element.style.color = 'black'; 
        i += 1;
    }
            
}