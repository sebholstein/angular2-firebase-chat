import { FirebaseChatPage } from './app.po';

describe('firebase-chat App', function() {
  let page: FirebaseChatPage;

  beforeEach(() => {
    page = new FirebaseChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
