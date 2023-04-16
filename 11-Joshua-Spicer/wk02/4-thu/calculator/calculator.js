$(document).ready(function () {

    $('#add').click(function () {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var result = num1 + num2;
        $('#result').val(result);
    });

    $('#subtract').click(function () {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var result = num1 - num2;
        $('#result').val(result);
    });

    $('#multiply').click(function () {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var result = num1 * num2;
        $('#result').val(result);
    });

    $('#divide').click(function () {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var result = num1 / num2;
        $('#result').val(result);
    });
});
