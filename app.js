const encryptButton = document.querySelector(".buttons__encrypt");
const decryptButton = document.querySelector(".buttons__decrypt");
const inputTextArea = document.querySelector(".input_text_area");
const outputTextArea = document.querySelector(".output_text_area");
const copiarButton = document.querySelector(".copy_button");

function encryptText(text) {
    const chaves = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
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
    const inputText = inputTextArea.value;
    const encryptedText = encryptText(inputText);
    outputTextArea.value = encryptedText;
    inputTextArea.value = ""
});

copiarButton.addEventListener("click", function() {
    outputTextArea.select();
    document.execCommand("copy");
    outputTextArea.value = "";
});

 function decryptText(text) {
    const chaves = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
    };

    let decryptedText = "";
    let substring = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (chaves[substring + char] !== undefined) {
            substring += char;
        } else {
            if (substring !== "") {
                decryptedText += chaves[substring];
                substring = "";
            }
            decryptedText += char;
        }
    }

    if (substring !== "") {
        decryptedText += chaves[substring];
    }

    return decryptedText;
}

decryptButton.addEventListener("click", function() {
    const inputText = inputTextArea.value;
    const decryptedText = decryptText(inputText);
    outputTextArea.value = decryptedText;
}); 

//"a": "ai",
//"e": "enter",
//"i": "imes",
//"o": "ober",
//"u": "ufat",
const matrizCodigo = [["a" , "ai"], ["e" , "enter"], ["i" , "imes"], ["o" , "ober"], ["u" , "ufat"]];
console.table(matrizCodigo);