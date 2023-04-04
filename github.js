class Github {
    constructor() {
      this.client_id = '14b4a1e79f7ea275e6e3';
      this.client_secret = '6d7408e1892a97b649707e490962878f571feab1';
      this.repos_count = 10;
      this.repos_sort = 'asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(
        `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      );
  
      const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
      );
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos,
      };
    }
  }