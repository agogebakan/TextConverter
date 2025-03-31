// Text Converter Library
const TextConverter = (() => {
    // Uppercase 
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

    // Remove new lines
    const removeNewLines = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.replace(/\n/g, "");
    };

    // Remove carriage returns
    const removeCarriageReturns = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.replace(/\r/g, "");
    };
	
	// Remove HTML tags
    const removeHtmlTags = (inputElement, outputElement) => {
        const inputText = inputElement.value;
        outputElement.value = inputText.replace(/<[^>]*>/g, "");
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
        removeNewLines,
        removeCarriageReturns,
        removeHtmlTags,
        copyToClipboard
    };
})();
