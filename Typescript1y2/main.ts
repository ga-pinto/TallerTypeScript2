// main.ts
import { series } from './data.js'; // Asegúrate de que este sea el nombre correcto del export en data.js
import { Serie } from './serie.js'; // Asegúrate de que Serie esté bien definido en serie.js

let seriesTbody: HTMLElement = document.getElementById('series-table')!;
const totalSeasonsElm: HTMLElement = document.getElementById("total-seasons")!;
const seriesDetail: HTMLElement = document.getElementById('series-detail')!;
const seriesImage: HTMLImageElement = document.getElementById('series-image') as HTMLImageElement;
const seriesTitle: HTMLElement = document.getElementById('series-title')!;
const seriesDescription: HTMLElement = document.getElementById('series-description')!;
const seriesLink: HTMLAnchorElement = document.getElementById('series-link') as HTMLAnchorElement;

// Renderizamos las series en la tabla
renderSeriesInTable(series);

// Calculamos el promedio de temporadas y lo mostramos
totalSeasonsElm.innerHTML = `Seasons average: ${getAverageSeasons(series).toFixed(0)}`;

function renderSeriesInTable(seriesList: Serie[]): void {
    console.log('Desplegando series');
    seriesList.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="series-link" data-serie-id="${serie.id}">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        
        // Agregar evento de clic para mostrar detalles
        trElement.onclick = () => showSeriesDetail(serie); // Esto llama a la función para mostrar detalles
        seriesTbody.appendChild(trElement);
    });
}


function showSeriesDetail(serie: Serie): void {
    seriesDetail.style.display = "block"; // Mostrar la tarjeta
    console.log('Image URL:', serie.imageUrl); // Verificar la URL
    seriesImage.src = serie.imageUrl; // Asignar la imagen de la serie
    seriesTitle.innerText = serie.name; // Asignar el título de la serie
    seriesDescription.innerText = serie.description; // Asignar la descripción de la serie
    seriesLink.href = serie.link; // Asignar el enlace
    seriesLink.innerText = serie.link; // Mostrar el enlace como texto
}





function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons += serie.seasons);
    return totalSeasons / series.length;
}
