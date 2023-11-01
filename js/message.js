const messages = {
    addMessageToElement: function(messageContent, parentElement){
        const errorMessage = document.createElement("span");
        errorMessage.textContent = messageContent;
        errorMessage.classList.add("message");
        parentElement.append(errorMessage);
    }
}