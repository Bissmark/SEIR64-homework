let play_url = "https://www.folgerdigitaltexts.org/"
// let plays_abilities = []
// let plays_moves = []
// let plays_species = []
// let plays_stats = []
let play_sel_string = ""
let play_func_string = ""


$("#play_fetch").click(function() {
    play_sel_string = $("#play_select").val()
    play_func_string = $("#play_function").val()
    play_url_combined = play_url + play_sel_string + "/" + play_func_string

    $.ajax({
        url: play_url_combined.toString(),
        dataType: 'html',
        success: function(play_info){
            // $('#returned_name').html(play_info.name);  
            // play_info.abilities.forEach((item) => {
            //     plays_abilities.push(item.ability.name)
            //     returned_abilities = plays_abilities.join(', ')});       

        console.log(play_info)    
        $("#new_content").html(play_info);


    }})
});

$("#play_function").change(function(){
    switch ($("#play_function option:selected").val())    {
        case "ftln": 
            $("#play_line_search").show();
            $("#play_line_search_tag").text("Please indicate the FTLN four-digit code").show();
            break;
        case "word": 
            $("#play_line_search").show();
            $("#play_line_search_tag").text("Word IDs start with 'w', followed by seven digits").show();
            break;
        case "monologue": 
            $("#play_line_search").show();
            $("#play_line_search_tag").text("Optional minimum line count").show();
            break;
        case "onStage": 
            $("#play_line_search").show();
            $("#play_line_search_tag").text("Please indicate the FTLN four-digit code").show();
            break;
        // case "ftln": 
        //     $("#play_line_search").show();
        //     $("#play_line_search_tag").text("Please indicate the FTLN four-digit code").show();
        //     break;
    }
});

$(document).ready(function () {
    $("#play_line_search").hide();
    $("#play_line_search_tag").hide();
  });