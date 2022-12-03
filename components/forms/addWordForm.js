import clearDOM from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLang from './selectLang';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordForm = (obj = {}) => { // allows us to keep our code dry, reusable func, were dot notating
  clearDOM(); // you can call the function and it would default paramater thats an empty object
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4"> 
      <div class="form-group">
        <label for="title">Vocabulary Word/Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabWord" placeholder="Enter Vocab Word/Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Word definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLang(`${obj.langTech || ''}`); // function creating select dropdown menu
  // lang_id vs. langTech
};

export default addWordForm;
