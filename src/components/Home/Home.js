import React, { Component } from 'react';

import clickTreebank from './click-treebank.png';
import copyLink from './copy-link.png';
import pasteLink from './paste-link.png';
import createWordVr from './create-vr.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      chunk: '',
      redirect: false,
    };

    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleChunkChange = this.handleChunkChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleUrlChange({ target: { value } }) {
    this.setState({
      url: value,
    });
  }

  handleChunkChange({ target: { value } }) {
    this.setState({
      chunk: value,
    });
  }

  handleKeyDown({ key }) {
    const { url, chunk } = this.state;

    if (key === 'Enter' && url !== '' && chunk !== '') {
      this.setState({
        redirect: true,
      });
    }
  }

  render() {
    const { url, chunk, redirect } = this.state;
    const escapedUrl = Buffer.from(url).toString('base64');

    if (redirect) {
      // eslint-disable-next-line no-undef
      window.location = `/${escapedUrl}/${chunk}`;

      return (
        <div>
          Redirecting...
        </div>
      );
    }

    return (
      <>
        <header>
          <div className="row pt-4">
            <div className="col">
              <h1 className="h3">
                Virtual Reality Treebank Explorer
              </h1>
              <h2 className="h6">
                Enter the URL for a treebank XML document and a sentence ID:
              </h2>
            </div>
          </div>
        </header>
        <div className="row pt-2 pb-2">
          <div className="col-8 offset-lg-1 pr-0">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text" id="url-input-group">URL:</span>
              </div>
              <input className="form-control" type="text" value={url} onChange={this.handleUrlChange} onKeyDown={this.handleKeyDown} placeholder="URL ..." aria-label="URL" aria-describedby="url-input-group" />
            </div>
          </div>
          <div className="col-4 col-lg-2 pl-1">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text" id="id-input-group">ID:</span>
              </div>
              <input className="form-control" type="text" value={chunk} onChange={this.handleChunkChange} onKeyDown={this.handleKeyDown} placeholder="ID ..." aria-label="ID" aria-describedby="id-input-group" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <a className="btn btn-block btn-primary" href={`/${escapedUrl}/${chunk}`}>
              Explore
            </a>
          </div>
        </div>
        <hr />
        <div className="row pt-2">
          <div className="col">
            <h3 className="h4">
              Examples
            </h3>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-sm-6">
            <dl>
              <dt className="pb-1">
                Herodotus,
                {' '}
                <em>
                  The Histories
                </em>
              </dt>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtMS0xOS1idTMueG1s/1">
                  1.1-1.19 / 1
                </a>
              </dd>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtMjAtMzktYnUyLnhtbA==/3">
                  1.20-1.39 / 3
                </a>
              </dd>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2dvcm1hbi10cmVlcy94bWwvaGR0LTEtNDAtNTktYnUyLnhtbA==/2">
                  1.40-1.59 / 2
                </a>
              </dd>
              <dt className="pt-1 pb-1">
                Sophocles,
                {' '}
                <em>
                  Antigone
                </em>
              </dt>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2RhcGhuZS10cmVlcy94bWwvdGxnMDAxMS90bGcwMDIvdGxnMDAxMS50bGcwMDIuZGFwaG5lX3RiLWdyYzEueG1s/8">
                  1-1353 / 8
                </a>
              </dd>
              <dt className="pt-1 pb-1">
                Lucian,
                {' '}
                <em>
                  A True Story
                </em>
              </dt>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvZ3JjdGIvNTI3OS9ncmN0Yi41Mjc5LjEudGIueG1s/1">
                  1-4 / 1
                </a>
              </dd>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvZ3JjdGIvNTI4MC9ncmN0Yi41MjgwLjEudGIueG1s/127">
                  5-47 / 127
                </a>
              </dd>
            </dl>
          </div>
          <div className="col-sm-6">
            <dl>
              <dt className="pb-1">
                C. Iulius Caesar,
                {' '}
                <em>
                  Gallic War
                </em>
              </dt>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNzIyOS9sYXR0Yi43MjI5LjEudGIueG1s/1">
                  1.1-1.10 / 1
                </a>
              </dd>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNDM2Mi9sYXR0Yi40MzYyLjEudGIueG1s/15">
                  4.24-4.36 / 15
                </a>
              </dd>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNDM1MC9sYXR0Yi40MzUwLjEudGIueG1s/3">
                  5.24-5.48 / 3
                </a>
              </dd>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbWlzY3RiLzMyNi9taXNjdGIuMzI2LjEudGIueG1s/12">
                  6.13-6.20 / 12
                </a>
              </dd>
              <dt className="pt-1 pb-1">
                M. Tullius Cicero,
                {' '}
                <em>
                  First Catilinarian
                </em>
              </dt>
              <dd>
                <a href="/aHR0cHM6Ly9wZXJzZWlkcy1wdWJsaWNhdGlvbnMuZ2l0aHViLmlvL2hhcnJpbmd0b24tdHJlZXMveG1sL0NJVEVfVFJFRUJBTktfWE1ML3BlcnNldXMvbGF0dGIvNjM2MS9sYXR0Yi42MzYxLjEudGIueG1s/1">
                  1.1-1.10 / 1
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <hr />
        <div className="row pt-2">
          <div className="col">
            <h3 className="h4">
              Importing a treebank
            </h3>
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
            <img src={createWordVr} className="img-fluid border" alt="treebank template page" />
            <p className="text-left pt-2">
              4. Click the &quot;Explore&quot; button.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
