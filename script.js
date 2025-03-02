const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" }
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('quote').textContent =`${quote.text}`;
    document.getElementById('author').textContent = `${quote.author}`;
  }
  
  // Initialize with a random quote
  displayQuote();
  
  // Change quote every 3 seconds
  setInterval(displayQuote, 3000);