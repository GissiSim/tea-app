import { TeaAppPage } from './app.po';

describe('tea-app App', () => {
  let page: TeaAppPage;

  beforeEach(() => {
    page = new TeaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
