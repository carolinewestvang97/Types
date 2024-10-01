"use strict";
const listOfArticles = {
    articles: [
        {
            title: "The great gatsby: A Hoax",
            description: "An intruiging article giving you the whole backstory of what really happened to the 'great' gatsby",
            rating: 8,
            hasRead: true,
            views: 43560,
            publishedAt: new Date("1997-11-25"),
            author: {
                firstName: "Miranda",
                lastName: "Kelly",
                age: 43
            }
        },
        {
            title: "The real heroes of WW2",
            description: "In this article I'm highligting some important people in the WW2 history, whom never got credit for their heroic acts",
            rating: 5,
            hasRead: false,
            views: 23440,
            publishedAt: new Date("2003-09-03"),
            author: {
                firstName: "George",
                lastName: "Mingletown",
                age: 60
            }
        },
        {
            title: "Javascript is out",
            description: "Is Javascript on its way out? Typescript is now in",
            rating: 2,
            hasRead: false,
            views: 43,
            publishedAt: new Date(),
            author: {
                firstName: "Caroline",
                lastName: "Andreassen",
                age: 26
            }
        }
    ]
};
const articleTeasers = {
    title: "",
    description: "",
    publishedAt: new Date()
};
// const articleResponse: NetworkResponse<Article> = {
//     responseCode: 200,
//     data: listOfArticles[0]
// }
// const teaserResponse: NetworkResponse<ArticleTeaser> = {
//     responseCode: 404,
//     data: articleTeasers[0]
// }
// console.log(teaserResponse);
const article = {
    title: "The real heroes of WW2",
    description: "In this article I'm highligting some important people in the WW2 history, whom never got credit for their heroic acts",
    rating: 5,
    hasRead: false,
    views: 23440,
    publishedAt: new Date("2003-09-03"),
    author: {
        firstName: "George",
        lastName: "Mingletown",
        age: 60
    }
};
function consoleLog(input) {
    if ("articles" in input) {
        input.articles.forEach(article => console.log(article));
    }
    else {
        console.log(input);
    }
}
//consoleLog(article);
consoleLog(listOfArticles);
