class Menu {
  constructor(rootSelector) {
    this.menu = rootSelector;

    this.menu.addEventListener('click', this.onMenuBtnClick.bind(this));
  }

  load() {
    console.log('loading...');
  }

  save() {
    console.log('saving...');
  }

  search() {
    console.log('searching...');
  }

  onMenuBtnClick(event) {
    const { target } = event;

    if (target.nodeName !== 'BUTTON') {
      return;
    }

    const btnAction = target.dataset.action;

    this[btnAction]();
  }
}

new Menu(document.querySelector('.js-menu'));

new Menu(document.querySelector('.js-second-menu'));
