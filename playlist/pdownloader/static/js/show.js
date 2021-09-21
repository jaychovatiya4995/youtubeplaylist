$(document).ready(function(){
console.log('in function');
$("#send").submit(function(){
    console.log('search button clicked');

    var link = $('#text_link').val();
    var csrf_token = $("input[name='csrfmiddlewaretoken']").val();
    console.log(link);

    $.ajaxSetup({
        headers: {
        'X-CSRFToken': csrf_token
        }
    });
    jQuery.ajax({
    type: 'POST',
     url : "/download/",

     data: {
        link: link,

     },
     dataType:"html",
     success: function(data){
//        console.log(data)
        obj = JSON.parse(data)
//        console.log(obj)
        dataList = obj.obj;
//        console.log(dataList)
        console.log('data get ');

        text = " "

        text += '<h2>'+ obj.title +'</h2>'
        text += '<table class="table mt-4 table-bordered table-striped table-hover table-dark">'
           text +=   '<thead class="thead-danger">'
                text += '<tr>'
                text += '<th scope="col">Resolution</th>'
                text +=  '<th scope="col">Format</th>'
                text +=  '<th scope="col">Size</th>'
                text +=  '<th scope="col">Download</th>'
                text += '</tr>'
              text += '</thead>'
              text += '<tbody>'
    var i = 0;
    for(let key in dataList){
//        console.log(key + ' ' + dataList[res]);
//        console.log(dataList)
        var res = dataList[key].res
        var from = dataList[key].frm
        var size = dataList[key].size
        text += '<tr class="fe">';
            text += '<td class="resolution" id="res"><h6>' + dataList[key].res + '</h6></td>';
            text += '<td class="format" id="for">' +dataList[key].frm+ '</td>';
            text += '<td class="size" id="size">' + dataList[key].size + '</td>';
            text += '<td>' +
            '<form>' +
//                 csrf_token +
                '<button type="button" name="url" id="download" class="give btn btn-danger btn-dwl" >Download</button>' +
//                '<button type="button" id="download" onclick="me()" class="gave btn btn-danger btn-dwl" >Download</button>' +
            '</form>' +
            '</td>';
        i++;
//        console.log(i);
        text += '</tr>';
    }
    text += '</table>'

    $("#v").html(text);


    }
    });

    return false;
});
})