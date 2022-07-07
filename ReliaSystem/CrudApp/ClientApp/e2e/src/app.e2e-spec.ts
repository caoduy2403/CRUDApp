import { AppPage } from './app.po';

describe('CrudApp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: CrudApp', async () => {
    await page.navigateTo();
    expect(await page.getAppTitle()).toEqual('CrudApp');
  });
});
