function getFileExtension() {
    var fileName = document.getElementById('fileNameInput').value;
    var fileExtension = fileName.split('.').pop();
    document.getElementById('result').innerText = 'File Extension: ' + fileExtension;
}
