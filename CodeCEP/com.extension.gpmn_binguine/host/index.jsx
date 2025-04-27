function main() {
    alert("Hi");
}

function factGPMN() {

    var fileName = '/host/resources/factGPMN.csv';
    var fileContent = openFilename(fileName)

    // alert(fileContent);
    var arr = fileContent.split(/\n/g);
    try {

        var currentMilliseconds = new Date().getMilliseconds(); // Get current milliseconds
        var i = (currentMilliseconds % 30) + 1; // Generate a number in the range 1-30
        var outputStr = arr[i % arr.length].replace(/^\d+,"?/m, "").replace(/"$/m, "").replace(/^['"]|['"]$/g, ""); // Remove quotes
        alert(outputStr);
    }
    catch (err) {
        alert("Chào mừng Giải phóng Miền Nam 30/4 và Quốc tế Lao động 1/5");
    }
}

function chucGPMN() {

    var fileName = '/host/resources/chucGPMN.csv';
    var fileContent = openFilename(fileName);

    // alert(fileContent);
    var arr = fileContent.split(/\n/g);
    try {

        var currentMilliseconds = new Date().getMilliseconds(); // Get current milliseconds
        var i = (currentMilliseconds % 30) + 1; // Generate a number in the range 1-30
        var outputStr = arr[i % arr.length].replace(/^\d+,"?/m, "").replace(/"$/m,"").replace(/^['"]|['"]$/g, ""); // Remove quotes
        alert(outputStr);
    }
    catch (err) {
        alert("Chào mừng Giải phóng Miền Nam 30/4 và Quốc tế Lao động 1/5");
        }
}

function openImageName(imagePath) {
    var myUserFolder = Folder.userData.fsName;
    var separator = '/Adobe/CEP/extensions/com.extension.gpmn_binguine/'; // Adjusted for project structure
    var myImagePath = myUserFolder + separator + imagePath;
    var myImage = new File(myImagePath);
    if (myImage.exists) {
        return myImagePath; // Return constructed path
    } else {
        return ""; // Return empty string if image doesn't exist
    }
}

function tulieuGPMN() {
    var paletteWindow = new Window('palette', 'Ảnh tư liệu GPMN', undefined);
    paletteWindow.orientation = "column";

    var fileName = '/host/resources/tulieuGPMN.csv'; // CSV file with captions and image paths
    var fileContent = openFilename(fileName);

    if (fileContent) {
        var arr = fileContent.split(/\n/g);
        try {
            var currentMilliseconds = new Date().getMilliseconds(); // Get current milliseconds
            var i = (currentMilliseconds % 30) + 1; // Generate a number in the range 1-30
            var row = arr[i % arr.length];

            // Use regex to parse the row
            var regex = /("[^"]+")|[^,|\n]+|,(?=\n)|\n(?=,)|,(?=,)|,(?=$)/gm;
            var matches = row.match(regex);

            var imagePath = matches[0].replace(/^['"]|['"]$/g, ""); // Remove both single and double quotes
            var caption = matches.slice(1).join(",").replace(/^"|"$/g, "").replace(/^['"]|['"]$/g, ""); // Remove quotes

            // alert("Image Path: " + imagePath); // Debug: Alert the image path
            // alert("Caption: " + caption); // Debug: Alert the caption

            var absoluteImagePath = openImageName(imagePath); // Get absolute path using openImageName

            // Create a group for the image
            var imageGroup = paletteWindow.add("group");
            imageGroup.orientation = "column";
            imageGroup.alignment = "center";

            if (absoluteImagePath) {
                var image = imageGroup.add("image", undefined, File(absoluteImagePath));
                image.size = [700, 500]; // Set both width and height to 500px to prevent overflow
            } else {
                imageGroup.add("statictext", undefined, "Image not found.");
            }

            // Create a separate group for the caption
            var textGroup = paletteWindow.add("group");
            textGroup.orientation = "column";
            textGroup.alignment = "center";

            var text = textGroup.add("statictext", undefined, caption, { multiline: true });
            text.alignment = "center";
            text.size = [700, 50];
        } catch (err) {
            paletteWindow.add("statictext", undefined, "Error loading content.");
        }
    } else {
        paletteWindow.add("statictext", undefined, "CSV file not found.");
    }

    var closeButton = paletteWindow.add("button", undefined, "Close");
    closeButton.onClick = function () {
        paletteWindow.close();
    };
    paletteWindow.center();
    paletteWindow.show();
}

function openFilename(fileName) {
    var myUserFolder = Folder.userData.fsName;
    // alert(myUserFolder);
    //Mac: Users/nmb/Library/Application Support
    //Win: C:\Users\nmb\AppData\Roaming

    var separator = '/Adobe/CEP/extensions/com.extension.gpmn_binguine/'; //windows only

    var myFile = new File(myUserFolder + separator + fileName);
    if (myFile.exists) {
        myFile.open("r");
        var content = myFile.read();
        myFile.close();

        return content;
    } else {
        return "";
    }
}


// get separator based on OS
