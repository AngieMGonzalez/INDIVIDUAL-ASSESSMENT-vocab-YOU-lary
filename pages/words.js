import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// const emptyVocab = () => {
//   const domString = '<h1>No Words</h1>';
//   renderToDOM('#main-container', domString);
// };

const showVocabWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-word-btn">Add A Vocab Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text mb-2 bold">${item.definition}</p>
            <h6 class="card-subtitle mb-2 text-muted bold">${item.langTech}</h6>
              <hr>
              <div id="edit-word-btn--${item.firebaseKey}" class="btn btn-info">
              <span><i class="fas fa-edit"></i> edit</span>
              </div>
              <div id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger">
              <span><i class="fas fa-trash-alt"></i> delete</span>
              </div>
            </div>
        </div>
      `;
  });
  renderToDOM('#inner-box', domString);
};

export default showVocabWords;
