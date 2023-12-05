function receivesAFunction(callback){ 
     callback();
};

function returnsANamedFunction(){
     return function greeting(){
          console.log("Hello!")
     };
}

function returnsAnAnonymousFunction(){
     return function() {
          console.log(1+1)
     };
};
