import { CanvasSVGPage } from './app.po';

describe('canvas-svg App', () => {
  let page: CanvasSVGPage;

  beforeEach(() => {
    page = new CanvasSVGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
