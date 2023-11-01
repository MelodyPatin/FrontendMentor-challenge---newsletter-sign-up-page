const newsletterElement = {
    init: function(){
        const form = document.querySelector("form");
        form.addEventListener("submit", newsletterElement.handleSubmitForm)

        const dismiss = document.querySelector(".dismissButton")
        dismiss.addEventListener("click", newsletterElement.handleDismissForm)
    },

    isEmailValid: function(){
        const input = document.querySelector("#emailForm");
        const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (input.value.match(validRegex)) {
          return true;
        } else {
          return false;
        }
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
            container.style.display = "none";
            popup.style.display = "block"
            const validEmail = document.querySelector("strong");
            validEmail.innerHTML = input;
        }

        
    }, 

    handleDismissForm: function(event){
        event.preventDefault();
        const container = document.querySelector(".container");
        const popup = document.querySelector(".popup")
        container.style.display = "flex";
        popup.style.display = "none"

    }
}