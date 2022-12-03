import renderToDOM from '../../utils/renderToDom';
import getLangTechs from '../../api/languagesData';

const selectLang = (user, obj = {}) => {
  getLangTechs(user).then((arr) => {
    let domString = `
  <label for="languages">Select Language/Tech</label>
    <select class="form-control" id="category" required>
    <option value="no language selected">Select Language/Tech</option>`;
    arr.forEach((item) => {
      domString += `
      <option value="${item.language}" >${item.language}</option>
      `;
    });
    domString += '</select>';
    renderToDOM('#select-language', domString);
    const select = document.querySelector('#languages');
    if (obj.category) {
      select.value = obj.category;
    } else {
      select.value = 'no language selected';
    }
  });
};

export default selectLang;
