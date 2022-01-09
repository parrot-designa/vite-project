import { nextTick } from 'vue'
import type { ObjectDirective, ComponentPublicInstance } from 'vue';

export const SCOPE = 'ElInfiniteScroll'

type InfiniteScrollCallback = () => void
type InfiniteScrollEl=HTMLElement & {
    [SCOPE]:{
        container:HTMLElement | Window
        containerEl:HTMLElement
        instance:ComponentPublicInstance
        delay:number
        lastScrollTop:number
        cd:InfiniteScrollCallback
        onScroll:()=>void
        observer?:MutationObserver
    }
}

const InfiniteScroll:ObjectDirective<
    InfiniteScrollEl,
    InfiniteScrollCallback
> = {
    async mounted(el,binding){
        const { instance,value:cb } = binding;
        
        //...省略函数判断
        
    }
}


export default InfiniteScroll;