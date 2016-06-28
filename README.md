![Status](https://img.shields.io/badge/status-ok-green.svg) ![Maintenance](https://img.shields.io/maintenance/yes/2016.svg?maxAge=2592000) ![License](https://img.shields.io/dub/l/vibe-d.svg?maxAge=2592000)



# f7-angular-components-and-ui.router-boilerplate

This project integrates [Framework7](http://framework7.io) with [AngularJS 1.5.* components]() and [Angular UI-Router](https://angular-ui.github.io/ui-router/site/#/api/ui.router). It serves as a base project to create hybrid apps for mobile/desktop environments.

- Components are placed in `/components` folder

- Angular initializacion and configuration and Angular services are located in `/js` folder

- Each componet has associated an Angular **.html** template and a Javascript **.js** file where the controller logic resides

- For example, there is a **f7Accordion** component defined in `/components/f7Accordion/`. You can use this component in any view (html file) using this custom tag:`<f7-accordion></f7-accordion>`. You can also adapt the behavior and look to your needs modifing the  component files: `/components/f7Accordion/f7Accordion.js` and `/components/f7Accordion/f7Accordion.html`

- Each subcomponent included in other component are placed in a subdirectory except when the subcomponent is used in several places. This is for component reusability. For example, **f7SpeedDial** is only used in **f7Popup** component, so it will be placed in `/components/f7Popup/f7SpeedDial`

- The html layout has responsive design using media queries. It adapts to phone/tablet/desktop screens when is possible

- Components allow to define CSS styles in the html template for encapsulation

- The project uses AngularJS UI-Router and ui-views, not Framework7 router. The F7 router is disabled.




>**With this project all existing angular 1.* directives and code can be used**. 
>
>**Also JQuery plugins can be used in the project**



# About animations and transitions

Because of using *Angular UI-Router*, route changes do not have transitions animated like in F7. It has been necessary to implement a new animation system. It has been carefully chosen to perform good on old stock android phones taking in account some considerations:

- The option of using *UI-Router* and *Ng-Animations* was discarded. This implied to use 3 animations at the same time and had poor performance.  This 3 simultaneous animations were: 
  - Animation to close the side menu panel.
  - Animation to leave the current state.
  - Animation for entering the new state.


- Instead of applying the animation to the whole page `<div class="page"></div>`, it was chosen to apply the animation classes only to the container div of the page `<div class="page-content"></div>`. This way the performance is better; there is less dom elements to apply animation calculations.
- Note: Lazy-load page has no animation. It is not adviceable to apply animations to this kind of content. The images could not load initially.



# Demostration


- [FOR DESKTOP (big screen size)](https://yagolopez.github.io/f7-angular-components-and-ui.router/#/)

- [FOR MOBILE (small screen size)](https://yagolopez.github.io/f7-angular-components-and-ui.router/iframe/iframe.html)