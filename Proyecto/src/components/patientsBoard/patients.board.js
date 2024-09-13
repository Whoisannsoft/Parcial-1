class PatientsBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #e6c5c5;
        }
      </style>
      <form id="patient-form">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Especie" />
        <input type="date" placeholder="Fecha" />
        <input type = "sintomas" placeholder= "sintomas"/>
        <button type="submit">Añadir</button>
      </form>
      <ul id="pending-patients"></ul>

    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector('#patient-form');
    this.pendingList = this.shadowRoot.querySelector('#pending-patients');
    this.attendedList = this.shadowRoot.querySelector('#attended-patients');
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }
}

customElements.define('patients-board', PatientsBoard);
  