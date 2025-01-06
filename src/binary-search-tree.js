const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

    constructor(){
        this.rootAll = null
    }
    root() {
        return this.rootAll
      }
    add(data) {
      let arr = {data: data, left: null, right: null}
      if (this.rootAll===null){
        this.rootAll=arr
      }else{
        func(arr, this.rootAll)
      }
      function func(arr, rootAll){
        if(arr.data>rootAll.data){
            if(rootAll.right===null){
                rootAll.right=arr
            }else{
                func(arr, rootAll.right)
            }
        }else{
            if(rootAll.left===null){
                rootAll.left=arr
            }else{
                func(arr, rootAll.left)
            }
        }
      }
    }
    has(data) {
        if(data===this.rootAll.data){
            return true
         }else if(data>this.rootAll.data){
           return func2(this.rootAll.right, data)
        }else if(data<this.rootAll.data){
           return func2(this.rootAll.left, data)
        }
        function func2(rootAll, data){
            if(data>rootAll.data){
                if(rootAll.right===null){
                    return false
                }else{
                    return func2(rootAll.right, data)
                }
            }else if(data<rootAll.data){
                if(rootAll.left===null){
                    return false
                }else{
                   return func2(rootAll.left, data)
                }
            }else if(data===rootAll.data){
                return true
            }
        }
      }
    find(data) {
         if(data===this.rootAll.data){
            return this.rootAll
         }else if(data>this.rootAll.data){
            return func2(this.rootAll.right, data)
         }else if(data<this.rootAll.data){
            return func2(this.rootAll.left, data)
         }
        
         function func2(rootAll, data){
             if(data>rootAll.data){
                 if(rootAll.right===null){
                     return null
                 }else{
                     return func2(rootAll.right, data)
                 }
             }else if(data<rootAll.data){
                 if(rootAll.left===null){
                     return null
                 }else{
                    return func2(rootAll.left, data)
                 }
             }else if(data===rootAll.data){
                 return rootAll
             }
         }
    }
    min() {
        
        if(this.rootAll.left===null){
            return this.rootAll.data
        }else{
            return func3(this.rootAll)
        }
        function func3(rootAll){
            if(rootAll.left===null){
                return rootAll.data
            }else{
                return func3(rootAll.left)
            }
        }
      }
    
    max() {
        
        if(this.rootAll.right===null){
            return this.rootAll.data
        }else{
            return func3(this.rootAll)
        }
        function func3(rootAll){
            if(rootAll.right===null){
                return rootAll.data
            }else{
                return func3(rootAll.right)
            }
        }
    }
    remove(data){
        if(data===this.rootAll.right.data&&this.rootAll.right.right===null&&this.rootAll.right.left===null){
            return this.rootAll.right=null
         }
         if(data===this.rootAll.right.data&&this.rootAll.right.right===null&&this.rootAll.right.left!==null){
            // this.rootAll.right.data=this.rootAll.right.left.data
            console.log('dffd')
            return this.rootAll.right=this.rootAll.right.left
         }
         if(data===this.rootAll.right.data&&this.rootAll.right.right!==null&&this.rootAll.right.left===null){
            return this.rootAll.right==this.rootAll.right.right
         }
        //  if(data===this.rootAll.right.data&&this.rootAll.right.right!==null&&this.rootAll.right.left!==null){
        //     return this.rootAll.right==this.rootAll.right.right
        //  }
         if(data===this.rootAll.left.data&&this.rootAll.left.right===null&&this.rootAll.left.left===null){
            return this.rootAll.left=null
         }
         if(data===this.rootAll.left.data&&this.rootAll.left.right===null&&this.rootAll.left.left!==null){
            return this.rootAll.left=this.rootAll.left.left
         }
         if(data===this.rootAll.left.data&&this.rootAll.left.right!==null&&this.rootAll.left.left===null){
            return this.rootAll.left=this.rootAll.left.right
         }
        if(data===this.rootAll.data){
            return this.rootAll
         }else if(data>this.rootAll.data){
            return func2(this.rootAll.right, data)
         }else if(data<this.rootAll.data){
            return func2(this.rootAll.left, data)
         }
        
         function func2(rootAll, data){
          
            if(data===rootAll.right.data&&rootAll.right.right===null&&rootAll.right.left===null){
               return rootAll.right=null
            }
            if(data===rootAll.left.data&&rootAll.left.right===null&&rootAll.left.left===null){
                return rootAll.left=null
             }
             if(data>rootAll.data){
                 if(rootAll.right===null){
                     return null
                 }else{
                     return func2(rootAll.right, data)
                 }
             }else if(data<rootAll.data){
                 if(rootAll.left===null){
                     return null
                 }else{
                    return func2(rootAll.left, data)
                 }
           
         }
    }
    }
}

module.exports = {
  BinarySearchTree
};