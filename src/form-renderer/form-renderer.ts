import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Formio } from 'formiojs';
import { createRef, ref } from 'lit/directives/ref.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('form-renderer')
export class FormRenderer extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;
  constructor() {
    super();
    // this.addEventListener('focus', this._handleFocus);
  }

  formRef = createRef();

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    this.initForm();

    return html`
      <div>
        hellod
        <div ${ref(this.formRef)} id="formio"></div>
      </div>
    `;
  }

  initForm() {
    // alert('')
    Formio.createForm(this.formRef, {
      components: [
        {
          type: 'textfield',
          key: 'firstName',
          label: 'First Name',
          placeholder: 'Enter your first name.',
          input: true,
          tooltip: 'Enter your <strong>First Name</strong>',
          description: 'Enter your <strong>First Name</strong>',
        },
        {
          type: 'textfield',
          key: 'lastName',
          label: 'Last Name',
          placeholder: 'Enter your last name',
          input: true,
          tooltip: 'Enter your <strong>Last Name</strong>',
          description: 'Enter your <strong>Last Name</strong>',
        },
        {
          type: 'select',
          label: 'Favorite Things',
          key: 'favoriteThings',
          placeholder: 'These are a few of your favorite things...',
          data: {
            values: [
              {
                value: 'raindropsOnRoses',
                label: 'Raindrops on roses',
              },
              {
                value: 'whiskersOnKittens',
                label: 'Whiskers on Kittens',
              },
              {
                value: 'brightCopperKettles',
                label: 'Bright Copper Kettles',
              },
              {
                value: 'warmWoolenMittens',
                label: 'Warm Woolen Mittens',
              },
            ],
          },
          dataSrc: 'values',
          template: '<span>{{ item.label }}</span>',
          multiple: true,
          input: true,
        },
        {
          type: 'button',
          action: 'submit',
          label: 'Submit',
          theme: 'primary',
        },
      ],
    }).then(function (form: any) {
      alert('s');
    });
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'form-renderer': FormRenderer;
  }
}
