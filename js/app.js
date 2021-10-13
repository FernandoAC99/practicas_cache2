let url = window.location.href
//cambiar practicas_cache por el tuyo
let swDirect = "/practicas_cache2/sw.js"


if(navigator.serviceWorker){
    if(url.includes("localhost")){swDirect='/sw.js'}
    navigator.serviceWorker.register(swDirect);

}


/*if(window.caches){
    console.log("Habemus cache")

    caches.open('prueba')
    caches.open('prueba-v2')

    caches.has('prueba')
        .then((result)=>{
            console.log(result);
    })

    caches.open('cache-v1').then((cache)=>{
        //cache.add("/index.html");

        cache.addAll([
            '/index.html',
            "/css/pages.css",
            "/img/prueba1.png",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        ]).then(()=>{
            //cache.delete('/css/pages.css')
            //cache.put('index.html', new Response('Actualizado desde cache'))
        });

        cache.match('index.html')
            .then((res)=>{
                res.text().then((vtext)=>{console.log(vtext)})
                console.log(res)
            })
    })

    caches.keys()
        .then((keys)=>{
            console.log(keys)
        })
}*/