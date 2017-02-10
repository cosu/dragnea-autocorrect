var substitutions = [
  {
    "regex": /((?!definitiv))(Liviu)?\s?(Nicolae)?\s*Dragnea/gi,
    "to": " infractorul condamnat definitiv Liviu Dragnea"
  },
  {
    "regex": /(lui)\s?(Liviu)?\s?(Nicolae)?\s*Dragnea/gi,
    "to": " infractorului condamnat definitiv Liviu Dragnea"
  },
   {
    "regex": /((?!definitiv))(Calin)|(Călin)?\s?(Popescu)?\s*(Tariceanu)|(Tăriceanu)/gi,
    "to": " Călin Popescu Tăriceanu, judecat pentru marturie mincinoasa si favorizarea infractorului,"
  }];


function dragnify(node) {
    var walk = document.createTreeWalker(node,NodeFilter.SHOW_TEXT,null,false);
    var node;

    while(node=walk.nextNode()) {
      var text = node.nodeValue;
      substitutions.forEach(function(elem){
        if (text.search(elem.regex) >= 0) {   
            node.nodeValue = text.replace(elem.regex, elem.to);
          }
      })
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