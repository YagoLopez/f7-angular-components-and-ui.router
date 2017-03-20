![Status](https://img.shields.io/badge/status-ok-green.svg) ![Maintenance](https://img.shields.io/maintenance/yes/2016.svg?maxAge=2592000) ![License](https://img.shields.io/dub/l/vibe-d.svg?maxAge=2592000)



# f7-angular-components-and-ui.router-boilerplate

This project integrates [Framework7](http://framework7.io) with [AngularJS 1.5.+ components]() and [Angular UI-Router](https://angular-ui.github.io/ui-router/site/#/api/ui.router). It serves as a base project to create hybrid applications for mobile/desktop environments.

# Architecture

- Components are placed in `/app/components` folder
- App configuration and other Angular files are located in the `/app/js` folder
- Each componet has associated an Angular **.html** template and a Javascript **.js** file where the controller logic resides. For example, there is a **f7Accordion** component defined in `/app/components/f7Accordion/`. You can use this component in any view (html file) using this custom tag:`<f7-accordion></f7-accordion>`. You can also adapt the behavior and look to your needs modifing the files: `/app/components/f7Accordion/f7Accordion.js` and `/app/components/f7Accordion/f7Accordion.html`
- Each subcomponent included in other component are placed in a subdirectory except when the subcomponent is used in several places. This is for component reusability. For example, **f7SpeedDial** is only used in **f7PopupDetalle** component, so it will be placed in `/components/f7Popup/f7SpeedDial` . However **f7PopoverShare** is used in **pagHome** and **f7PopupDetalle** so it is placed in `/app/components/`
- The html layout has responsive design using media queries. It adapts to phone/tablet/desktop screens when is possible
- Component CSS styles are defined in the html template for easy encapsulation. Be careful with CSS selectors and names to only apply the styles to the component.
- The project uses *AngularJS UI-Router* and *UI-views*, not Framework7 router. The F7 router is disabled.
- There is no need to use `<div class="views"></div>` from F7 because it is used `<ui-view></ui-view>` in its place
- This template project uses a modified version of Framework 7 material CSS styles. Some animations and effects are omited for performance reasons. (For example, ripple effect)




>**With this project all existing angular 1.* directives and code can be used**. 
>
>**Also JQuery and NPM plugins can be used**



# About animations and transitions

Due to the use of *Angular UI-Router* instead of F7 router, page changes do not have transitions animated like in F7. It has been necessary to implement a new animation system. It has been carefully chosen to perform good on old stock android phones taking in account some considerations:

- The option of using *UI-Router* and *Ng-Animations* was discarded. This implied to have three animations at the same time and had poor performance.  This three simultaneous animations were: 
  - Animation to close the side menu panel.
  - Animation to leave the current state.
  - Animation for entering the new state.
- Instead of three animations in the worst case are used only two simultaneously:
  - Animation to close the side menu panel
  - Animation to enter a new state/page




- Instead of applying an animation to the whole page on `<div class="page"></div>`, only it is applied to the page content `<div class="page-content"></div>`. This way the performance is better; there is less dom elements to apply CSS animation calculations.
- Note 1: Lazy-load page has no animation. It is not adviceable to apply animations to this kind of content. The images could not load initially.
- Note 2: the default animation "scaleUpDown" does not render smoothly in the page "grid" because there are a lot of calculations to make the grid responsive. It has been used "moveFromLeft" in its place.



# Demostration


- [FOR MOBILE (devices with small screen size)](https://yagolopez.github.io/f7-angular-components-and-ui.router/#/)

- [FOR DESKTOP (devices with wide screen size)](https://yagolopez.github.io/f7-angular-components-and-ui.router/iframe/iframe.html)
