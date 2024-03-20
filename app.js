const encryptButton = document.querySelector(".botoes__criptografar");
const inputTextarea = document.querySelector(".input_text_area");
const outputTextarea = document.querySelector(".output_text_area");

function encryptText(text) {
    const chaves = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat",
    };

    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        const replacement = chaves[char];
        encryptedText += replacement !== undefined ? replacement : text[i];
    }

    return encryptedText;
}

encryptButton.addEventListener("click", function() {
    const inputText = inputTextarea.value;
    const encryptedText = encryptText(inputText);
    outputTextarea.value = encryptedText;
});

const copiarButton = document.querySelector(".botao_copiar");
copiarButton.addEventListener("click", function() {
    outputTextarea.select();
    document.execCommand("copy");
});
