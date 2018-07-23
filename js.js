var nodes = [
    {name: "100", expertise: .85, breadth: .03, category: 'tech'},
    {name: "200", expertise: .95, breadth: .02, category: 'tech'},
    {name: "300", expertise: .9, breadth: -.0, category: 'design'},
    {name: "400", expertise: .4, breadth: .12, category: 'design'},
    {name: "500", expertise: .75, breadth: .0, category: 'design'},
    {name: "600", expertise: .8, breadth: .05, category: 'design'},
    {name: "700", expertise: .15, breadth: .2, category: 'tech'},
    {name: "200", expertise: .8, breadth: -.05, category: 'tech'},
    {name: "800", expertise: .2, breadth: .6, category: 'tech'},
    {name: "900", expertise: .22, breadth: .42, category: 'tech'},
    {name: "1000", expertise: .15, breadth: .5, category: 'tech'},
    {name: "100", expertise: .75, breadth: -.1, category: 'tech'},
    {name: "300", expertise: .3, breadth: -.1, category: 'tech'},
    {name: "400", expertise: .15, breadth: -.2, category: 'tech'},
    {name: "1100", expertise: .6, breadth: .1, category: 'design'},
    {name: "500", expertise: .7, breadth: -.05, category: 'design'},
    {name: "600", expertise: .45, breadth: -.1, category: 'tech'},
    {name: "700", expertise: .15, breadth: -.9, category: 'other'},
    {name: "800", expertise: .2, breadth: -.5, category: 'design'},
    {name: "1200", expertise: .1, breadth: .8, category: 'other'},
    {name: "900", expertise: .1, breadth: -.8, category: 'other'},
    {name: "1000", expertise: .1, breadth: -.7, category: 'design'},
    {name: "2000", expertise: .05, breadth: -1, category: 'other'},
    {name: "2000", expertise: .1, breadth: .3, category: 'design'},
    {name: "110", expertise: .55, breadth: -.05, category: 'tech'},
    {name: "2015", expertise: .1, breadth: -.3, category: 'other'},
    {name: "2018", expertise: .1, breadth: .6, category: 'tech'},
    {name: "2018", expertise: .05, breadth: -.45, category: 'other'},
    {name: "2015", expertise: .1, breadth: .45, category: 'other'},
  ],
  nodeContainer = document.querySelector('.nodes');


createNodes();


function createNodes() {
  var i, l = nodes.length, n, nElem, nElemShape;

  for  (i = 0; i < l; i++) {
    n = nodes[i];
    nElem = document.createElement('div');
    nElem.className = 'node';
    nElem.style.opacity = 0;

    nElemShape = document.createElement('div');
    nElemShape.innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; ' + n.name;
    nElemShape.className = 'node-shape category-' + n.category;


    nElem.appendChild(nElemShape);
    nodeContainer.appendChild(nElem);
    nodes[i].elem = nElem;
  }

}


function animate() {
  var i, l = nodes.length, n, nElem, x, y, trans;

  for (i = 0; i < l; i++) {
    n = nodes[i];
    x = Math.round(n.breadth * nodeContainer.offsetWidth / 2);
    y = - Math.round(.025 + n.expertise * nodeContainer.offsetHeight * .95);
    n.elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    n.elem.style.transitionDelay = i/16 + 's';
    n.elem.style.opacity = 1;
  }
}

$(window).resize(function () {
  animate();
});

animate();
