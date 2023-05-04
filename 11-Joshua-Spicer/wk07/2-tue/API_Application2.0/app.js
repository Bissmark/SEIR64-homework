const API_URL = "https://api.thecatapi.com/v1/";
const API_KEY = "DEMO-API-KEY";
let currentImageToView;

$(document).ready(function () {

    $("#vote-up-btn").click(function () {
        showImageToView();
    });

    showImageToView();
});

function showImageToView() {
    $.ajax({
        url: API_URL + "images/search",
        headers: {
            "x-api-key": API_KEY
        },
        success: function (data) {
            currentImageToView = data[0];
            $("#image-to-view").attr("src", currentImageToView.url);
        },
        error: function (xhr, status, error) {
            console.log("Error: " + error);
        }
    });
}
