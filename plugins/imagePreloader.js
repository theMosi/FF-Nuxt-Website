export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('img', function(element,url){
        let img = new Image();
        img.src = url.value;

        img.onload = function(){
            element.src = url.value;
            element.classList.add('fade-in-image');
        }
    })
});