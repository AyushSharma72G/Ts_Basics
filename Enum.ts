enum ErrorMessages {
    InternalError = "InternalError",
    WrongCredentials = "invalidCred",
    notFound = "notFound"
}

function PrintMessage(error: ErrorMessages) {
    if (error == ErrorMessages.InternalError) {
        console.log("internal server error")
    }
    else if (error == ErrorMessages.WrongCredentials) {
        console.log("Wrong credentails")
    }
    else {
        console.log("not found")
    }
}

PrintMessage(ErrorMessages.InternalError)