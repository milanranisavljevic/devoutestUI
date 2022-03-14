import SignInPage from '../support/pages/signin';
import usersFixture from '../fixtures/users.json'
import articlesFixture from '../fixtures/articles.json'
import HomePage from '../support/pages/home';
import NewPostInput from '../support/pages/newpostinput';
import NewPostPreview from '../support/pages/newpostpreview';
import faker from "faker";

describe('💡 CONDUIT SUITE', () => {

    usersFixture['users'].forEach(user => {

        describe(`💡 USER: "${user.email}" PASSWORD: "${user.password}"`, () => {

            before('Sign In', () => {
                const signIn = new SignInPage();
                signIn.visit();
                signIn.fillEmail(user.email)
                signIn.fillPassword(user.password)
                signIn.submit();
            });

            it(`🔎 Verify Home Navigation`, () => {
                const homePage = new HomePage();
                homePage.goToHome();
            });

            it(`🔎 Verify New Post Navigation`, () => {
                const homePage = new HomePage();
                homePage.goToNewPost();
            });

            articlesFixture['articles'].forEach(article => {

                beforeEach('Navigate to New Post', () => {
                    const homePage = new HomePage();
                    homePage.goToNewPost();
                });

                describe(`💡 Publish Article "${article.title}"`, () => {

                    it(`🔎 Verify Input of New Post`, () => {
                        const newPostInputPage = new NewPostInput();
                        newPostInputPage
                            .getArticleTitleInput()
                            .should('be.visible')
                            .clear()
                            .type(`${article["title"]} ${faker.random.number()}`);
                        newPostInputPage
                            .getArticleAboutInput()
                            .clear()
                            .should('be.visible')
                            .type(article['about']);
                        newPostInputPage
                            .getWriteArticleInput()
                            .should('be.visible')
                            .clear()
                            .type(article['content']);
                        newPostInputPage
                            .getEnterTagsInput()
                            .should('be.visible')
                            .clear()
                            .type(article['tags']);
                        newPostInputPage
                            .getPublishArticleButton()
                            .should('be.visible')
                            .click();
                    });

                    it(`🔎 Verify New Post is Correctly Published`, () => {
                        const newPostPreview = new NewPostPreview();
                        newPostPreview
                            .getArticleTitle()
                            .should('be.visible')
                            .and('contains.text', article["title"]);
                    })
                })


            })


            it(`🔎 Verify Settings Navigation`, () => {
                const homePage = new HomePage();
                homePage.goToSettings();
            })
        })
    })

    after('logout', () => {
        cy.logout();
    });

});