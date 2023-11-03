function artistaEscolhido() {

    let artista = document.getElementById("searchInput").value;

    var myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "138171e0b3abc236692fba98947395edb62ee223");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify([
      {
        "q": "'" + artista + "'",
        "gl": "br",
        "hl": "pt-br",
        "autocorrect": false
      },
    ]);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://google.serper.dev/images", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Extract the imageUrl from the first result
            if (data && data.length > 0 && data[0].images && data[0].images.length > 0) {
                const imageUrl = data[0].images[0].imageUrl;

                // Place it in the HTML
                document.getElementById("img").src = imageUrl;
                localStorage.setItem("artista", artista);
                localStorage.setItem("imageUrl", imageUrl);
                window.location.href = "tirarfoto.html";
            }
        })
        
    //catch "imageUrl" of the first result in the fetch

    //place it in the html
    document.getElementById("img").src = imageUrl;

    //header to "tirarfoto.html"


}


