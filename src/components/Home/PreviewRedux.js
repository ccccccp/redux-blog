    const initialState = {
        loading:true,
        error:false,
        articleList:[]
    }
    const LOAD_ARTICLES = Symbol("load-articles");
    const LOAD_ARTICLES_SUCCESS = Symbol("load-articles-success");
    const LOAD_ARTICLES_ERROR = Symbol("load-articles-error");
    //action creater
    export const loadArticles = (params)=>({
            types:[LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
            url:'/api/query/previewList',
            params   
        })
   
    
    export default (state=initialState,action)=>{//reducer

        switch(action.type){
            case LOAD_ARTICLES:
            return {
                ...state,
                loading:true,
                error:false
            }
        case LOAD_ARTICLES_SUCCESS:
            return {
                ...state,
                loading:false,
                error:false,
                articleList:action.payload.data
            }
        case LOAD_ARTICLES_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
            default:
            return state;
        }
    }