let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

function countDown() {
    const para = document.createElement('p');
    output.appendChild(para);
    for(let i = 10; i >= 0; i--) {
        if(i === 10) {
            para.textContent = `Countdown ${i}`;
        } else if(i === 0) {
            para.textContent = "Blastoff!";
        } else {
            para.textContent = i;
        }
    }
}