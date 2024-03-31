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

encryptButton.addEventListener("click", function () {
    const inputText = inputTextArea.value;
    const encryptedText = encryptText(inputText);
    outputTextArea.value = encryptedText;
    inputTextArea.value = ""
});

copiarButton.addEventListener("click", function () {
    outputTextArea.select();
    document.execCommand("copy");
    outputTextArea.value = "";
});

const keys = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};

function decryptText(phrase) {
    let accumulator = "";
    let offset = 0;

    while (offset < phrase.length) {
        let currentKeys = "";
        let noEncodeFound = false;

        for (let j = offset; j < phrase.length; j++) {
            currentKeys += phrase[j];
            if (keys[currentKeys]) {
                accumulator += keys
                [currentKeys];
                offset += currentKeys.length;
                noEncodeFound = true;
                break;
            }
        }

        if (!noEncodeFound) {
            accumulator += phrase[offset];
            offset += 1;
        }
    }

    return accumulator;
}

decryptButton.addEventListener("click", function () {
    const inputText = inputTextArea.value;
    const decryptedText = decryptText(inputText);
    outputTextArea.value = decryptedText;
});