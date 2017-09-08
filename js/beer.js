loadapi();
function loadapi(){
	fetch("https://api.punkapi.com/v2/beers").then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
        var data = "<table border = '2'>"+"<tr><th>Name</th>"
        			+"<th>PH</th>"+"<th>Yeast</th>"+"<th>First Brewed</th>"+"<th>Description</th>"+"<th>Picture</th></tr>"
        for (var i = 0; i < br.length; i++) {
            data += "<tr>"+"<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast 
           			 + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>"
            		 + "<td><image src =" + br[i].image_url + "/></td>"+"</tr>"
        }
        data +="</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}
function searhname(name){
	fetch('https://api.punkapi.com/v2/beers?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
        var data = "<table border = '2'>"+"<tr><th>Name</th>"
        			+"<th>PH</th>"+"<th>Yeast</th>"+"<th>First Brewed</th>"+"<th>Description</th>"+"<th>Picture</th></tr>"
        for (var i = 0; i < br.length; i++) {
            data += "<tr>"+"<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast 
           			 + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>"
            		 + "<td><image src =" + br[i].image_url + "/></td>"+"</tr>"
        }
        data +="</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}
function searhyeast(yt){
	fetch('https://api.punkapi.com/v2/beers?yeast=' + yt).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
       var data = "<table border = '2'>"+"<tr><th>Name</th>"
        			+"<th>PH</th>"+"<th>Yeast</th>"+"<th>First Brewed</th>"+"<th>Description</th>"+"<th>Picture</th></tr>"
        for (var i = 0; i < br.length; i++) {
            data += "<tr>"+"<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast 
           			 + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>"
            		 + "<td><image src =" + br[i].image_url + "/></td>"+"</tr>"
        }
        data +="</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}
function searhba(ba){
	fetch('https://api.punkapi.com/v2/beers?brewed_after=' + ba).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
        var data = "<table border = '2'>"+"<tr><th>Name</th>"
        			+"<th>PH</th>"+"<th>Yeast</th>"+"<th>First Brewed</th>"+"<th>Description</th>"+"<th>Picture</th></tr>"
        for (var i = 0; i < br.length; i++) {
            data += "<tr>"+"<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast 
           			 + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>"
            		 + "<td><image src =" + br[i].image_url + "/></td>"+"</tr>"
        }
        data +="</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}
