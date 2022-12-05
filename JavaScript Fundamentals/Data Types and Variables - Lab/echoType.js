function echoType (parameter) {

    let type = typeof(parameter);

    if (type === `number` || type === `string`) {

        console.log(type)
        console.log(parameter)
    } else {
        console.log(type)
        console.log('Parameter is not suitable for printing')
    }


}

echoType(5);