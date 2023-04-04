class UI {
    constructor() {
      this.profile = document.getElementById('profile');
    }
    //   Profil arayüzünü ekrana basma
    showProfile(user) {
      this.profile.innerHTML = `
      <div class="container border my-4 p-4">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2" />
            <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4 w-100"
              >Profili Göster</a
            >
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary fs-6">Açık Repolar: ${user.public_repos}</span>
            <span class="badge bg-secondary fs-6">Açık Gistler: ${user.public_gist}</span>
            <span class="badge bg-success fs-6">Takipçiler: ${user.followers}</span>
            <span class="badge bg-info fs-6">Takip Edilenler: ${user.following}</span>
            <br /><br />
            <ul class="list-group">
              <li class="list-group-item">Hakkında: ${user.bio}</li>
              <li class="list-group-item">Şirket: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Konum: ${user.location}</li>
              <li class="list-group-item">Hesap Oluşturma Tarihi: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="fs-1 m-5">En Son Repolar</h3>
      <div id="repos" class="container p-3"></div>
      `;
    }
  
    // repoları gösterme
    showRepos(repos) {
      let output = '';
  
      repos.forEach((repo) => {
        output += `
          <div class="card card-body mb-4">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
                <span class="badge bg-primary fs-6">Yıldız: ${repo.stargazers_count} </span>
                <span class="badge bg-secondary fs-6">İzleyenler:${repo.watchers_count} </span>
                <span class="badge bg-success fs-6">Fork'lar: ${repo.forks_count}</span>
              </div>
            </div>
          </div>
        `;
      });
  
      // htmle gönderme
      document.getElementById('repos').innerHTML = output;
    }
  
    // uyarı mesajı oluşturma
    showAlert(message, classname) {
      // div oluşturma
      const div = document.createElement('div');
  
      // class ekleme
      div.className = classname;
  
      // yazıyı ekleme
      div.innerText = message;
  
      // parent elementi alma
      const outlet = document.getElementById('alert');
  
      // htmle gönderme
      outlet.appendChild(div);
  
      // 3 saniye sonra yokolsun
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
    }
  
    // alerti ekrandan silme
    clearAlert() {
      // ekrandaki alerti çekme
      const currentAlert = document.querySelector('.alert');
      // alert varsa onu kaldır
      if (currentAlert) {
        currentAlert.remove();
      }
    }
  
    // temizleme
  
    clearprofile() {
      this.profile.innerHTML = '';
    }
  }