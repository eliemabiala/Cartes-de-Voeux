let optionValue = document.getElementById("ChangeSize");
    let textSize;

    optionValue.addEventListener("click", function() {
        textSize = optionValue.value;
        console.log(textSize);
    });

document.getElementById('greeting-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let message = document.getElementById('message').value;
    let fontSize = textSize;
    let textColor = document.getElementById('textColor').value;
    let bgColor = document.getElementById('bgColor').value;
    let imageUrl = document.getElementById('imageUrl').value;

    let greetingCardHTML = `
        <div style="background-color: ${bgColor}; padding: 20px;">
            <img src="${imageUrl}" style="max-width: 100%; margin-bottom: 20px;">
            <p style="font-size: ${fontSize}px; color: ${textColor};">${message}</p>
        </div>
    `;

    document.getElementById('greeting-card').innerHTML = greetingCardHTML;



});
