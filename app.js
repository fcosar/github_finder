// Github ve UI  instance oluşturma
const github = new Github();
const ui = new UI();

// htmlden alınanlar
const searchUser = document.getElementById('searchUser');
const searchButton = document.getElementById('searchButton');

// butonu izleme
searchButton.addEventListener('click', getInput);

function getInput() {
  // eğer inputun içi doluysa
  if (searchUser.value !== '') {
    // http isteği yap > veriyi çek
    github.getUser(searchUser.value).then((data) => {
      if (data.profile.message === 'Not Found') {
        // hatayı göster
        ui.showAlert('Aradığınız Kullanıcı Bulunamadı', 'alert alert-danger');
      } else {
        // kullanıcıyı göster
        ui.showProfile(data.profile);
        // repoları göster
        ui.showRepos(data.repos);
      }
    });
  } else {
    // profili temizle
    ui.clearprofile();
  }
}
