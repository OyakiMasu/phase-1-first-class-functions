const receivesAFunction = (functionCall) =>{
 functionCall();
};

const returnsANamedFunction = () =>{
    return function newFunction(){};
}

const returnsAnAnonymousFunction = () =>{
    return function (){};
}