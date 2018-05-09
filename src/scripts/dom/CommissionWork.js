// Purpose: Build the commission form
const $ = require("jquery")
const api = require("../api/APIManager")

const buildCommissionForm = function (id) {
    // What customer selected
    api.getSingleAnimal(id).then(animal => {
        const output = $("#commission-form")
        const fragment = document.createDocumentFragment()

        // Header
        const header = document.createElement("h2")
        header.textContent = "Skull & Potter Order Form"
        fragment.appendChild(header)

        // Customer info (name, address, phone number, email)
        // name
        const nameContainer = document.createElement("div")
        nameContainer.classList = "form-group"

        const nameLabel = document.createElement("label")
        nameLabel.textContent = "Name"

        const name = document.createElement("input")
        name.type = "text"
        name.placeholder = "Enter your name here"
        name.classList = "customer__name form-control"

        nameContainer.appendChild(nameLabel)
        nameContainer.appendChild(name)
        fragment.appendChild(nameContainer)

        // address
        const addressContainer = document.createElement("div")
        addressContainer.classList = "form-group"

        const addressLabel = document.createElement("label")
        addressLabel.textContent = "Address"

        const address = document.createElement("input")
        address.type = "text"
        address.placeholder = "Enter your address here"
        address.classList = "customer__address form-control"

        addressContainer.appendChild(addressLabel)
        addressContainer.appendChild(address)
        fragment.appendChild(addressContainer)

        // phone number
        const phoneContainer = document.createElement("div")
        phoneContainer.classList = "form-group"

        const phoneLabel = document.createElement("label")
        phoneLabel.textContent = "Phone Number"

        const phone = document.createElement("input")
        phone.type = "text"
        phone.placeholder = "Enter your phone here"
        phone.classList = "customer__phone form-control"

        phoneContainer.appendChild(phoneLabel)
        phoneContainer.appendChild(phone)
        fragment.appendChild(phoneContainer)

        // email
        const emailContainer = document.createElement("div")
        emailContainer.classList = "form-group"

        const emailLabel = document.createElement("label")
        emailLabel.textContent = "Email Address"

        const email = document.createElement("input")
        email.type = "text"
        email.placeholder = "Enter your email here"
        email.classList = "customer__email form-control"

        emailContainer.appendChild(emailLabel)
        emailContainer.appendChild(email)
        fragment.appendChild(emailContainer)

        // Type of animal
        const animalTypeContainer = document.createElement("div")
        animalTypeContainer.classList = "form-group"

        const animalTypeLabel = document.createElement("label")
        animalTypeLabel.textContent = "Animal Type"

        const mammal = document.createElement("option")
        mammal.textContent = "Mammal"
        const rodent = document.createElement("option")
        rodent.textContent = "Rodent"
        const bird = document.createElement("option")
        bird.textContent = "Bird"
        const animalTypes = document.createElement("select")
        animalTypes.classList = "form-control"

        animalTypes.appendChild(mammal)
        animalTypes.appendChild(rodent)
        animalTypes.appendChild(bird)

        animalTypeContainer.appendChild(animalTypeLabel)
        animalTypeContainer.appendChild(animalTypes)

        fragment.appendChild(animalTypeContainer)

        // Quantity of animals
        const quantityContainer = document.createElement("div")
        quantityContainer.classList = "form-group"

        const quantityLabel = document.createElement("label")
        quantityLabel.textContent = "Quantity"

        const quantity = document.createElement("input")
        quantity.classList = "form-control"
        quantity.type = "number"
        quantity.min = 1
        quantity.max = 10
        quantityContainer.appendChild(quantityLabel)
        quantityContainer.appendChild(quantity)
        fragment.appendChild(quantityContainer)

        // Size
        const animalSizeContainer = document.createElement("div")
        animalSizeContainer.classList = "form-group"

        const animalSizeLabel = document.createElement("label")
        animalSizeLabel.textContent = "Animal Size"

        const small = document.createElement("option")
        small.textContent = "small"
        const medium = document.createElement("option")
        medium.textContent = "medium"
        const large = document.createElement("option")
        large.textContent = "large"
        const animalSizes = document.createElement("select")
        animalSizes.classList = "form-control"

        animalSizes.appendChild(small)
        animalSizes.appendChild(medium)
        animalSizes.appendChild(large)

        animalSizeContainer.appendChild(animalSizeLabel)
        animalSizeContainer.appendChild(animalSizes)

        fragment.appendChild(animalSizeContainer)

        // Mounted?
        const mountedContainer = document.createElement("div")
        mountedContainer.classList = "form-group"

        const mountedLabel = document.createElement("label")
        mountedLabel.textContent = "Animal Type"

        const mounted = document.createElement("option")
        mounted.textContent = "mounted"
        const unmounted = document.createElement("option")
        unmounted.textContent = "unmounted"
        const mountedTypes = document.createElement("select")
        mountedTypes.classList = "form-control"

        mountedTypes.appendChild(mammal)
        mountedTypes.appendChild(rodent)

        mountedContainer.appendChild(mountedLabel)
        mountedContainer.appendChild(mountedTypes)

        fragment.appendChild(animalTypeContainer)

        // When you want it by (date field)
        const dateContainer = document.createElement("div")
        dateContainer.classList = "form-group"

        const dateLabel = document.createElement("date")
        dateLabel.textContent = "Date"

        const date = document.createElement("input")
        date.type = "date"
        date.placeholder = "Enter your delivery date here"
        date.classList = "customer__date form-control"

        dateContainer.appendChild(dateLabel)
        dateContainer.appendChild(date)
        fragment.appendChild(dateContainer)

        const jumbotron = document.createElement("div")
        jumbotron.classList = "jumbotron"

        const animalComponent = document.createElement("p")
        animalComponent.classList = "lead"
        animalComponent.textContent = `
        You are ordering a ${animal.species}. 
        `
        jumbotron.appendChild(animalComponent)

        // Submit button
        const order = document.createElement("button")
        order.type = "button"
        order.classList = "btn btn-primary btn-lg"
        order.textContent = "Commission Animal"
        order.id = `animalOrder--${animal.id}`
        order.onclick = function (event) {
            console.log(event.target.id.split("--")[1])
        }
        jumbotron.appendChild(order)

        fragment.appendChild(jumbotron)

        output.append(fragment)
    }
    )
}

module.exports = buildCommissionForm
