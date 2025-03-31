// Text Converter Kütüphanesi
const TextConverter = (() => {
    // Uppercase dönüştürme
    const toUpperCase = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.toUpperCase();
    };

    // Lowercase dönüştürme
    const toLowerCase = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.toLowerCase();
    };

    // Her kelimenin ilk harfini büyük yapma
    const capitalizeWords = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.replace(/\b\w/g, char => char.toUpperCase());
    };

    // Cümleyi normalize etme (ilk harfi büyük yapma)
    const normalizeSentence = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
    };

    // Metni panoya kopyalama
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
