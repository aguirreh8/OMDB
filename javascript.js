// Request data from OMDB, display info to user
const retrieveMovie = () => {
	const searchTerm = $("#searchBar").val();
	$.ajax({
		method: "GET",
		url: `http://www.omdbapi.com/?apikey=trilogy&t=${searchTerm}`
	})
	.then(response => {
		console.log(response);
		const {Poster, Title, Plot, Rated} = response;

		$("#movieDisplay").append(
			$("<h3>").text(Title),
			$(`<img src=${Poster}>`),
			$('<p>').html(`<strong>${Rated}</strong>`),
			$('<p>').text(Plot),
			$('<button type="submit" class="addToStorage">').text("Save")
		);

	});
}

// Start when document is loaded
$(document).ready(function() {
	$("#searchBtn").click(e => {
		e.preventDefault();
		retrieveMovie();
	})
	$(document).on("click", ".addToStorage", e => {
		e.preventDefault();
		console.log("saved");
	})
})