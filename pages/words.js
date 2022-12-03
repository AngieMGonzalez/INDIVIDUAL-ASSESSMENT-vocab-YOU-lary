import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// const emptyVocab = () => {
//   const domString = '<h1>No Words</h1>';
//   renderToDOM('#main-container', domString);
// };

const showVocabWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-book-btn">Add A Vocab Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text bold">${item.definition}</p>
          <p>${item.langTech}</p>
            <hr>
            <i id="edit-word-btn--${item.firebaseKey}" class="btn btn-info">
            <span><i class="fas fa-edit"></i>edit</span>
            </i>
            <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger">
            <span><i class="fas fa-trash-alt"></i>delete</span>
            </i>
        </div>
      </div>`;
  });
  renderToDOM('#main-container', domString);
};

export default showVocabWords;
