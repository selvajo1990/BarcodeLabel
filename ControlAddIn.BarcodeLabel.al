controladdin "Barcode Label"
{
    Scripts = './res/script/lib.js', './res/script/JsBarcode.code128.min.js';
    StartupScript = './res/script/startup.js';
    StyleSheets = './res/script/demo.css';

    RequestedWidth = 300;
    RequestedHeight = 150;
    event OnControlReady();
    procedure showBarcode(Barcode: Text);
}