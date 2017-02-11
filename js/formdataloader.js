$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "data/websitelist.xml",
        dataType: "xml",
        success: function(xml) {
            var select = $("#SourceList");

            $(xml).find('dropdown').each(function(){
                $(this).find('make').each(function(){
                    var value = $(this).attr('value');
                    var label = $(this).text();
                    select.append("<option class='ddindent' value='"+ value +"'>"+label+"</option>");
                });
            });