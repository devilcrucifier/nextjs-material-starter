import React from "react";

export default class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <>
        {statusCode === 404 || statusCode === 500 || statusCode === 502
          ? console.log("Error")
          : null}
      </>
    );
  }
}
