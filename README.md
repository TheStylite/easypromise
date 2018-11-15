## EasyPromise

该工具是一个对象，可以直接使用



### API



#### parllerArg

EasyPomise的内置存放异步任务的数组





#### pushparal()

参数为异步任务或者同步任务，将任务放入parllerArg





#### parallel(callback)

参数:callback()回调函数

异步并发parllerArg内的所有异步任务.

callback函数有两个参数，err, data。err为执行并发异步任务时所抛出的异常，而data则为执行成功的回调数据，调用时可用if(err)来判断是否有异常，遵循node error-first风格



