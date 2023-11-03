function searchArtist() {
  let name = document.getElementById('artist').value;
  let accessToken = '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6'; // Replace with your own access token

  fetch(`https://api.spotify.com/v1/search?type=artist&q=${name}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
  .then(data => {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    data.artists.items.forEach(artist => {
      let artistLink = document.createElement('a');
      artistLink.href = `/artist?name=${encodeURIComponent(artist.name)}`;
      artistLink.innerText = artist.name;
      resultsDiv.appendChild(artistLink);
    });
  })
  .catch(error => console.error(error));
}