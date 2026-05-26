const projectModal = document.getElementById('projectModal');

projectModal.addEventListener('show.bs.modal', function (event) {
  const card = event.relatedTarget; // card yang diklik

  const imgSrc = card.getAttribute('data-img');
  const title = card.getAttribute('data-title');
  const desc = card.getAttribute('data-desc');

  const modalTitle = projectModal.querySelector('.modal-title');
  const modalImage = projectModal.querySelector('#modalImage');
  const modalDesc = projectModal.querySelector('#modalDesc');

  modalTitle.textContent = title;
  modalImage.src = imgSrc;
  modalDesc.textContent = desc;
});