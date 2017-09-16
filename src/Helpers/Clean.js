import React from 'react';

const cleanData = (parsedResponse) => {
  return this.props.resortData.map(obj => {
    return Object.assign ({}, {
      name: this.props.resortData.name
    }
    )
  })
}

export default cleanData;
