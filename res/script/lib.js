let canvas;
function initialize() {
    let root = document.getElementById('controlAddIn');
    canvas = document.createElement('canvas');
    canvas.height = 100;
    root.appendChild(canvas);
}

function showBarcode(result){
    textToBase64Barcode(result);
}

function textToBase64Barcode(text){
    JsBarcode(canvas, text, {format: "CODE128"});
    return canvas.toDataURL("image/png");
  }

function invokeAlMethod(methodName) {
    return function (...args) {
        return new Promise(function(resolve){
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(methodName, args, false, resolve);
        });
    }
}
