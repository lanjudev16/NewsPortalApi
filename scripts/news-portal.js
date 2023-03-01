const fetchCategories=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url).then(res=>res.json()).then(data=>showCategories(data.data))
}
const showCategories=(data)=>{
    const categoriesContainer=document.getElementById('categories-container')
    data.news_category.forEach(singleCategory=> {
        categoriesContainer.innerHTML+=`
        <a class="nav-link " href="#" onclick="fetchCategoriesNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>
        `
        // const p=document.createElement('p')
        // p.innerHTML=`
        // <a class="nav-link " href="#">${singleCategory.category_name}</a>
        // `
        // categoriesContainer.appendChild(p)
        
    });
}

//fetch all newses available here
const fetchCategoriesNews=(id,name)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url).then(res=>res.json()).then(data=>showALlNews(data,name))
    
}
const showALlNews=(data,name)=>{
    const categoryName=document.getElementById('categoryName')
    const categoryCount=document.getElementById('categoryCount')
    categoryName.innerText=name
    categoryCount.innerText=data.data.length
}