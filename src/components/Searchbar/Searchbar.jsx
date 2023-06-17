import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  search = event => {
    event.preventDefault();
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.search}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            name="input"
            type="text"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
        </form>
      </header>
    );
  }
}