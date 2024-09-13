class PatientCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  

      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Estilos para el componente */
        </style>
        <div>
          <p>Nombre: <span></span></p>
          <p>Especie: <span></span></p>
          <input type="checkbox"> Atendido
        </div>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
  }
  
  customElements.define('patient-card', PatientCard);