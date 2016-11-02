var regex = /Liviu\s+(Nicolae)?\s*Dragnea/gi 

function dragnea(node) {
    var walk = document.createTreeWalker(node,NodeFilter.SHOW_TEXT,null,false);
    var node;

    while(node=walk.nextNode()) {
    var text = node.nodeValue;
    if (text.search(regex) >= 0) {   
        node.nodeValue = text.replace(regex, 'Infractorul condamnat definitiv Liviu Dragnea');
        }    
    }
}



var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length) {
      for ( var addedNode of mutation.addedNodes) {
        dragnea(addedNode);
      }
    }
  })
});


// because facebook
observer.observe(document.body, { childList: true,  subtree: true });

dragnea(document.body);