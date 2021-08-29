
var timerInterval;
var timerObject;

function SetTimerInterval(milliSeconds) {
timerInterval = milliSeconds;
}

function StartTimer() {
if (timerInterval == 0 || timerInterval == null) {
Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('PingPongError', ['No timer interval set.']);
return;
}

timerObject = window.setInterval(ExecuteTimer, timerInterval);
}

function StopTimer() {
clearInterval(timerObject);
}

function ExecuteTimer() {
Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('TimerElapsed', null);
}