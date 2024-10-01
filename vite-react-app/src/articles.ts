

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}

export interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export const articles: Article[] = [
    {
      slug: "article-1",
      title: "This is the title of the first article",
      description:
        "This is an article description that summarizes the article body.",
      body: "This is the article body containig the entire article text. The article text is longer that the descripton.",
      tagList: ["Tag 1", "Tag 2"],
      createdAt: "2023-06-26T06:06:10.816Z",
      updatedAt: "2023-06-26T06:06:10.816Z",
      favorited: false,
      favoritesCount: 124,
      author: {
        username: "coolBanana",
        bio: "Likes apples",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
        following: false,
      },
    },
    {
      slug: "article-2",
      title: "This is the title of the second article",
      description:
        "This is an article description that summarizes the article body.",
      body: "This is the article body containig the entire article text. The article text is longer that the descripton.",
      tagList: ["Tag 1", "Tag 2", "Tag 3"],
      createdAt: "2023-06-25T06:05:11.817Z",
      updatedAt: "2023-06-25T06:05:11.817Z",
      favorited: false,
      favoritesCount: 2421,
      author: {
        username: "coolBanana",
        bio: "Likes apples",
        image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        following: false,
      },
    },
    {
      slug: "article-3",
      title: "This is the title of the third article",
      description:
        "This is an article description that summarizes the article body.",
      body: "This is the article body containig the entire article text. The article text is longer that the descripton.",
      tagList: ["Tag 2", "Tag 3"],
      createdAt: "2023-06-24T08:02:15.231Z",
      updatedAt: "2023-06-24T08:02:15.231Z",
      favorited: false,
      favoritesCount: 168,
      author: {
        username: "chillApple",
        bio: "Likes Bananas",
        image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        following: false,
      },
    },
  ];
