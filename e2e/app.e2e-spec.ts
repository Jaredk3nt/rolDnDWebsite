import { DndPage } from './app.po';

describe('dnd App', () => {
  let page: DndPage;

  beforeEach(() => {
    page = new DndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
