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
    // First handle special cases that need exact capitalization
    tutorial = tutorial
      .replace('stopPropagation', 'StopPropagation')
      .replace('preventDefault', 'PreventDefault')
      .replace('JSONP', 'JSONP')
      .replace('NaN', 'NaN')
      .replace('API', 'API')
      .replace('OO', 'OO');

    // Then apply title case to the remaining words
    return tutorial.split(' ')
      .map(word => {
        // Skip words that are already properly capitalized
        if (['StopPropagation', 'PreventDefault', 'JSONP', 'NaN', 'API', 'OO'].includes(word)) {
          return word;
        }
        // Handle words with punctuation (like '===?')
        if (word.match(/[^a-zA-Z]/)) {
          const firstLetter = word.charAt(0).toUpperCase();
          const rest = word.slice(1).toLowerCase();
          return firstLetter + rest;
        }
        // Standard title casing
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
};