import clearDOM from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordForm = (uid, obj = {}) => { // allows us to keep our code dry, reusable func, were dot notating
  clearDOM(); // you can call the function and it would default paramater thats an empty object
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4"> 
      <div class="form-group">
        <label for="title">Vocabulary Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocab word" placeholder="Enter Vocab Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">definition</label>
        <textarea class="form-control" placeholder="Word definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  // selectLang(uid, `${obj.lang_id || ''}`); // function creating select dropdown menu
};

export default addWordForm;
