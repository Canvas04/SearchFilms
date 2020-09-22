import React from 'react';
import {Alert} from 'antd';
import Loader from '../loader';
import Card from '../card';

function Error({ loading, isError, onClose, data ,genres}) {
    if (loading && isError) {
      return (
        <>
          {" "}
          <Alert
            message="Error"
            description="Not Internet Connection"
            type="error"
          />
        </>
      );
    } else if (loading) {
      return (
        <>
          <Loader />
        </>
      );
    } else if (isError) {
      return (
        <>
          <Alert
            message="Error"
            description="Such film is not found"
            type="error"
            showIcon
            closable
            onClose={onClose}
          />
        </>
      );
    }
    return (
      <>
        {" "}
        <Card data={data} genres={genres} />
      </>
    );
  }
export default Error;  