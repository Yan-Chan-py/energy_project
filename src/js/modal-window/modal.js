export class Modal {
  constructor() {
    this.overlay = document.querySelector('.overlay') || this._createOverlay();
    this.modal = null;
    this.closeButton = null;

    this.closeButtonHandler = () => this.close();
    this.escapeKeyHandler = (event) => this.closeEsc(event);
    this.overlayClickHandler = (event) => this.closeBack(event);
  }

  _createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.display = 'none';
    overlay.style.zIndex = -1;
    document.body.appendChild(overlay);
    return overlay;
  }

  open(content) {
    // якщо overlay раптом відсутній (малоймовірно, але нехай)
    if (!this.overlay) this.overlay = this._createOverlay();

    // вставляємо розмітку модалки
    this.overlay.innerHTML = content;

    // ПІСЛЯ вставки контенту — знаходимо модалку та кнопку закриття
    this.modal =
      this.overlay.querySelector('.modal-info') ||
      this.overlay.querySelector('.modal-get-raiting') ||
      document.querySelector('.modal-info') ||
      document.querySelector('.modal-get-raiting');

    this.closeButton =
      this.overlay.querySelector('.modal-button-close') ||
      document.querySelector('.modal-button-close');

    // показуємо overlay/modалку
    this.overlay.style.zIndex = 4;
    this.overlay.style.display = 'flex';
    if (this.modal) this.modal.classList.remove('visually-hidden');

    document.body.classList.add('no-scroll');

    // listeners
    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.closeButtonHandler);
    }
    document.addEventListener('keydown', this.escapeKeyHandler);
    this.overlay.addEventListener('click', this.overlayClickHandler);
  }

  close() {
    if (!this.overlay) return;

    const modal =
      this.overlay.querySelector('.modal-info') ||
      this.overlay.querySelector('.modal-get-raiting') ||
      document.querySelector('.modal-info') ||
      document.querySelector('.modal-get-raiting');

    this.overlay.style.display = 'none';
    this.overlay.style.zIndex = -1;
    if (modal) modal.classList.add('visually-hidden');

    document.body.classList.remove('no-scroll');

    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.closeButtonHandler);
    }
    document.removeEventListener('keydown', this.escapeKeyHandler);
    this.overlay.removeEventListener('click', this.overlayClickHandler);
  }

  closeEsc(event) {
    if (event.key === 'Escape') this.close();
  }

  closeBack(event) {
    if (event.target === this.overlay) this.close();
  }
}

export const myModal = new Modal();
