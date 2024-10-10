import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}

  ionViewDidEnter() {
    // Initialize the map and set the view
    this.map = L.map('mapId').setView([-8.107735945266175, 112.92235945643012], 10);

    // Base layers
    const osmBase = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satelliteBase = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const darkBase = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
    });

    const terrainBase = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org/">OpenTopoMap</a>'
    });

    const streetsBase = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Add the default base map (OSM) to the map
    osmBase.addTo(this.map);

    const image = 'https://kilasjatim.com/wp-content/uploads/2024/08/gunung-semeru-2_43.jpeg'; // Sesuaikan URL gambar
    // Add a circle marker (buffer) around a point
    const circle = L.circle([-8.107735945266175, 112.92235945643012], {
      color: 'blue',
      fillColor: '#30f',
      fillOpacity: 0.5,
      radius: 500 // radius in meters
    }).addTo(this.map);

    circle.bindPopup(`
      <b>Puncak Gunung Semeru</b><br>
      Salah satu puncak gunung tertinggi di Pulau Jawa dengan ketinggian 3.676 mdpl.<br>
      <img src="${image}" alt="Universitas Gadjah Mada" style="max-width: 100%; height: auto;"/>
    `).openPopup();

    // Base Maps object for the layer control
    const baseMaps = {
      "OpenStreetMap": osmBase,
      "Satellite": satelliteBase,
      "Dark": darkBase,
      "Terrain": terrainBase,
      "Streets": streetsBase
    };

    // Add Layer Control
    L.control.layers(baseMaps).addTo(this.map);
  }
}
