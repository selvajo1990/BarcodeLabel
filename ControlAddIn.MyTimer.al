controladdin "My Timer"
{
    Scripts = './res/script/MyTimer.js';

    StartupScript = './res/script/MyTimerMain.js';

    HorizontalShrink = true;
    HorizontalStretch = true;
    MinimumHeight = 1;
    MinimumWidth = 1;
    RequestedHeight = 1;
    RequestedWidth = 1;
    VerticalShrink = true;
    VerticalStretch = true;

    procedure SetTimerInterval(milliSeconds: Integer);

    procedure StartTimer();

    procedure StopTimer();

    event ControlAddInReady();

    event PingPongError(ErrorText: Text);

    event TimerElapsed();
}