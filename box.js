var box = new Object();
box.confirm=function(message,callback)
{
    $(".confirm").show();
    $(".con").unbind().click(function () {
        callback.call(this, true);
    })
    $(".can").unbind().click(function () {
        $(".confirm").hide();
        callback.call(this, false);
    })
}