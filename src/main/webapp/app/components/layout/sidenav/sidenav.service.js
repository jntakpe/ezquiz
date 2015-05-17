'use strict';

import menuContent from './menu-content';

export default class SidenavService {

    selectSection(section) {
        this.openedSection = section;
    }

    toggleSelectSection(section) {
        this.openedSection = (this.openedSection === section ? null : section);
    }

    isSectionSelected(section) {
        return this.openedSection === section;
    }

    selectPage(section, page) {
        this.currentSection = section;
        this.currentPage = page;
    }

    isPageSelected(page) {
        return this.currentPage === page;
    }

    getMenuContent(role) {
        return menuContent(role);
    }
}
