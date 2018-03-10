import React, { Component } from 'react';
import "@jpmorganchase/perspective-viewer";
import "@jpmorganchase/perspective-viewer-hypergrid";
import "@jpmorganchase/perspective-viewer-highcharts";
import DataGenerator from './dataGenerator';


class LocalDataViewer extends Component {

  constructor() {
    super();
    this.setRef = this.setRef.bind(this);
    this.data = new DataGenerator();
  }

  render() {
    return (
        <perspective-viewer {...this.props} ref={this.setRef} />
    );
  }

  setRef(v) {
    this._viewer = v;
  }

  loadRows() {
    if (this._viewer) {
        this._viewer.update(this.data.generateRows());
    }
    setTimeout(function() { this.loadRows(); }.bind(this), 100);
  }

  componentDidMount() {
    this.loadRows();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.filters !== this.props.filters) {
      this._viewer._update();
    }
  }

}

export default LocalDataViewer;
