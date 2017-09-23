//DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {

    let $navitems = document.querySelector('.nav-items');
    let $fabars = $navitems.querySelector('.fa');

    $navitems.addEventListener('click', function (event) {
        // console.log('123');
        let target = event.target;
        switch (true) {
            case target.matches('.fa-bars'):
                {
                    $navitems.classList.remove('hidden')
                    $fabars.classList.remove('fa-bars');
                    $fabars.classList.add('fa-times');
                    console.log('123');

                }
                break
            case target.matches('.fa-times'):
                {
                    $navitems.classList.add('hidden')
                    console.log('123');
                    $fabars.classList.remove('fa-times');
                    $fabars.classList.add('fa-bars');

                }
                break
            case target.matches('.real-item'):
                {
                    $navitems.classList.add('hidden');
                    console.log('456');
                    $fabars.classList.remove('fa-times');
                    $fabars.classList.add('fa-bars');
                    

                }
                break
        }
    });



    console.log(`
     ___           ___           ___           ___     
    /\\__\\         /\\__\\         /\\__\\         /\\  \\    
   /:/  /        /:/  /        /::|  |        \\:\\  \\   
  /:/__/        /:/  /        /:|:|  |         \\:\\  \\  
 /::\\  \\ ___   /:/  /  ___   /:/|:|  |__       /::\\  \\ 
/:/\\:\\  /\\__\\ /:/__/  /\\__\\ /:/ |:| /\\__\\     /:/\\:\\__\\
\\/__\\:\\/:/  / \\:\\  \\ /:/  / \\/__|:|/:/  /    /:/  \\/__/
     \\::/  /   \\:\\  /:/  /      |:/:/  /    /:/  /     
     /:/  /     \\:\\/:/  /       |::/  /     \\/__/      
    /:/  /       \\::/  /        /:/  /                 
    \\/__/         \\/__/         \\/__/                  
\n李晓驰(苏州)，应聘前端开发工程师 lixiaochichn@gmail.com
`);
});