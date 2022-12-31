import clearDOM from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLangForm = (obj = {}) => {
  clearDOM();
  const domString = `
    <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="lang">Language/Tech to Add:</label>
        <input type="text" class="form-control" id="language-technology" placeholder="CSS, HTML, or JavaScript" value="${obj.langTech || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Language/Tech</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addLangForm;
