script
      const lightBtn = document.querySelector('.light-btn')
      const darkBtn = document.querySelector('.dark-btn')
      const html = document.querySelector('html')
      const wBtn = document.querySelector('.w-btn')
      const spBtn = document.querySelector('.sp-btn')
      const sBtn = document.querySelector('.s-btn')
      const aBtn = document.querySelector('.a-btn')
      const picW = document.querySelector('.pic-winter')
      const picSp = document.querySelector('.pic-spring')
      const picS = document.querySelector('.pic-summer')
      const picA = document.querySelector('.pic-autumn ')
      const btnRu = document.querySelector('.ru-btn')
      const btnEn = document.querySelector('.en-btn')


      lightBtn.addEventListener('click', function(){
        html.classList.add('light')
        localStorage.setItem('htmlLight', 'light')
      })

      darkBtn.addEventListener('click', function(){
        html.classList.remove('light')
        localStorage.removeItem('htmlLight')
      })

      wBtn.addEventListener('click', function(){
        this.classList.add('active')
        sBtn.classList.remove('active')
        spBtn.classList.remove('active')
        aBtn.classList.remove('active')
        picW.style.display='flex'
        picSp.style.display='none'
        picS.style.display='none'
        picA.style.display='none'
      })

      spBtn.addEventListener('click', function(){
        this.classList.add('active')
        wBtn.classList.remove('active')
        sBtn.classList.remove('active')
        aBtn.classList.remove('active')
        picW.style.display='none'
        picSp.style.display='flex'
        picS.style.display='none'
        picA.style.display='none'
      })

      sBtn.addEventListener('click', function(){
        this.classList.add('active')
        wBtn.classList.remove('active')
        spBtn.classList.remove('active')
        aBtn.classList.remove('active')
        picW.style.display='none'
        picSp.style.display='none'
        picS.style.display='flex'
        picA.style.display='none'
      })

      aBtn.addEventListener('click', function(){
        this.classList.add('active')
        wBtn.classList.remove('active')
        sBtn.classList.remove('active')
        spBtn.classList.remove('active')
        picW.style.display='none'
        picSp.style.display='none'
        picS.style.display='none'
        picA.style.display='flex'
      })

      function checkStorage(){
        if(localStorage.getItem('htmlLight') === 'light' ) {
          html.classList.add('light')
        }else{
          console.log('night')
        }
      }


      checkStorage()




      let arrLang = {
        'en': {
          'skills': 'Skills',
          'portfolio': 'Portfolio',
          'video': 'Video',
          'price': 'Price',
          'contacts': 'Contacts',
        },
        'ru': {
          'skills': 'Навыки',
          'portfolio': 'Портфолио',
          'video': 'Видео',
          'price': 'Цены',
          'contacts': 'Контакты',
        }
      }
      
        $(function() {
          $('.translate').click(function() {
            let lang = $(this).attr('id');
      
            $('.lang').each(function(index, item) {
              $(this).text(arrLang[lang][$(this).attr('key')]);
            });
          });
        });