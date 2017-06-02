import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends React.Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'error-border' : ''}`;
    return (
      <div className="form-group">
        <label htmlFor="">{field.label}</label>
        <input className={className}
          type="text"
          {...field.input}
        />
        <div className="text-error">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderContentField(field){
    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'error-border' : ''}`;
    return (
      <div className="form-group">
        <label htmlFor="">{field.label}</label>
        <textarea className={className}
          type="text"
          {...field.input}
          rows="10"
        ></textarea>
        <div className="text-error">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderContentField}
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }

}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title!";
  }
  if(!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if(!values.content) {
    errors.content = "Enter some categories!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
);
