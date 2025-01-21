document.addEventListener("DOMContentLoaded", function() {
    const players = document.querySelectorAll(".video-player");
  
    players.forEach(player => {
      player.addEventListener("play", function() {
        // Quando o vídeo começa a tocar, mostrar a barra de progresso personalizada
        createProgressBar(player);
      });
    });
  
    function createProgressBar(video) {
      let progressContainer = document.createElement('div');
      progressContainer.classList.add('progress-container');
      
      let progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
      
      progressContainer.appendChild(progressBar);
      video.parentElement.appendChild(progressContainer);
  
      video.addEventListener('timeupdate', function() {
        let progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + '%';
      });
    }
  });
  