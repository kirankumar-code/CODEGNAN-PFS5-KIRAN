document.addEventListener('DOMContentLoaded', function() {
    const formFieldsContainer = document.getElementById('form-fields');
    const formPreview = document.getElementById('generated-form');

    let fieldId = 0;

    function addTextField() {
        fieldId++;
        const field = document.createElement('div');
        field.className = 'form-field';
        field.innerHTML = `
            <label for="text-field-${fieldId}">Text Field:</label>
            <input type="text" id="text-field-${fieldId}" name="text-field-${fieldId}" placeholder="Enter your text here">
        `;
        formFieldsContainer.appendChild(field);
    }

    function addCheckbox() {
        fieldId++;
        const field = document.createElement('div');
        field.className = 'form-field';
        field.innerHTML = `
            <label for="checkbox-${fieldId}">Checkbox:</label>
            <input type="checkbox" id="checkbox-${fieldId}" name="checkbox-${fieldId}">
        `;
        formFieldsContainer.appendChild(field);
    }

    function addSubmitButton() {
        fieldId++;
        const field = document.createElement('div');
        field.className = 'form-field';
        field.innerHTML = `
            <button type="submit" id="submit-button-${fieldId}">Submit Button</button>
        `;
        formFieldsContainer.appendChild(field);
    }

    function generateForm() {
        formPreview.innerHTML = ''; // Clear previous form preview

        const formClone = formFieldsContainer.cloneNode(true);
        formPreview.appendChild(formClone);
    }

    document.getElementById('add-text-field').addEventListener('click', addTextField);
    document.getElementById('add-checkbox').addEventListener('click', addCheckbox);
    document.getElementById('add-submit-button').addEventListener('click', addSubmitButton);
    document.getElementById('generate-form').addEventListener('click', generateForm);
    
    const previewArea = document.querySelector('.preview');

    // Add drag and drop functionality
    document.querySelectorAll('.field').forEach(field => {
      field.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', this.outerHTML);
      });
    });

    previewArea.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    previewArea.addEventListener('drop', function(e) {
      e.preventDefault();
      const html = e.dataTransfer.getData('text/plain');
      const div = document.createElement('div');
      div.innerHTML = html;
      this.appendChild(div.firstChild);
    });
});
