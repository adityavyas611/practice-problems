'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



const https = require('https');
/*
 * Complete the 'topArticles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER limit as parameter.
 * base url for copy/paste:
 * https://jsonmock.hackerrank.com/api/articles?page=<pageNumber>
 */

/**
 * This function will fetch the articles and will return the promise 
 */
const fetchArticles = (pageNumber = 1) => new Promise((resolve, reject) => {
    https.get(`https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}`, res => {
        
        let responseBody = '';
        
        res.setEncoding("utf8");
        
        res.on("data", data => responseBody += data);
        
        res.on("end", () => {
            const parsedArticleData = JSON.parse(responseBody);
            resolve({articles: parsedArticleData.data, totalPages: parsedArticleData.total_pages});
        });
    });
});

// Get the title as per the condition allowed
const getTitleFromArticle = (article) => {
    return article.title || article.story_title || null;
}

// Comparator to sort by comments and alphabets
const sortByCommentAndAlphabet = (current, next) => {
    if(current.num_comments === next.num_comments){
        if(current.articleTitle > next.articleTitle){
            return -1;
        } else if(current.articleTitle < next.articleTitle) {
            return 1;
        } else {
            return 0;
        }
    }
    if(current.num_comments > next.num_comments){
        return -1;
    }
    return 1;
}

async function topArticles(limit) {
    if(limit <= 0) {
        return [];
    }
    
    return new Promise(async (resolve, reject) => {
        let articles = [];
        const initialRequest = await fetchArticles();
        
        articles = [...articles, ...initialRequest.articles];
        
        for(let i = 2; i <= initialRequest.totalPages; i += 1) {
            let anotherRequest = await fetchArticles(i);
            articles = [...articles,...anotherRequest.articles];
        }
        
        articles = articles.map(article => ({
            ...article,
            articleTitle: getTitleFromArticle(article)
        }));
        
        articles.sort(sortByCommentAndAlphabet);
        
        articles.splice(limit);
        
        resolve(articles.map(article => article.articleTitle));
    });
    
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const limit = parseInt(readLine().trim(), 10);

    const result = await topArticles(limit);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
