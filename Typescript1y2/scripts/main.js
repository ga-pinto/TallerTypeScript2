// main.ts
import { series } from './data.js'; // Asegúrate de que este sea el nombre correcto del export en data.js
var seriesTbody = document.getElementById('series-table');
var totalSeasonsElm = document.getElementById("total-seasons");
var seriesDetail = document.getElementById('series-detail');
var seriesImage = document.getElementById('series-image');
var seriesTitle = document.getElementById('series-title');
var seriesDescription = document.getElementById('series-description');
var seriesLink = document.getElementById('series-link');
// Renderizamos las series en la tabla
renderSeriesInTable(series);
// Calculamos el promedio de temporadas y lo mostramos
totalSeasonsElm.innerHTML = "Seasons average: ".concat(getAverageSeasons(series).toFixed(0));
function renderSeriesInTable(seriesList) {
    console.log('Desplegando series');
    seriesList.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"#\" class=\"series-link\" data-serie-id=\"").concat(serie.id, "\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        // Agregar evento de clic para mostrar detalles
        trElement.onclick = function () { return showSeriesDetail(serie); }; // Esto llama a la función para mostrar detalles
        seriesTbody.appendChild(trElement);
    });
}
function showSeriesDetail(serie) {
    seriesDetail.style.display = "block"; // Mostrar la tarjeta
    console.log('Image URL:', serie.imageUrl); // Verificar la URL
    seriesImage.src = serie.imageUrl; // Asignar la imagen de la serie
    seriesTitle.innerText = serie.name; // Asignar el título de la serie
    seriesDescription.innerText = serie.description; // Asignar la descripción de la serie
    seriesLink.href = serie.link; // Asignar el enlace
    seriesLink.innerText = serie.link; // Mostrar el enlace como texto
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
