/* Menu Active Codes */

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = 'var(--menu_text_color)'
      target2.style.display = 'none'
    });
    element.style.color = 'var(--menu_active_text_color)'
    target.style.display= 'flex'
  })
})
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('tab');
if (myParam) {
  console.log(myParam);
  targets.forEach(element => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target);
      if (!target2.id.includes(myParam.toString())) {
        element2.style.color = 'var(--menu_text_color)'
        target2.style.display = 'none'
        // console.log('not here');
      }
      // console.log(myParam.toString());
      // console.log(target2.id);
      // console.log(target2.id.includes(myParam.toString()));
      // var target2 = document.querySelector(element2.dataset.target)
      // element2.style.color = 'var(--menu_text_color)'
      // target2.style.display = 'none'
      else {
        // console.log('here');
        element2.style.color = 'var(--menu_active_text_color)'
        target2.style.display = 'flex'
      }
    });
    // element.style.color = 'var(--menu_active_text_color)'
    // target.style.display= 'flex'
  });
} else {
  console.log('No tab parameter');
}
