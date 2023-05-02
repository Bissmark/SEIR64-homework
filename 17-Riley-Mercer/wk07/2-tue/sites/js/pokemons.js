let query_string = ""
let pokemons_url = "https://pokeapi.co/api/v2/pokemon/"
let pokemons_abilities = []
let pokemons_moves = []
let pokemons_species = []
let pokemons_stats = []

$("button").click(function() {
    pokemon_string = $("#pokemon_search").val()
    pokemons_url_combined = pokemons_url + pokemon_string

    $.ajax({
        url: pokemons_url_combined.toString(),
        dataType: 'json',
        success: function(pokemon_info){
            $('#returned_name').html(pokemon_info.name);  
            pokemon_info.abilities.forEach((item) => {
                pokemons_abilities.push(item.ability.name)
                returned_abilities = pokemons_abilities.join(', ')});          
            $('#returned_abilities').html(returned_abilities)
            pokemon_info.moves.forEach((item) => {
                pokemons_moves.push(item.move.name)
                returned_moves = pokemons_moves.join(', ')});          
            $('#returned_moves').html(returned_moves)
            $('#returned_species').html(pokemon_info.species.name);
            pokemon_info.stats.forEach((item) => {
                pokemons_stats.push(item.stat.name +': ' + item.base_stat)
                console.log(pokemons_stats)
                returned_stats = pokemons_stats.join(', ')});          
            $('#returned_stats').html(returned_stats)
    }})
});