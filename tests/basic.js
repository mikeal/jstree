var assert = require('assert'),
    sys = require('sys'),
    jstree = require('../jstree');


var tree = jstree.createTree();

var i = 0;

while (i<100) {
  tree.insert(i.toString(), i);
  i += 1;
}
sys.puts('sdf'+tree.root.size)
assert.ok(tree.root.size == 100)


