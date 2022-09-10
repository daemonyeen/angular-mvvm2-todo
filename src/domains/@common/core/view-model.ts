export abstract class ViewModel<T> {
  protected view: T;

  register(view: T) {
    this.view = view;
  }
}
