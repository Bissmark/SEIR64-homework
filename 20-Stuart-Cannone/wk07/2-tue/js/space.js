$(document).ready(function() {
    const apodEndpoint = "https://api.nasa.gov/planetary/apod";
    const epicEndpoint = "https://epic.gsfc.nasa.gov/api/natural";
    const apiKey = "g6BXGaOBg9rb99MOxlbQmBGYQLmMqqMHNmCGncCE";

    $.ajax({
        url: apodEndpoint,
        dataType: "json",
        data: {
            api_key: apiKey
        },
        success: function(data) {
            const imageUrl = data.url;
            const imageTitle = data.title;
            $("#apod").append(`<img class="mainImages"  src="${imageUrl}">`);
            $("#apod").append(`<p>${imageTitle}</p>`);
        }
    });

    $.ajax({
        url: epicEndpoint,
        dataType: "json",
        data: {
            api_key: apiKey
        },
        success: function(data) {
            const latestImage = data[data.length - 1];
            const date = new Date(latestImage.date);
            const year = date.getUTCFullYear();
            const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
            const day = date.getUTCDate().toString().padStart(2, "0");
            const imageID = latestImage.image;
            const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${imageID}.png?api_key=${apiKey}`;
            const caption = latestImage.caption;
            $("#epic").append(`<img class="mainImages" src="${imageUrl}">`);
            $("#epic").append(`<p>Date: ${date.toLocaleDateString()}</p>`);
            $("#epic").append(`<p>Caption: ${caption}</p>`);
        },
    });
});
