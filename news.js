
const newsNav = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await response.json();
    return data.data.news_category;
    // console.log(data)
}

const allNewsNav = async () => {
    const navNews = await newsNav();
    const allNav = document.getElementById('allNav')
    // const allNew = await allNews()
    console.log(navNews)
    for (const news of navNews) {
        console.log(navNews)
        allNav.innerHTML = `
                   <span class="col mb-3" onclick="loadNews('${navNews[7].category_id
            }')")>Home</span>
                    <span class="col mb-3" id="Breaking-news" onclick="loadNews('${navNews[0].category_id
            }')">${navNews[0].category_name
            }</span>
                    <span onclick="loadNews('${navNews[1].category_id
            }')") class="col mb-3" id="Regular-news">${navNews[1].category_name
            }</span>
                    <span onclick="loadNews('${navNews[2].category_id
            }')") class="col mb-3" id="International-news">${navNews[2].category_name
            }</span>


                    <span onclick="loadNews('${navNews[3].category_id
            }')") class="col mb-3" id="Sports"> ${navNews[3].category_name
            }</span>
                    <span onclick="loadNews('${navNews[4].category_id
            }')") class="col mb-3" id="Entertainment">${navNews[4].category_name
            } </span>
                    <span onclick="loadNews('${navNews[5].category_id
            }')") class="col mb-3" id="Culture">${navNews[5].category_name
            }</span>
                    <span onclick="loadNews('${navNews[6].category_id
            }')") class="col mb-3" id="Arts">${navNews[6].category_name
            }</span>
                    <span onclick="loadNews('${navNews[7].category_id
            }')") class="col mb-3" id="All-news">${navNews[7].category_name
            }</span>
        `

    }
    // console.log(navNews)

}
allNewsNav()


const allNews = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await response.json();
    return data.data;
    // console.log(data)
}

const spinner = isLoading => {
    const loadingSection = document.getElementById('loader')
    if (isLoading) {
        loadingSection.classList.remove('d-none')
    }
    else {
        loadingSection.classList.add('d-none')
    }
}

const loadNews = async (id) => {
    spinner(true)
    const breakingNews = await allNews(id)
    breakingNews.textContent = " ";
    console.log(breakingNews)

    const Result = document.getElementById('search-result');
    Result.innerHTML = "";


    if (breakingNews.length === 0) {
        const div = document.createElement('div');
        // div.classList.add('div1')
        div.innerHTML = `<h1 class="text-secondary  ">No Result Found</h1>`;
        Result.appendChild(div)

    }

    for (const news of breakingNews) {
        console.log(news)
        const { details, title, image_url, total_view, _id } = news;
        const { name, published_date, img } = news.author;


        const div = document.createElement('div');
        div.innerHTML = `
    
            <div class="card mb-3 border-0 shadow-lg p-3 mb-5 bg-body rounded">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image_url}" class="img-fluid rounded-start main-post-img my-3" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${title}</h4>
                        <p class="card-text text-secondary">${details.length > 240 ? details.slice(0, 240) + '...' : details}</p>
    
    
                       <div class="container text-center">
                         <div class="row d-flex align-items-center justify-content-start">
                           <div class="col-12 col-lg-4 d-flex justify-content-start">
                              <img class="post-img" src="${img}">
                              <ul style="list-style-type: none;" class='ps-3'>
                              <li class='post-writer'>${name === null || name === '' ? 'no data' : name}</li>
                              <li class='post-writer'>${published_date === null ? 'no data' : published_date}</li>
                          </ul>
                            </div>
                            <div class="col-12 col-lg-4  d-flex justify-content-start">
                              <span class='view my-4 text-secondary'>view : ${total_view === null || total_view === undefined ? 'no data' : total_view}</span>
                            </div>
                            <div class="col-12 col-lg-4 d-flex justify-content-start">
                            <button type="button"  onclick="loadNewsById('${_id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            More info..
                        </button> 
    
                            </div>
                         </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
            `;
        Result.appendChild(div)
    }
    spinner(false)
}


const allNews2 = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/07`);
    const data = await response.json();
    return data.data;
    // console.log(data)
}

const loadNews2 = async () => {
    spinner(true)
    const breakingNews = await allNews2()
    breakingNews.textContent = " ";
    console.log(breakingNews)

    const Result = document.getElementById('search-result');
    Result.innerHTML = "";


    if (breakingNews.length === 0) {
        const div = document.createElement('div');
        // div.classList.add('div1')
        div.innerHTML = `<h1 class="text-secondary  ">No Result Found</h1>`;
        Result.appendChild(div)

    }

    for (const news of breakingNews) {
        console.log(news)
        const { details, title, image_url, total_view, _id } = news;
        const { name, published_date, img } = news.author;


        const div = document.createElement('div');
        div.innerHTML = `
    
            <div class="card mb-3 border-0 shadow-lg p-3 mb-5 bg-body rounded">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image_url}" class="img-fluid rounded-start main-post-img my-3" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${title}</h4>
                        <p class="card-text text-secondary">${details.length > 240 ? details.slice(0, 240) + '...' : details}</p>
    
    
                       <div class="container text-center">
                         <div class="row d-flex align-items-center justify-content-start">
                           <div class="col-12 col-lg-4 d-flex justify-content-start">
                              <img class="post-img" src="${img}">
                              <ul style="list-style-type: none;" class='ps-3'>
                              <li class='post-writer'>${name === null || name === '' ? 'no data' : name}</li>
                              <li class='post-writer'>${published_date === null ? 'no data' : published_date}</li>
                          </ul>
                            </div>
                            <div class="col-12 col-lg-4  d-flex justify-content-start">
                              <span class='view my-4 text-secondary'>view : ${total_view === null || total_view === undefined ? 'no data' : total_view}</span>
                            </div>
                            <div class="col-12 col-lg-4 d-flex justify-content-start">
                            <button type="button"  onclick="loadNewsById('${_id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            More info..
                        </button> 
    
                            </div>
                         </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
            `;
        Result.appendChild(div)
    }
    spinner(false)
}

loadNews2()


const loadNewsById = news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showModal(data.data))
    // .then(data => console.log(data.data))
}

const showModal = news => {
    spinner(true)
    const newsDeatail = news;
    for (const detail of newsDeatail) {
        console.log(detail)
        const { title, image_url, rating, total_view, author, details } = detail;
        const modal = document.getElementById('modal')
        modal.textContent = "";

        modal.innerHTML =
            `
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class="w-100" src=${image_url} alt="">
            <h5>${title}</h5>
            <p>${details
                .length > 240 ? details.slice(0, 240) + '...' : details}</p>

            <div class="col-12 col-lg-4 d-flex justify-content-start">
                          <img class="post-img" src="${author.img}">
                          <ul style="list-style-type: none;" class='ps-3'>
                          <li class='post-writer'>${author.name === null || author.name === '' ? 'no data' : author.name}</li>
                          <li class='post-writer'>${author.published_date}</li>
                      </ul>
            </div>
            <span class='view my-4 text-secondary'>view : ${total_view === null || author.name === '' ? 'no data' : total_view}</span>
            </br>
            <span class='view my-4 text-secondary'>rating : ${rating.number}</span>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        `
    }
    spinner(false)
}


