import { Component, OnInit } from '@angular/core';

const CARDS = [
  {
    image: 'assets/logo_scalian-1.png',
    title: 'Architecte logicielle chez Scalian Alyotech',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eligendi?',
    contentClasses: ['deep-purple', 'darken-1', 'white-text'],
    actionClasses: ['deep-purple', 'lighten-2', 'white-text'],
    action: 'Du 10/09/2018 à aujourd\'hui'
  },
  {
    image: 'assets/wi6labs_logo.png',
    title: 'Développeur web fullstack',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, dolorum?',
    contentClasses: ['light-blue', 'white-text'],
    actionClasses: ['light-blue', 'lighten-3'],
    action: 'Du 26/09/2016 au 7/09/2018'
  },
  {
    image: 'assets/sharp_lab.png',
    title: 'Admin système et réseau chez Sharplab',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, dolorum?',
    contentClasses: ['green', 'lighten-2'],
    actionClasses: ['green', 'lighten-3'],
    action: 'Du 26/05/2016 au 3/07/2018'
  },
];

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  cards: any[] = CARDS;

  constructor() { }

  ngOnInit() {
  }

}
