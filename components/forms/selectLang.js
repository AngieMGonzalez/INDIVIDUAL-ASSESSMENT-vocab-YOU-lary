import renderToDOM from '../../utils/renderToDom';

const selectLang = () => {
  const domString = `<label for="language">Select Language/Technology</label>
    <select class="form-control" id="langTech" required>
    <option value="">Select Language/Tech</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
    `;
  renderToDOM('#select-language', domString);
};

export default selectLang;
