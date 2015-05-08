'use strict';

import menuContent from './menu-content';

export default class SidenavCtrl {

  constructor(sidenavService) {
    this.sidenavService = sidenavService;
    this.menuContent = menuContent;
  }

  isSectionSelected(section) {
    var selected = false, openedSection = this.sidenavService.openedSection;
    if (openedSection === section) {
      selected = true;
    }
    else if (section.children) {
      section.children.forEach(function (childSection) {
        if (childSection === openedSection) {
          selected = true;
        }
      });
    }
    return selected;
  }

  isSelected(page) {
    return this.sidenavService.isPageSelected(page);
  }

  isOpen(section) {
    return this.sidenavService.isSectionSelected(section);
  }

  toggleOpen(section) {
    this.sidenavService.toggleSelectSection(section);
  }
}
