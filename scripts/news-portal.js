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
    const allNews=document.getElementById('all-news')
    allNews.innerHTML=''
    categoryName.innerText=name
    categoryCount.innerText=data.data.length
    data.data.forEach(singleNews => {
        const {_id,image_url,title,total_view,details,author}=singleNews
        const {name,img,published_date}=author
        // console.log(singleNews)
        // console.log(_id)
        allNews.innerHTML+=`
        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${image_url}" class="h-100 img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${details.slice(0,250)}</p>
            </div>
            <div class="card-footer border-0 bg-body d-flex align-items-center justify-content-between">
                <div class="d-flex gap-3 align-items-center">
                    <img src="${img}" height="40px" width="40px" class="img-fluid rounded-circle" alt="...">
                    <div>
                        <p class="m-0 p-0">${name}</p>
                        <p class="m-0 p-0">${published_date}</p> 
                    </div>
                </div>
                <div class="d-flex align-items-center cst">
                    <i class="fas fa-eye"></i>
                    <p class="m-0">${total_view}</p>
                </div>
                <div>
                    <i class="fas fa-star"></i>
                </div>
                <div>
                    <i data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="detailsSingleNewsLoad('${_id}')" class="fas fa-arrow-right"></i>
                </div>
            </div>
          </div>
        </div>
        </div>
        `
    });
}

const detailsSingleNewsLoad=(id)=>{
    const url=` https://openapi.programming-hero.com/api/news/${id}`
    fetch(url).then(res=>res.json()).then(data=>showDetailData(data.data[0]))
    
}
const showDetailData=(data)=>{
    const modalBodyId=document.getElementById('modalBodyId')
    const {_id,image_url,title,total_view,details,author}=data
        const {name,img,published_date}=author
    console.log(data)
    modalBodyId.innerHTML=`
       <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${details.slice(0,250)}</p>
            </div>
            <div class="card-footer border-0 bg-body d-flex align-items-center justify-content-between">
                <div class="d-flex gap-3 align-items-center">
                    <img src="${img}" height="40px" width="40px" class="img-fluid rounded-circle" alt="...">
                    <div>
                        <p class="m-0 p-0">${name}</p>
                        <p class="m-0 p-0">${published_date}</p> 
                    </div>
                </div>
                <div class="d-flex align-items-center cst">
                    <i class="fas fa-eye"></i>
                    <p class="m-0">${total_view}</p>
                </div>
                <div>
                    <i class="fas fa-star"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    `
}

const selectIdShow=()=>{
    const selectId=document.getElementById('selectId')
    const showValue=document.getElementById('showValue')
    const value=selectId.value
    showValue.innerText=value
}