//Copy this to use instead of function modTick(){}
//Everyone is allowed to copy
//License: https://en.wikipedia.org/wiki/WTFPL#Version_2
//Define repeating Task
function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler()
                .postDelayed(new java.lang.Runnable({
                    run: function() {
//Code here
                        nx = getPlayerX();
                        ny = getPlayerY();
                        nz = getPlayerZ();

                        //For repeating
                        eval(every());
                    }
                }),/* Milliseconds between every call*/ 1000 / 70);
        }
    }))
}
//Start the repeating task
rptask();
