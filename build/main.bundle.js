(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

loadapi();
function loadapi() {
    fetch("https://api.punkapi.com/v2/beers").then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
        var data = "<table border = '2'>" + "<tr><th>Name</th>" + "<th>PH</th>" + "<th>Yeast</th>" + "<th>First Brewed</th>" + "<th>Description</th>" + "<th>Picture</th></tr>";
        for (var i = 0; i < br.length; i++) {
            data += "<tr>" + "<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>" + "<td><image src =" + br[i].image_url + "/></td>" + "</tr>";
        }
        data += "</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}
function searhname(name) {
    fetch('https://api.punkapi.com/v2/beers?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
        var data = "<table border = '2'>" + "<tr><th>Name</th>" + "<th>PH</th>" + "<th>Yeast</th>" + "<th>First Brewed</th>" + "<th>Description</th>" + "<th>Picture</th></tr>";
        for (var i = 0; i < br.length; i++) {
            data += "<tr>" + "<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>" + "<td><image src =" + br[i].image_url + "/></td>" + "</tr>";
        }
        data += "</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}
function searhyeast(yt) {
    fetch('https://api.punkapi.com/v2/beers?yeast=' + yt).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
        var data = "<table border = '2'>" + "<tr><th>Name</th>" + "<th>PH</th>" + "<th>Yeast</th>" + "<th>First Brewed</th>" + "<th>Description</th>" + "<th>Picture</th></tr>";
        for (var i = 0; i < br.length; i++) {
            data += "<tr>" + "<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>" + "<td><image src =" + br[i].image_url + "/></td>" + "</tr>";
        }
        data += "</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}
function searhba(ba) {
    fetch('https://api.punkapi.com/v2/beers?brewed_after=' + ba).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Not responding');
    }).then(function (response) {
        var br = response;
        var data = "<table border = '2'>" + "<tr><th>Name</th>" + "<th>PH</th>" + "<th>Yeast</th>" + "<th>First Brewed</th>" + "<th>Description</th>" + "<th>Picture</th></tr>";
        for (var i = 0; i < br.length; i++) {
            data += "<tr>" + "<td>" + br[i].name + "</td> <td>" + br[i].ph + "</td> <td>" + br[i].ingredients.yeast + "</td> <td>" + br[i].first_brewed + "</td> <td>" + br[i].description + "</td>" + "<td><image src =" + br[i].image_url + "/></td>" + "</tr>";
        }
        data += "</table>";
        document.getElementById('beerdata').innerHTML = data;
    });
}

},{}]},{},[1]);
