// Importe CommonModule pour utiliser les directives Angular dans le HTML.
import { CommonModule } from '@angular/common';

// Importe Component et OnInit depuis Angular.
import { Component, OnInit } from '@angular/core';

// Déclare le composant Angular.
@Component({
  // Définit le nom du composant utilisé dans Angular.
  selector: 'app-loading',

  // Permet d'utiliser les fonctionnalités communes d'Angular.
  imports: [CommonModule],

  // Indique le fichier HTML du composant.
  templateUrl: './loading.component.html',

  // Indique le fichier SCSS du composant.
  styleUrl: './loading.component.scss'
})

// Définit la classe principale du composant.
export class LoadingComponent implements OnInit {

  // Stocke le pourcentage actuel du chargement.
  progress = 0;

  // Indique si le chargement est terminé.
  isComplete = false;

  // Définit le rayon du cercle de progression.
  readonly radius = 105;

  // Calcule la circonférence du cercle.
  readonly circumference = 2 * Math.PI * this.radius;

  // Calcule la partie restante du cercle selon le pourcentage.
  get strokeDashoffset(): number {

    // Retourne la valeur nécessaire pour afficher la progression.
    return this.circumference -
      (this.circumference * this.progress / 100);
  }

  // Cette méthode est exécutée au lancement du composant.
  ngOnInit(): void {

    // Crée une minuterie exécutée toutes les 35 millisecondes.
    const interval = setInterval(() => {

      // Augmente le pourcentage de 1.
      this.progress++;

      // Vérifie si le chargement est arrivé à 100 %.
      if (this.progress >= 100) {

        // Arrête la minuterie.
        clearInterval(interval);

        // Attend 600 millisecondes avant d'afficher le résultat final.
        setTimeout(() => {

          // Indique que le chargement est terminé.
          this.isComplete = true;

        }, 600);
      }

    }, 35);
  }
}