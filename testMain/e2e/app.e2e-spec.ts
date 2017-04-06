import { TestMainPage } from './app.po';

describe('test-main App', function() {
  let page: TestMainPage;

  beforeEach(() => {
    page = new TestMainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
