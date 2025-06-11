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
  const specialTerms = ['OO', 'API', 'NaN', 'JSONP', 'StopPropagation', 'PreventDefault'];

  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Check for exact matches (like 'NaN' or 'API')
      const normalized = word.replace(/[^a-zA-Z]/g, ''); // Remove punctuation for comparison
      const punctuation = word.slice(normalized.length); // Save punctuation

      const special = specialTerms.find(term => term.toLowerCase() === normalized.toLowerCase());
      if (special) return special + punctuation;

      // Capitalize first letter, lower the rest
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
};
