const checkValidData = (email, message, name) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const msgRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(message);
    const fullNameRegex = /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)* [a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/.test(name);
    return {emailRegex, msgRegex, fullNameRegex}
}

export default checkValidData