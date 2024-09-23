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
    this.map = L.map('mapId').setView([51.505, -0.09], 10);

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

    // Add a circle marker (buffer) around a point
    const circle = L.circle([51.508, -0.11], {
      color: 'blue',
      fillColor: '#30f',
      fillOpacity: 0.5,
      radius: 500 // radius in meters
    }).addTo(this.map);

    circle.bindPopup("This is a circular marker (buffer zone).");

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
