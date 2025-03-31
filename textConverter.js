// Text Converter Library
const TextConverter = (() => {
    // Uppercase dönüştürme
    const toUpperCase = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.toUpperCase();
    };

    // Lowercase 
    const toLowerCase = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.toLowerCase();
    };

    // FirstUpper
    const capitalizeWords = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.replace(/\b\w/g, char => char.toUpperCase());
    };

    // Normalize
    const normalizeSentence = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
    };

    // Copy
    const copyToClipboard = (outputElement) => {
        outputElement.select();
        document.execCommand("copy");
        alert("Text copied to clipboard!");
    };

    return {
        toUpperCase,
        toLowerCase,
        capitalizeWords,
        normalizeSentence,
        copyToClipboard
    };
})();
