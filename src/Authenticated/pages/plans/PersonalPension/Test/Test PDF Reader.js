import React from 'react';
import { PDFReader } from 'react-read-pdf';

export default class Test extends Component{
  render(){
    return <div style={{overflow:'scroll',height:600}}>
            <PDFReader url="./booklet.pdf"/>
           </div>
  }
}