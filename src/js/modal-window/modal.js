export class Modal {
  constructor() {
    this.overlay = document.querySelector('.overlay');
    this.modal = null;
    this.closeButton = null;

    this.closeButtonHandler = () => this.close();
    this.escapeKeyHandler = event => this.closeEsc(event);
    this.overlayClickHandler = event => this.closeBack(event);
  }

  open(content) {
    if (!this.overlay) this.overlay = document.querySelector('.overlay');
    if (!this.overlay) return;

    this.overlay.innerHTML = content;

    this.overlay.style.zIndex = 4;
    this.overlay.style.display = 'flex';

    this.modal =
      this.overlay.querySelector('.modal-info') ||
      this.overlay.querySelector('.modal-get-raiting');

    this.modal?.classList.remove('visually-hidden');

    this.closeButton = this.overlay.querySelector('.modal-button-close');

    document.body.classList.add('no-scroll');

    this.closeButton?.addEventListener('click', this.closeButtonHandler);
    document.addEventListener('keydown', this.escapeKeyHandler);
    this.overlay.addEventListener('click', this.overlayClickHandler);
  }

  close() {
    if (!this.overlay) return;

    this.modal?.classList.add('visually-hidden');

    // Clear modal content to avoid stale DOM and handlers
    this.overlay.innerHTML = '';

    this.overlay.style.display = 'none';
    this.overlay.style.zIndex = -1;

    document.body.classList.remove('no-scroll');

    this.closeButton?.removeEventListener('click', this.closeButtonHandler);
    document.removeEventListener('keydown', this.escapeKeyHandler);
    this.overlay.removeEventListener('click', this.overlayClickHandler);

    this.modal = null;
    this.closeButton = null;
  }

  closeEsc(event) {
    if (event.key === 'Escape') this.close();
  }

  closeBack(event) {
    if (event.target === this.overlay) this.close();
  }
}

export const myModal = new Modal();
