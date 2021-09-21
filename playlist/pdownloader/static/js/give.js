//$("#download").bind('click', function (){
//$("#download").click(function (){

$('body').on('click', '.give', function() {
//    console.log('download button clicked');
//    console.log('download start now');
//    alert("Hello! I am an alert box!!");
    var resolution = $(this).closest("tr").find(".resolution").text();
    var format = $(this).closest("tr").find(".format").text();
    var size = $(this).closest("tr").find(".size").text();
    var csrf_token = $("input[name='csrfmiddlewaretoken']").val();


    console.log(resolution,format,size, csrf_token);
    alert('Playlist Downloading Start Now\nNote: Do Not Click again and again Download')
    $.ajaxSetup({
        headers: {
        'X-CSRFToken': csrf_token
        }
    });
    jQuery.ajax({
    type: 'GET',
     url : "/upload/",

     data: {
        resolution: resolution,
        format: format,
        size: size,
//        csrf-token: csrf_token
     },
     dataType:"html",
     success: function(data){
//        console.log(data)
       obj = JSON.parse(data)
//       console.log(obj)
//       console.log(obj.msg)

        if(obj.status == 'video'){
            var msg = obj.msg;
//            console.log(msg);

            window.location.href = 'msg/' + msg;

        }else if(obj.status == 'audio'){
            var msg = obj.msg;
//            console.log(msg);
            window.location.href = 'msg/' + msg;

        }else if(obj.status == 'Fail'){
            var msg = obj.msg;
//            console.log(msg);

            window.location.href = 'msg/' + msg;
        }

    }

    });
    });
//});