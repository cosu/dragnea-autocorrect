var node;
var walk = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);

while(node=walk.nextNode()) {
    var text = node.nodeValue;
    if (text.search(/Liviu Dragnea/gi) >= 0)
    {   
        node.nodeValue = text.replace(/Liviu\s+Dragnea/gi, 'Infractorul condamnat definitiv Liviu Dragnea');
    }    
}
