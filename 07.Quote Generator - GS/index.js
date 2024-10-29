var randomApi_url = "https://api.quotable.io/random";
var authorApi_url;
var authorPressed = 0;
const quote = document.querySelector("blockquote");
const author = document.querySelector("#author");

// For category functionality
const generalQuotes = document.querySelector(".general_Quotes");
const generalSelection = document.querySelector("#general_selection");
const famousQuotes = document.querySelector(".famous_Quotes");
const famousSelection = document.querySelector("#famous_selection");
const specificQuotes = document.querySelector(".specific_Quotes");
const specificSelection = document.querySelector("#specific_selection");

// For getting the author functionality
const authorInput = document.getElementById("authorInput");
const authorSearch = document.getElementById("authorsSearch");

// For the filter functionality
const checkboxes = document.querySelectorAll(".g1, .g2, .g3");

// ---> The end of importing


// ---> The start of functionality
// Twitter functionality
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerHTML,
    "Tweet Window",
    "width=600, height=500"
  );
}

// Category (General, Famous , Specific) shown functionality
generalQuotes.addEventListener("click", () => {
  famousSelection.classList.remove("active");
  specificSelection.classList.remove("active");
  famousSelection.style.visibility = "hidden";
  specificSelection.style.visibility = "hidden";
  generalSelection.style.visibility = "visible";
});

famousQuotes.addEventListener("click", () => {
  generalSelection.classList.remove("active");
  specificSelection.classList.remove("active");
  generalSelection.style.visibility = "hidden";
  specificSelection.style.visibility = "hidden";
  famousSelection.style.visibility = "visible";
});

specificQuotes.addEventListener("click", () => {
  generalSelection.classList.remove("active");
  famousSelection.classList.remove("active");
  generalSelection.style.visibility = "hidden";
  famousSelection.style.visibility = "hidden";
  specificSelection.style.visibility = "visible";
});

// Show authors in the input field with the help of tag after 3 sec
const showAuthors = (authors) => {
  authors.forEach((authorName) => {
    const option = document.createElement("option");
    option.value = authorName;
    option.textContent = authorName;
    authorSearch.appendChild(option);
  });
};

// Fetch authors with delay
const getAuthors = async () => {
  let authors = [];
  let totalPages = 0;

  try {
    // Initial fetch for first set of authors (e.g., first page)
    const firstResponse = await fetch(`https://api.quotable.io/authors`);
    const firstData = await firstResponse.json();
    totalPages = firstData.totalPages;
    authors = firstData.results.map((author) => author.name).slice(0, 32);

    showAuthors(authors); // Show initial authors

    // Fetch remaining authors after 5–6 seconds
    setTimeout(async () => {
      const fetchPromises = [];
      for (let page = 2; page <= totalPages; page++) {
        fetchPromises.push(
          fetch(`https://api.quotable.io/authors?page=${page}`)
        );
      }

      const responses = await Promise.all(fetchPromises);
      const authorResults = await Promise.all(
        responses.map((response) => response.json())
      );

      authorResults.forEach((result) => {
        authors.push(...result.results.map((author) => author.name));
      });

      showAuthors(authors); // Add remaining authors
      console.log("All authors:", authors);
    }, 5000); // Delay in milliseconds (5000 ms = 5 seconds)
  } catch (e) {
    console.log("Error while fetching the authors", e);
  }
};

getAuthors();

// Keydown listener for author input or Entery key pressed in the input feild
authorInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    authorApi_url = `https://api.quotable.io/quotes/random?author=${authorInput.value}`;
    getQuote(authorApi_url);
    authorPressed++;

    // Clear input field
    authorInput.value = "";
  }
});

// Quote show functionality
let getQuote = async (url) => {
  if (authorPressed <= 0) {
    console.log("Fetching random quote:", randomApi_url);
    const randomResponse = await fetch(randomApi_url);
    const randomData = await randomResponse.json();
    console.log(randomData);

    quote.innerHTML = randomData.content;
    author.innerHTML = randomData.author;
  } else {
    const response = await fetch(url);
    let data = await response.json();

    if (!data || data.length === 0) {
      console.log("No quote found");
      quote.innerHTML = "No quote found for this author";
      author.innerHTML = "";
      authorPressed--;
      return;
    }

    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
  }
};

// Make getQuote globally accessible
window.getQuote = getQuote;



// Filter functionality
const elementName = [];
const uniqueArray = []; // Initialize uniqueArray outside the loop

checkboxes.forEach((element) => {
  element.addEventListener("click", () => {
    const isInclude = uniqueArray.includes(element.id); // Check if the element is already in the uniqueArray

    if (isInclude) {
      // If the checkbox is unchecked or double-clicked, remove the element
      const indexToRemove = uniqueArray.indexOf(element.id);   // Find the index of the tag
      if (indexToRemove > -1) {
        uniqueArray.splice(indexToRemove, 1); // Remove the element from uniqueArray with the help of index i.e indexToRemove
      }
    } else {
      // If it is not included, add it
      uniqueArray.push(element.id);
    }

    console.log(uniqueArray); // Log the updated uniqueArray

    const arrayLength = uniqueArray.length;
    let randomTag;

    if (arrayLength === 1) {
      // Only one tag selected
      randomTag = uniqueArray[0];
    } else if (arrayLength > 1) {
      // Pick one random tag from the unique array
      const randomIndex = Math.floor(Math.random() * arrayLength);
      randomTag = uniqueArray[randomIndex];
    }

    // Construct the API URL with the selected random tag
    if (randomTag) { // Ensure randomTag is defined before constructing the URL
      randomApi_url = `https://api.quotable.io/random?tags=${randomTag}`;
      console.log(randomApi_url);
    }

    // For demonstration, toggling the general selection class
    console.log(generalSelection.classList.toggle("active"));
  });
});

