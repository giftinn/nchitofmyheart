
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('My heart treats you with care.').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); 
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "‎If I could, I’d give you real flowers every day. For now, let this carry my love";
            subtitle.style.fontSize = '20px'; 
            subtitle.style.marginTop = '2px'; 
            subtitle.style.color = '#fff';

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
