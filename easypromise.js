


!(typeof Promise) && console.error('Your browser does not support Promise');
let EasyPromise = {
    parllerArg:[],
    parallel(callback){       //异步并发
      !this.parllerArg.length && console.error('parllerArg is Empty!!');
      Promise.all(this.parllerArg).then(data => {                 //error - first
        callback(null,data)
      },err => {
        callback(err);
      });
      return this;
    },
    pushparal(obj){
      !obj && console.error('parameter must be certain!');
      this.parllerArg.push(Promise.resolve(obj));
      return this;
    },
}

export default EasyPromise;
