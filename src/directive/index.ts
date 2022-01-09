import infiniteScroll from './infinite-scroll'

export function install(app){
    console.log("===app===",app);
    [infiniteScroll].forEach(item=>{ 
        app.directive('InfiniteScrollTest',item)
    })
}

