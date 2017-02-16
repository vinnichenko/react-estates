import React from 'react';
import ReactDOM from 'react-dom';
import Estates from './components/Estates';
import {data1} from './data/dataset';

ReactDOM.render(<Estates data={data1} />, document.getElementById('container'));