const codeInput = document.getElementById('code-input');
const previewFrame = document.getElementById('preview-frame');

codeInput.addEventListener('input', updatePreview);

function updatePreview() {
    const code = codeInput.value;
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDocument.body.innerHTML = code;
}

updatePreview(); // Initial preview update
