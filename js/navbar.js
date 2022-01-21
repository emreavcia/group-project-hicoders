

export const handleNavbar = (pArray) => {

    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand text-white ms-3" href="./index.html">GVS</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
            class="collapse navbar-collapse me-5 flex-wrap"
            id="navbarNavAltMarkup"
        >
            <div class="navbar-nav ms-auto me-5">
                <a
                class="nav-link text-white home"
                aria-current="page"
                href=""
                id="home"
                >Home</a
                >
               ${pArray.map(group => {

        return `
                 <a class="nav-link text-white" href="" id="${group.id}"
                >${group.className}</a
              >      
                       `
    }).join("")
        }
            </div>
        </div>
    </div>
</nav>
    `
}




