//get the form fields from the query string (GET request)
let formFields = new URLSearchParams(window.location.search)

//insert the name the user gave into the thank you message
document.querySelector("#name").innerHTML = 
    `${formFields.get("name")}`

//generate a custom message based on outreach value
let msg = ""
let outreach = formFields.get("outreach")

if(outreach == 1) {
    msg = "Honest me too... I steal a cookie when your not looking."
} else if(outreach == 2) {
    msg = "It's a beautiful gift if you can't bake."
} else if(outreach == 3) {
    msg = "Maybe you sure keep it for youself"
} else {
    msg = "If I read it's for work... I will spit in these cookies"
}

//display custom message
document.querySelector("#message").innerHTML = msg