var scannedValue = '';
var endTime = new Date().getTime();
window.parent.addEventListener('keydown', event => {
    var startTime = new Date().getTime();
    if (event.key == 'Enter') {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('MagicScan', [scannedValue])
        scannedValue = '';
        event.preventDefault();
        event.stopPropagation();
    }
    else
        if (event.keyCode >= 48) {
            if (startTime - endTime < 100) {
                scannedValue = scannedValue + event.key;
                console.log(scannedValue);
                endTime = startTime;
            } else {
                scannedValue = '';
                endTime = startTime;
            }
        }
});