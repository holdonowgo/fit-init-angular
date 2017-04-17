import { FitInitAngularPage } from './app.po';

describe('fit-init-angular App', () => {
  let page: FitInitAngularPage;

  beforeEach(() => {
    page = new FitInitAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
