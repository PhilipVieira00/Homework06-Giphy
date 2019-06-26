let apiKey = OcD4AM3Gt4jRmqh0sARzOI3qLoSLYtMB;
let gifs = ["Dogs", "Cats", "Seals", "Birds"];

function createButton() {
        for (i=0; i<gifs.length; i++) {
            $("gif-up").append("<button class=btn btn-primary")

}
$("giphy-button").on("click", function() {
    event.preventDefault();
    var gifInput = $("gif-up").val().trim();
    gifs.push(gifInput);

$(".gif").on("click", function() {
    // STEP ONE: study the html above.
    // Look at all the data attributes.
    // Run the file in the browser. Look at the images.

    // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

    // STEP TWO: make a variable named state and then store the image's data-state into it.
    // Use the .attr() method for this. 
    // ============== FILL IN CODE HERE FOR STEP TWO =========================
    let state = $(this).attr("data-state");


if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
})