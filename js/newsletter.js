const newsletterElement = {
    init: function(){
        const form = document.querySelector("form");
        form.addEventListener("submit", newsletterElement.handleSubmitForm)
    },

    isEmailValid: function(email){
        if(email.includes("@")){ 
                 return true;
            }else {return false};
        },

    handleSubmitForm: function(event){
        event.preventDefault();
    
        const inputContainer = document.querySelector("#emailForm")
        const input = document.querySelector("#emailForm").value;
        const hasAlreadyAnError = document.querySelector(".message");
        const errorMessage = document.createElement("span");
        const parent = document.querySelector("label");

        if(!newsletterElement.isEmailValid(input)){
            if(!hasAlreadyAnError){
                errorMessage.textContent = "Valid email required";
                errorMessage.classList.add("message");
                parent.append(errorMessage);
            }inputContainer.classList.add("warning");

            }else {
            if (hasAlreadyAnError) {
                hasAlreadyAnError.remove();
            }inputContainer.classList.remove("warning");
        }

        if(newsletterElement.isEmailValid(input)){
            const container = document.querySelector(".container");
            const popup = document.querySelector(".popup")
            container.remove();
            popup.style.display = "block"
            const validEmail = document.querySelector("strong");
            validEmail.innerHTML = input;
        }

        const form = document.querySelector("form");
        form.reset();
    }
}