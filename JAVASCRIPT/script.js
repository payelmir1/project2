const generateRGBCode = () => {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    return `rgb(${r}, ${g}, ${b})` ;
}

const updateColor = () => {
    const color = generateRGBCode();
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color;

    const colorCode = document.getElementById('colorCode');
    colorCode.innerText = color;
}



const copyColorCode = () => {
    const colorCode =  document.getElementById('colorCode');
    const inputTag = document.createElement('input');
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;

    inputTag.select()
    document.execCommand('copy');
    document.body.removeChild(inputTag);
    alert('Color Copied to Clipboard');
};

document.getElementById('copyButton').addEventListener('click', () => {
    copyColorCode();
});


function generateNewCode(){

    updateColor();
}