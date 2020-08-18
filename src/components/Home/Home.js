import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'https://perseids-publications.github.io/harrington-trees/xml/CITE_TREEBANK_XML/perseus/lattb/4362/lattb.4362.1.tb.xml',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      url: value,
    });
  }

  render() {
    const { url } = this.state;
    const escapedUrl = encodeURIComponent(url);

    return (
      <>
        <header>
          <div className="row pt-4">
            <div className="col">
              <h3>
                Wordcloud from Treebank
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
              <input className="form-control" type="text" value={url} onChange={this.handleChange} placeholder="Enter URL ..." aria-label="URL" aria-describedby="url-input-group" />
            </div>

            <Link className="btn btn-block btn-primary" to={`/${escapedUrl}`}>
              Create wordcloud
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
