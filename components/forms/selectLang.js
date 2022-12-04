import renderToDOM from '../../utils/renderToDom';
import getLangTechs from '../../api/languagesData';

const selectLang = (uid, obj = {}) => {
  let domString = `
  <label for="languages">Select Language/Tech</label>
  <select class="form-control" id="langTech" required>
  <option value="OTHER">Select Language/Tech</option>`;

  getLangTechs(uid).then((langArray) => {
    langArray.forEach((langObj) => {
      domString += `
      <option 
        value="${langObj.language}">
          ${langObj.language}
      </option>`;
    }); // languages vs words properties/values
    domString += '</select>';
    renderToDOM('#select-language', domString);

    if (obj.langTech) {
      document.querySelector('#langTech').value = obj.langTech;
    } else {
      document.querySelector('#langTech').value = 'OTHER';
    }
  });
};

export default selectLang;
