function extractFile (text) {

    let file = text.substring(text.lastIndexOf("\\"));
    let fileName = file.substring(1, file.lastIndexOf("."))
    let fileExt = file.substring(file.lastIndexOf(".") + 1);
    
    
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');