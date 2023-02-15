let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (items in contests) {
    console.log(contests[items])
      ihtml += ` <div class="card" style="width: 22rem;">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[items].name}</h5>
          <p class="card-text">STATUS IS ${contests[items].status}</p>
          <p class="card-text">IN 24 HOURS ${contests[items].in_24_hours}</p>
          <p>START AT: ${contests[items].start_time}</p>
          <p>END AT: ${contests[items].end_time}</p>
          <a href="${contests[items].url}" class="btn btn-primary">VISIT CONTESTS</a>
        </div>
      </div>`
  }
  cardContainer.innerHTML = ihtml
})

