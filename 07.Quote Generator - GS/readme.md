- This website provide the quote api
https://github.com/lukePeavey/quotable

- To get the quote
https://api.quotable.io/random
Note: random represents the endpoints

- For the tweet functionality
1. Go to this website 
https://developer.x.com/en/docs/x-for-websites/tweet-button/overview

2. Copy the 2nd one code of that website that is => 
"https://twitter.com/intent/tweet?text=Hello%20world"
// This "text=" represents the text to be displayed in the tweet.

3. After that customize the link for the desgin



## Filter feature endpoints
- Random Quote with tags "technology" AND "famous-quotes" try in browser
https://api.quotable.io/quotes/random?tags=technology,famous-quotes

- Random Quote with tags "History" OR "Civil Rights" 
https://api.quotable.io/quotes/random?tags=history|civil-rights

- Random Quote with a maximum length of 50 characters
https://api.quotable.io/quotes/random?maxLength=50

- Random Quote with a length between 100 and 140 characters
https://api.quotable.io/quotes/random?minLength=100&maxLength=140

- To combine the both technology and length query
https://api.quotable.io/random?tags=technology&maxLength=50

-  Random quote with the author name
random?author=albert-einstein|maya-angelou.https://api.quotable.io/quotes/
OR
https://api.quotable.io/quotes/authors?query=john adams


## Tags can be added 
General Topics: love, friendship, happiness, wisdom, success, failure
Famous Quotes: history, science, art, motivation
Specific Domains: technology, civil rights, philosophy, literature

