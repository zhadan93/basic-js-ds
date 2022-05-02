const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.treeRoot) {
      let currentNode = this.treeRoot;
      
      while (currentNode) {
        
        if (data < currentNode.data) {
          
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } 
          
          currentNode = currentNode.left;
        }

        if (data > currentNode.data) {
          
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } 
          
          currentNode = currentNode.right;
        }
      }
      
    } else {
      this.treeRoot = newNode;
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    let currentNode = this.treeRoot;

    while(currentNode) {
        
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }

    } 

    return null;
  }

  remove(data) {   
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode (currentNode, value) {
      if (currentNode === null) {
        return null;
      }
  
      if (value < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, value);
        return currentNode;
      } 
      
      if (value > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, value);
        return currentNode;
      } 
      
      if (value === currentNode.data) {
        
        if (currentNode.left === null && currentNode.right === null) {
          return null;
        }
  
        if (currentNode.left === null) {
          currentNode = currentNode.right;
          return currentNode;
        }
  
        if (currentNode.right === null) {
          currentNode = currentNode.left;
          return currentNode;
        }
  
        let maxFromLeft = currentNode.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        
        currentNode.data = maxFromLeft.data;
  
        currentNode.left = removeNode(currentNode.left, maxFromLeft.data);
  
        return currentNode;
      } 
    }
    
  
    /*a(this.treeRoot, data);
       
    function a(x, y) {
      
      while (x) {
        if (y === x.data) { 
          
          if (x.left === null && x.right === null) {
            x = null;
            break;
          }
  
          if (x.left && x.right === null) {
            x = x.left;
            break;
          } 
  
          if (x.left === null && x.right) {
            x = x.right;
            break;
          }
  
          if (x.left && x.right) {
            let maxFromLeft = x.left;
  
            while (maxFromLeft.right) {
              maxFromLeft = maxFromLeft.right;
            }

            x.data = maxFromLeft.data;
    
            a(x.left, maxFromLeft.data);
            break;
          }
  
        }
  
        if (y < x.data) x = x.left;
  
        if (y > x.data) x = x.right;
       
      }
      
    }*/
  }

  min() {
    let currentNode = this.treeRoot;

    if (currentNode) {
      
      while (currentNode.left) {
        currentNode = currentNode.left;
      }
  
      return currentNode.data;
    } 
    
    return currentNode;
  }

  max() {
    let currentNode = this.treeRoot;

    if (currentNode) {
      
      while (currentNode.right) {
        currentNode = currentNode.right;
      }
  
      return currentNode.data;
    } 

    return currentNode;
  }
}

module.exports = {
  BinarySearchTree
};