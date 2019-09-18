import { BetnesisPage } from './app.po';

describe('betnesis App', () => {
  let page: BetnesisPage;

  beforeEach(() => {
    page = new BetnesisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
