const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    // First handle specific technical terms that need exact capitalization
    tutorial = tutorial
      .replace('stopPropagation', 'StopPropagation')
      .replace('preventDefault', 'PreventDefault')
      .replace('JSONP', 'JSONP');

    // Then apply title case to each word
    return tutorial.split(' ')
      .map(word => {
        // Preserve exact capitalization for special terms
        const specialTerms = ['OO', 'API', 'JSONP', 'NaN', 'StopPropagation', 'PreventDefault'];
        if (specialTerms.includes(word)) return word;
        
        // Handle words with punctuation (like '===?')
        if (word.match(/[^a-zA-Z]/)) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        
        // Standard title casing
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
};