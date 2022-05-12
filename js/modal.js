'use strict'

import { imagePreview } from "./image-preview.js"

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    document.getElementById('modal-form').reset()
    document.getElementById('nome').removeAttribute('data-id')
    document.getElementById('modal-image').src = '../img/add.png'
}

const loadImage = () => imagePreview('modal-image-input', 'modal-image')

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('cancelar').addEventListener('click', closeModal)

document.getElementById('modal-image-input').addEventListener('change', loadImage)

export {
    openModal,
    closeModal
}