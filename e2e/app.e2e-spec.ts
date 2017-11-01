import { IndiegogoPage } from './app.po';

describe('indiegogo App', () => {
  let page: IndiegogoPage;

  beforeEach(() => {
    page = new IndiegogoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
