import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#main-container', domString);
};

const showVocabWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Vocab Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-word-btn--${item.firebaseKey}"></i>
            <i id="edit-word-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#main-container', domString);
};

export { showVocabWords, emptyVocab };
