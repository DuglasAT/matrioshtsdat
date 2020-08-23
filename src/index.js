import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Graph from 'vis-react';
//import {retornaT1} from './ret';
//import {retornaT2} from './ret';
//import {retornaT2} from './asin/ret';

let arr1 = ["mundo", "como", "estas"];

let row1 = (
  <tr>
    <td>{arr1[0]}</td>
    <td>{arr1[1]}</td>
    <td>{arr1[2]}</td>
  </tr>
);

/*
for(let i=1;i<3;i++){
  row1.push(
    <tr>
      <td>{arr1[0]}</td>
      <td>{arr1[1]}</td>
      <td>{arr1[2]}</td>
    </tr>
  );
}*/
let msj2 = [row1];
msj2.push(row1);
msj2.push(row1);
msj2.push(row1);
msj2.push(row1);
let tabla1 = (
  <div>
    <table class="egt">
      <tr>
        <th>Hoy</th>
        <th>Mañana</th>
        <th>Martes</th>
      </tr>
      <tr>
        <td>Soleado</td>
        <td>Mayormente soleado</td>
        <td>Parcialmente nublado</td>
      </tr>
      <tr>
        <td>19°C</td>
        <td>17°C</td>
        <td>12°C</td>
      </tr>
      {msj2}
    </table>
  </div>
);

document.getElementById('btn1').onclick = function a() {
  ReactDOM.render(
    tabla1,
    document.getElementById('root1')
  );
}

/*
document.getElementById('btn2').onclick = function b() {
  ReactDOM.render(
    <h1>Hola Universo</h1>,
    document.getElementById('root1')
  );
}
*/
document.getElementById('btn2').onclick = function tree() {
  var nodes = [];
  var edges = [];
  // randomly create some nodes and edges
  for (var i = 0; i < 15; i++) {
    nodes.push({ id: i, label: String(i) });
  }
  edges.push({ from: 0, to: 1 });
  edges.push({ from: 0, to: 6 });
  edges.push({ from: 0, to: 13 });
  edges.push({ from: 0, to: 11 });
  edges.push({ from: 1, to: 2 });
  edges.push({ from: 2, to: 3 });
  edges.push({ from: 2, to: 4 });
  edges.push({ from: 3, to: 5 });
  edges.push({ from: 1, to: 10 });
  edges.push({ from: 1, to: 7 });
  edges.push({ from: 2, to: 8 });
  edges.push({ from: 2, to: 9 });
  edges.push({ from: 3, to: 14 });
  edges.push({ from: 1, to: 12 });
  nodes[0]["level"] = 0;
  nodes[1]["level"] = 1;
  nodes[6]["level"] = 1;
  nodes[11]["level"] = 1;
  nodes[13]["level"] = 1;
  nodes[7]["level"] = 2;
  nodes[10]["level"] = 2;
  nodes[12]["level"] = 2;
  nodes[2]["level"] = 3;
  nodes[3]["level"] = 4;
  nodes[4]["level"] = 4;
  nodes[8]["level"] = 4;
  nodes[9]["level"] = 4;
  nodes[5]["level"] = 5;
  nodes[14]["level"] = 5;
  // you can extend the options like a normal JSON variable:
  var data = {
    nodes: nodes,
    edges: edges
  };

  var options = {
    edges: {
      smooth: {
        type: 'cubicBezier',
        forceDirection: 'vertical',
        roundness: 0.4
      },
      color: 'black'
    },
    layout: {
      hierarchical: {
        direction: 'UD'
      }
    },
    physics: false
  };

  var events = {
    select: function (event) {
      var { nodes, edges } = event;
    }
  };
  
  ReactDOM.render(
    <Graph
      graph={data}
      options={options}
      events={events}
      getNetwork={this.getNetwork}
      getEdges={this.getEdges}
      getNodes={this.getNodes}
      vis={vis => (this.vis = vis)}
    />,
    document.getElementById('mynetwork')
  );
}