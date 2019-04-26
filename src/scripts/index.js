import "../styles/index.scss";


import BadgerAccordion from 'badger-accordion';

// Creating a new instance of the accordion
// const accordionDomNode = document.querySelector('.js-badger-accordion');

// const accordion = new BadgerAccordion(accordionDomNode);

new BadgerAccordion('.accordion', {
  openHeadersOnLoad: [0],
  headerClass: '.accordion__header',
  panelClass: '.accordion__panel',
  panelInnerClass: '.accordion__inner'
});