var regex = /((?!definitiv))(Liviu)?\s?(Nicolae)?\s*Dragnea/gi 

function dragnify(node) {
    var walk = document.createTreeWalker(node,NodeFilter.SHOW_TEXT,null,false);
    var node;

    while(node=walk.nextNode()) {
      var text = node.nodeValue;
      if (text.search(regex) >= 0) {   
            node.nodeValue = text.replace(regex, ' infractorul condamnat definitiv Liviu Dragnea');
          }    
      }
}



var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length) {
      for ( var addedNode of mutation.addedNodes) {
        dragnify(addedNode);
      }
    }
  })
});


// because facebook and friends modify the dom after page load
observer.observe(document.body, { childList: true,  subtree: true });

dragnify(document.body);