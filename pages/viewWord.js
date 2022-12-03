import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewWord = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
    <h3>${obj.title}</h3>
     <div class="mt-5">
       <i id="edit-word-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-word--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <p>${obj.definition || ''}</p>
     <hr>
     <p>${obj.langTech}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewWord;
