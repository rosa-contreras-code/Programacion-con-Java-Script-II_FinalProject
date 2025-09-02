class SearchView{
    // #parentEl = document.querySelector(".search");
    _parentEl = document.querySelector(".search");

    getQuery(){
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }

    addHandlerSearch(handler){
        this._parentEl.addEventListener("submit", e =>{
            e.preventDefault();
            handler();
        });
    }

    // #clearInput(){
    _clearInput(){
        this._parentEl.querySelector(".search__field").value = "";
    }

}

export default new SearchView();