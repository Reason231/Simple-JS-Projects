var api_url="https://api.quotable.io/random"
const quote=document.querySelector("blockquote")
const author=document.querySelector("#author")

// for the category functionality
const generalQuotes=document.querySelector(".general_Quotes")
const generalSelection=document.querySelector("#general_selection")
const famousQuotes=document.querySelector(".famous_Quotes")
const famousSelection=document.querySelector("#famous_selection")
const specificQuotes=document.querySelector(".specific_Quotes")
const specificSelection=document.querySelector("#specific_selection")

// for getting the author functioanlity
const authorInput=document.getElementById("authorInput")
const authorSearch=document.getElementById("authorsSearch")

// Quote show functionality
let getQuote=async(url)=>{
    const response=await fetch(url)
    var data=await response.json()
    console.log(data[0])


     // Check if the data array is empty or undefined
     if (!data || data.length === 0) {
        console.log("No quote found");
        quote.innerHTML = "No quote found of this author";
        author.innerHTML = "";
        return;
    }

    // Display the quote and author if data exists
    quote.innerHTML=data[0].content
    author.innerHTML=data[0].author

    // If the author has no quote
}

// Twitter functionality
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML,
        "Tweet Window" , "width=600, height=500"
    )
}

// Category shown functionality
generalQuotes.addEventListener("click",()=>{
    
    // If other catergoies are visible, then it hide in order to show only general filter
    if(famousSelection.classList.toggle("active")==true || specificSelection.classList.toggle("active")==true){
        famousSelection.style.visibility="hidden"
        specificSelection.style.visibility="hidden"
        generalSelection.style.visibility="visible"
    }
    
    console.log(generalSelection.classList.toggle("active"))
})

famousQuotes.addEventListener("click",()=>{
    
    if(generalSelection.classList.toggle("active")==true || specificSelection.classList.toggle("active")==true){
        generalSelection.style.visibility="hidden"
        specificSelection.style.visibility="hidden"
        famousSelection.style.visibility="visible"
    }
})

specificQuotes.addEventListener("click",()=>{
    
    if(generalSelection.classList.toggle("active")==true || famousSelection.classList.toggle("active")==true){
        generalSelection.style.visibility="hidden"
        famousSelection.style.visibility="hidden"
        specificSelection.style.visibility="visible"
    }
    specificSelection.classList.toggle("active")
})

   // Show authors in the input field
   const showAuthors = (newAuthors) => {
    try {
        newAuthors.forEach(authorName => {
            const option = document.createElement("option");
            option.value = authorName;
            option.textContent = authorName; // Set text content for better visibility
            authorSearch.appendChild(option);
        });
    } catch (e) {
        console.log("Error while showing the author list in the input field", e);
    }

};

// Get the author 
const getAuthors = async () => {
    let authors = [];
    let totalPages = 0;

    try {
        // First fetch to get the total number of pages
        // Initial Fetch for Total Pages: The code first makes a single fetch call to get the total number of pages.
        const firstResponse = await fetch(`https://api.quotable.io/authors`);
        const firstData = await firstResponse.json();
        totalPages = firstData.totalPages;

        // Create an array of fetch promises for each page
        // Parallel Fetching: It then creates an array of fetch promises for each page and waits for all of them to resolve with Promise.all.
        const fetchPromises = [];
        for (let page = 1; page <= totalPages; page++) {
            fetchPromises.push(fetch(`https://api.quotable.io/authors?page=${page}`));
        }

        // Wait for all fetch promises to resolve
        const responses = await Promise.all(fetchPromises);
        const authorResults = await Promise.all(responses.map(response => response.json()));

        // Flatten the results and show authors
        // Flatten Results: After all pages are fetched, it flattens the results into the authors array and then calls showAuthors to update the dropdown.
        authorResults.forEach(result => {
            authors.push(...result.results.map(author => author.name));
        });

        console.log('All authors:', authors);
        showAuthors(authors); // Show all authors after fetching

    } catch (e) {
        console.log("Error while fetching the authors", e);
    }
};

getAuthors();


// It allows you to detect when and which key is being pressed, even before the key is released.
authorInput.addEventListener("keydown",()=>{
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
    // Log the input field's value

    // It updates the api url
    api_url=`https://api.quotable.io/quotes/random?author=${authorInput.value}`
    // It calls the function in order to show the quote
    getQuote(api_url)


    // Optionally, clear the input field after logging
    authorInput.value = '';
    }
})