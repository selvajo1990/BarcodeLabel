var scannedValue = '';
var startTime = new Date().getTime();
window.parent.addEventListener('keydown', event => {
    var endTime = new Date().getTime();
    if (event.key == 'Enter') {
        scannedValue = scannedValue.trim();
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('MagicScan', [scannedValue])
        scannedValue = '';
        event.preventDefault();
        event.stopPropagation();
    }
    else
        if (event.keyCode >= 48) {
             if (endTime - startTime < 100) {
            scannedValue = scannedValue + event.key;
            console.log(scannedValue);
            startTime = endTime;
             } else {
                scannedValue = event.key;
                startTime = endTime;
            }
        }
});