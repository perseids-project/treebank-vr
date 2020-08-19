import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import clickTreebank from './click-treebank.png';
import copyLink from './copy-link.png';
import pasteLink from './paste-link.png';
import createWordcloud from './create-wordcloud.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({
      url: value,
    });
  }

  handleKeyDown({ key }) {
    const { url } = this.state;

    if (key === 'Enter' && url !== '') {
      this.setState({
        redirect: true,
      });
    }
  }

  render() {
    const { url, redirect } = this.state;
    const escapedUrl = Buffer.from(url).toString('base64');

    if (redirect) {
      return (
        <Redirect to={escapedUrl} />
      );
    }

    return (
      <>
        <header>
          <div className="row pt-4">
            <div className="col">
              <h3>
                Word Cloud from Treebank
              </h3>
              <h6>
                Enter the URL for a treebank XML document:
              </h6>
            </div>
          </div>
        </header>
        <div className="row pt-2">
          <div className="col col-lg-10 offset-lg-1">

            <div className="input-group input-group-lg pb-2">
              <div className="input-group-prepend">
                <span className="input-group-text" id="url-input-group">URL:</span>
              </div>
              <input className="form-control" type="text" value={url} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Enter URL ..." aria-label="URL" aria-describedby="url-input-group" />
            </div>

            <Link className="btn btn-block btn-primary" to={`/${escapedUrl}`}>
              Create word cloud
            </Link>
          </div>
        </div>
        <hr />
        <div className="row pt-2">
          <div className="col">
            <h4>
              Examples
            </h4>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-sm-6">
            <dt className="pb-1">
              Herodotus,
              {' '}
              <em>
                The Histories
              </em>
            </dt>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtMS0xOS1idTMueG1s">
                1.1-1.19
              </Link>
            </dd>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtMjAtMzktYnUyLnhtbA==">
                1.20-1.39
              </Link>
            </dd>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtNDAtNTktYnUyLnhtbA==">
                1.40-1.59
              </Link>
            </dd>
            <dt className="pt-1 pb-1">
              Sophocles,
              {' '}
              <em>
                Antigone
              </em>
            </dt>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2RhcGhuZS10cmVlcy94bWwvdGxnMDAxMS90bGcwMDIvdGxnMDAxMS50bGcwMDIuZGFwaG5lX3RiLWdyYzEueG1s">
                1-1353
              </Link>
            </dd>
            <dt className="pt-1 pb-1">
              Lucian,
              {' '}
              <em>
                A True Story
              </em>
            </dt>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvZ3JjdGIvNTI3OS9ncmN0Yi41Mjc5LjEudGIueG1s">
                1-4
              </Link>
            </dd>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvZ3JjdGIvNTI4MC9ncmN0Yi41MjgwLjEudGIueG1s">
                5-47
              </Link>
            </dd>
          </div>
          <div className="col-sm-6">
            <dt className="pb-1">
              C. Iulius Caesar,
              {' '}
              <em>
                Gallic War
              </em>
            </dt>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNzIyOS9sYXR0Yi43MjI5LjEudGIueG1s">
                1.1-1.10
              </Link>
            </dd>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNDM2Mi9sYXR0Yi40MzYyLjEudGIueG1s">
                4.24-4.36
              </Link>
            </dd>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNDM1MC9sYXR0Yi40MzUwLjEudGIueG1s">
                5.24-5.48
              </Link>
            </dd>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbWlzY3RiLzMyNi9taXNjdGIuMzI2LjEudGIueG1s">
                6.13-6.20
              </Link>
            </dd>
            <dt className="pt-1 pb-1">
              M. Tullius Cicero,
              {' '}
              <em>
                First Catilinarian
              </em>
            </dt>
            <dd>
              <Link to="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNjM2MS9sYXR0Yi42MzYxLjEudGIueG1s">
                1.1-1.10
              </Link>
            </dd>
          </div>
        </div>
        <hr />
        <div className="row pt-2">
          <div className="col">
            <h4>
              Creating a word cloud from a treebank
            </h4>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-3">
            <img src={clickTreebank} className="img-fluid border" alt="treebank template page" />
            <p className="text-left pt-2">
              1. Visit a treebank template page and click on a treebank.
            </p>
          </div>
          <div className="col-md-3">
            <img src={copyLink} className="img-fluid border" alt="treebank template page" />
            <p className="text-left pt-2">
              2. Scroll to the bottom of the page, right click on the &quot;View XML&quot; link,
              and copy the link location.
            </p>
          </div>
          <div className="col-md-3">
            <img src={pasteLink} className="img-fluid border" alt="treebank template page" />
            <p className="text-left pt-2">
              3. Paste the link in the &quot;URL&quot; text input.
            </p>
          </div>
          <div className="col-md-3">
            <img src={createWordcloud} className="img-fluid border" alt="treebank template page" />
            <p className="text-left pt-2">
              4. Click the &quot;Create word cloud&quot; button.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
