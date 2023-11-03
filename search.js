document.getElementById('searchInput').addEventListener('input', function() {
    var query = this.value;


    fetch('search.php?query=' + encodeURIComponent(query))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var suggestionsContainer = document.getElementById('suggestions');
            suggestionsContainer.innerHTML = '';

            data.forEach(function(artist) {
                var artistElement = document.createElement('div');
                artistElement.textContent = artist.artist;
                //if the artist name appear more than one time, don't add it to the list
                if (suggestionsContainer.innerHTML.indexOf(artistElement.textContent) == -1) {
                    artistElement.addEventListener('click', function() {
                        document.getElementById('searchInput').value = artistElement.textContent;
                        suggestionsContainer.innerHTML = '';
                    });
                } else {
                    artistElement.textContent = '';
                } 

                //if the input is empty, don't show the suggestions
                if (query == '') {
                    suggestionsContainer.innerHTML = '';
                } else {
                    suggestionsContainer.appendChild(artistElement);
                } 

            });
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
});
