const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A vocabword
    if (e.target.id.includes('submit-word')) {
      console.warn('CLICKED SUBMIT vocabword', e.target.id);
    }

    // CLICK EVENT FOR EDITING/UPDATING A word
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE word', e.target.id);
      console.warn(firebaseKey);
    }

    // el fin
  });
};

export default formEvents;
