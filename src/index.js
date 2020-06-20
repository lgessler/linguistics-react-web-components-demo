import React from 'react';
import ReactDOM from 'react-dom';
import mount from './react-mount';
import './index.css'

/// BEGIN CODE FOR THIS CODEPEN
/**
 * Displays a single token's form and gloss information. Both fields can be edited.
 * Inputs are uncontrolled unless onFormChange or onGlossChange functions are provided,
 * which will be called with the new value of form or gloss whenever the value is modified.
 */
class Token extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.glossRef = React.createRef();
    this.state = {
      editingForm: false,
      editingGloss: false,
    };
  }

  componentDidMount() {
    // only directly set form and gloss at startup
    const {form, gloss} = this.props;
    if (!this.props.onFormChange) {
      this.formRef.current.innerText = form;
    }
    if (!this.props.onGlossChange) {
      this.glossRef.current.innerText = gloss;
    }
  }

  render() {
    const {onFormChange, onGlossChange} = this.props;

    // Each cell is a span which becomes editable when it is double clicked.
    // If a change handler was supplied as props, the input is controlled, but
    // otherwise it remains uncontrolled.
    return (
      <div className="token">
        <span
          ref={this.formRef}
          contentEditable={this.state.editingForm}
          suppressContentEditableWarning={true}
          className={this.state.editingForm ? "editing" : ""}
          onDoubleClick={() => this.setState({'editingForm': true})}
          onBlur={() => this.setState({'editingForm': false})}
          onInput={onFormChange}
        >
          {onFormChange ? this.props.form : null}
        </span>

        <span
          ref={this.glossRef}
          contentEditable={this.state.editingGloss}
          suppressContentEditableWarning={true}
          className={this.state.editingGloss ? "editing" : ""}
          onDoubleClick={() => this.setState({'editingGloss': true},this.glossRef.current.focus() )}
          onBlur={() => this.setState({'editingGloss': false})}
          onInput={onGlossChange}
        >
          {onGlossChange ? this.props.gloss : null}
        </span>
      </div>
    )
  }
}

class TokenList extends React.Component {
  render() {
    return (
      <div className="token-list">
        <div className="token" key={-99}>
          <span className="key">Form</span>
          <span className="key">Gloss</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

// Define the webcomponent tags we want HTML writers to be able to use
mount({
  'lx-token': ['form', 'gloss', 'onFormChange', 'onGlossChange', Token],
  'lx-token-list': [TokenList]
});


// An example React component that consumes our components above to show
// that they work as controlled inputs as well
class DemoDataSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokens: [
        {form: 'bonjour', gloss: 'hello'},
        {form: 'le', gloss: 'the'},
        {form: 'monde', gloss: 'world'},
      ]
    }
  }

  componentDidMount() {
    // Modify a token on an interval so we can show that the Token component
    // will re-render if its props change, even while it is being edited
    setInterval(() => {
      const newTokens = [...this.state.tokens];
      newTokens[2].form += 'e';
      this.setState({tokens: newTokens})
    }, 2000)
  }

  render() {
    const modifyToken = (i, key, newVal) => {
      const newTokens = [...this.state.tokens];
      newTokens[i][key] = newVal;
      this.setState({tokens: newTokens});
    }
    return (
      <TokenList>
        {this.state.tokens.map((token, i) => (
          <Token
            key={i}
            form={token.form}
            gloss={token.gloss}
            onFormChange={(e) => {
              console.log('form value:', e.target.innerText);
              modifyToken(i, 'form', e.target.innerText);
              console.log('tokens:', this.state.tokens);
            }}
            onGlossChange={(e) => {
              console.log('gloss value:', e.target.innerText);
              modifyToken(i, 'gloss', e.target.innerText);
              console.log('tokens:', this.state.tokens);
            }}
          >
          </Token>
        ))}
      </TokenList>
    )
  }
}


function main() {
  ReactDOM.render(<DemoDataSource />, document.getElementById('root'));
}

main();

