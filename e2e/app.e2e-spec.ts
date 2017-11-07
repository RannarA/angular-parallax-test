import { AngularParallaxTestPage } from './app.po';

describe('angular-parallax-test App', () => {
  let page: AngularParallaxTestPage;

  beforeEach(() => {
    page = new AngularParallaxTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
